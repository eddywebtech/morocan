import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
} from "react-native";
import { Audio } from "expo-av";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const CustomMusicPlayer = ({ data }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [loading, setLoading] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;
  const positionX = useRef(new Animated.Value(0)).current;
  const sliderWidth = 180;

  useEffect(() => {
    // Start the rotation animation
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000, // 2 seconds per rotation
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  const rotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const loadAudio = async () => {
    setLoading(true);
    const { sound: newSound } = await Audio.Sound.createAsync(
      {
        uri: data.audioUrl,
      },
      { shouldPlay: true, isLooping: false }
    );
    setSound(newSound);
    setIsPlaying(true);
    const status = await newSound.getStatusAsync();
    console.log(status);
    setDuration(status.durationMillis);
    setLoading(false);
  };

  useEffect(() => {
    loadAudio();
  }, [data]);

  const playPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updatePosition = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      setPosition(status.positionMillis);
      const newX = (status.positionMillis / duration) * sliderWidth;
      Animated.timing(positionX, {
        toValue: newX,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    const interval = setInterval(updatePosition, 100); // Update more frequently
    return () => clearInterval(interval);
  }, [sound, duration]);

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: positionX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = async (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const newPosition =
        (event.nativeEvent.absoluteX / sliderWidth) * duration;
      await sound.setPositionAsync(newPosition);
      setPosition(newPosition);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Animated.Image
          source={{ uri: data.banner }}
          style={[
            styles.musicIcon,
            { transform: [{ rotate: rotateAnimation }] },
          ]}
        />
      </View>

      {loading ? (
        <Text className="text-lg font-popSemiBold">Loading...</Text>
      ) : (
        <View>
          <View className="flex flex-row pb-1 items-center justify-between ">
            <View />
            <View className="flex flex-row items-center ">
              <Text className="text-base font-popRegular" numberOfLines={0}>
                {data.title}
              </Text>
            </View>
            <TouchableHighlight
              underlayColor={"#000"}
              style={{ borderRadius: 90 }}
              onPress={playPause}
            >
              <Ionicons
                name={
                  isPlaying ? "pause-circle-outline" : "play-circle-outline"
                }
                size={28}
                color={"#481acb"}
              />
            </TouchableHighlight>
          </View>
          <View className="flex flex-row items-center justify-center">
            <View style={styles.progressContainer}>
              <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}
              >
                <Animated.View
                  style={[
                    styles.progressIndicator,
                    {
                      transform: [
                        {
                          translateX: positionX,
                        },
                      ],
                    },
                  ]}
                />
              </PanGestureHandler>
            </View>
            <Text className="text-zinc-500 pl-2 ">
              {formatTime(position)} / {formatTime(duration)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 20,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  progressContainer: {
    width: 180,
    height: 3,
    backgroundColor: "#ddd",
  },
  progressIndicator: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#481acb",
    position: "absolute",
    top: -6.5,
    zIndex: 900,
  },
  timeText: {
    fontSize: 16,
  },
  musicIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 70,
    fontSize: 30,
  },
});
export default CustomMusicPlayer;
