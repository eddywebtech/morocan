import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { mockLecturers } from "../../Utils/MockData";
const Dawah = () => {
  const navigation = useNavigation();
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <Screen>
        <Text className="text-xl text-center pb-3 font-popSemiBold">Dawah</Text>
        <ImageBackground
          source={{
            uri: "https://cdn.pixabay.com/photo/2023/05/21/16/03/mosque-8008801_1280.png",
          }}
          resizeMode="cover"
          imageStyle={{ borderRadius: 10, resizeMode: "cover" }}
          style={{ width: "100%", height: 200 }}
        />
        <View className="flex-row justify-between items-center py-2">
          <Text className="text-xl font-popBold text-start pt-2 ">
            Lecturers
          </Text>
          <TouchableHighlight
            className="p-2 rounded-full bg-yellow-200 "
            underlayColor={"#000"}
            onPress={() => setShowUpload(true)}
          >
            <Feather name="upload" size={23} color={"#481acb"} />
          </TouchableHighlight>
        </View>
        <FlatList
          data={mockLecturers}
          renderItem={({ item }) => (
            <>
              <View className="flex-row items-center gap-2 pb-2 mt-2 rounded-b-xl w-[100%] ">
                <Image
                  source={{
                    uri: item?.banner,
                  }}
                  style={{ width: 90, height: 90, borderRadius: 10 }}
                />
                <View className="flex flex-row items-center justify-between w-[70%] ">
                  <View className="gap-y-2 justify-center ">
                    <Text className="text-xl font-popSemiBold">
                      {item?.name}
                    </Text>
                    <Text className="text-base text-zinc-500 font-popSemiBold">
                      Joined {item?.joint}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("dawahDetails")}
                  >
                    <Entypo
                      name="chevron-with-circle-right"
                      color={"#481acb"}
                      size={28}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        />
      </Screen>
      <Modal transparent visible={showUpload} animationType="slide">
        <View className="bg-slate-500 opacity-50 w-full h-full "></View>
        <View className="w-full absolute bottom-0 h-50 p-6 bg-slate-200 rounded-t-[30px]">
          <View className="flex-row justify-between">
            <Text className="text-xl font-popSemiBold text-center  ">
              Select Media type
            </Text>
            <TouchableOpacity onPress={() => setShowUpload(false)}>
              <Feather name="x-circle" color={"#000ddd"} size={23} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="flex-row items-center gap-x-3 pt-3 "
            onPress={() =>
              navigation.navigate("dawahUpload", { type: "audio" })
            }
          >
            <View className="bg-zinc-300 p-3 rounded-md items-center justify-center ">
              <FontAwesome5 name="microphone" color={"#000ddd"} size={23} />
            </View>
            <Text className="text-xl font-popSemiBold text-center  ">
              Audio Upload
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center  gap-x-3 pt-6 "
            onPress={() =>
              navigation.navigate("dawahUpload", { type: "video" })
            }
          >
            <View className="bg-zinc-300 p-3 rounded-md items-center justify-center ">
              <FontAwesome5 name="video" color={"#000ddd"} size={22} />
            </View>
            <Text className="text-xl font-popSemiBold text-center ">
              Video Upload
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default Dawah;

const styles = StyleSheet.create({});
