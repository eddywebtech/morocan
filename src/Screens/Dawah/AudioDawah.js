import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import NowPlaying from "../../components/NowPLaying";
import { MockAudio } from "../../Utils/MockData";
const AudioDawah = () => {
  const [currentAudio, setCurrentAudio] = useState(null);

  return (
    <View className="flex bg-white flex-1">
      <FlatList
        data={MockAudio}
        renderItem={({ item }) => (
          <View className="flex-row items-center pl-4 gap-2 pb-2 mt-2 rounded-b-xl w-[100%] ">
            <Image
              source={{
                uri: item.banner,
              }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View className="flex flex-row items-center justify-between w-[75%] ">
              <View className="gap-y-2 justify-center ">
                <Text className="text-xl font-popSemiBold">{item.title}</Text>
                <Text className="text-base text-zinc-500 font-popLight">
                  5:30min
                </Text>
              </View>
              <TouchableOpacity onPress={() => setCurrentAudio(item)}>
                <AntDesign name="play" color={"#481acb"} size={28} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {currentAudio && <NowPlaying data={currentAudio} />}
      <View></View>
    </View>
  );
};

export default AudioDawah;

const styles = StyleSheet.create({});
