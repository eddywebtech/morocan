import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MockVideo } from "../../Utils/MockData";
const VideoDawah = () => {
  const navigation = useNavigation();
  return (
    <View className="flex bg-white flex-1">
      <FlatList
        data={MockVideo}
        renderItem={({ item }) => (
          <View className="flex-row items-center pl-4 gap-2 pb-2 mt-2 rounded-b-xl w-[100%] ">
            <Image
              source={{
                uri: item.banner,
              }}
              style={{ width: 120, height: 80, borderRadius: 10 }}
            />
            <View className="flex flex-row items-center justify-between w-[60%] ">
              <View className="gap-y-2 justify-center ">
                <Text className="text-xl font-popSemiBold"> {item.title}</Text>
                <Text className="text-base text-zinc-500 font-popLight">
                  5:30min
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("videoPlay", {
                    videoUrl: item.videoUrl,
                    videoTitle: item.title,
                  })
                }
              >
                <AntDesign name="play" color={"#481acb"} size={28} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default VideoDawah;

const styles = StyleSheet.create({});
