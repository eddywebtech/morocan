import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const LessonBox = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between  bg-slate-100 p-3 rounded-lg ">
      <View className=" flex-row justify-center items-center ">
        <TouchableOpacity
          onPress={(onPress = () => navigation.navigate("courseLearn"))}
        >
          <Ionicons name="play-circle" size={30} color={"#000bbb"} />
        </TouchableOpacity>
        <View className="justify-center gap-2 pl-2 ">
          <Text className="text-xl text-center font-popSemiBold">
            Python Introduction
          </Text>
          <View className="flex-row items-center ">
            <Ionicons name="play-circle-sharp" color={"#481acb"} />
            <Text className="font-popRegular text-sm text-amber-500 ">
              08:28 min
            </Text>
          </View>
        </View>
      </View>
      <View className="pr-3">
        <Ionicons name="lock-closed" size={20} color={"#481acb"} />
      </View>
    </View>
  );
};

export default LessonBox;

const styles = StyleSheet.create({});
