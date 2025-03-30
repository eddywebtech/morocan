import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useRef } from "react";
import { Video, ResizeMode } from "expo-av";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/Screen";
import ChatBox from "../../components/Learning/ChatBox";
import { useNavigation } from "@react-navigation/native";
import Attendance from "../Tutor/Attendance";
const VideoPlay = ({ route }) => {
  const { videoUrl, videoTitle } = route.params;
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <Screen>
        <View className="flex flex-1">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={28} />
            </TouchableOpacity>
            <Text className="font-popBold text-xl " numberOfLines={1}>
              {videoTitle}
            </Text>
            <View />
          </View>

          {status === "loading" ? (
            <Text className="text-xl font-popBold"> Loading </Text>
          ) : (
            <View>
              <Video
                ref={video}
                style={{
                  width: "100%",
                  height: 250,
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 1,
                  elevation: 15,
                }}
                source={{
                  uri: videoUrl,
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping={false}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            </View>
          )}

          <View className="pt-4">
            <Text className="text-xl font-popBold"> Comments </Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 20, paddingBottom: 320 }}
            >
              <ChatBox align={"right"} />
              <ChatBox />
              <ChatBox />
              <ChatBox align={"right"} />
              <ChatBox />
              <ChatBox />
              <ChatBox />
              <ChatBox />
            </ScrollView>
          </View>
        </View>
        <View className=" flex-row items-center ">
          <TextInput
            className="w-[90%] rounded-lg bg-zinc-100 z-auto mb-1 p-2  "
            placeholder="Enter text message"
          />
          <Feather name="send" size={25} />
        </View>
      </Screen>
      <>
        <Attendance
          showModal={showModal}
          handlePress={() => setShowModal(false)}
        />
      </>
    </>
  );
};

export default VideoPlay;
//
