import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProgressBox = () => {
  return (
    <View className="bg-zinc-100 rounded-xl w-80 h-32 p-3">
      <View className="flex-row justify-between pb-2 ">
        <Text className="font-popSemiBold text-lg">
          UX/UI Design Foundation
        </Text>
        <Text className="font-semibold text-lg">56%</Text>
      </View>
      <Text
        numberOfLines={3}
        className="w-full text-sm font-popRegular  text-gray-600  "
        textBreakStrategy="simple"
      >
        Learn the entire spectrum of UX design from beginner to advanced courses
        Learn the entire spectrum of UX design from beginner to advanced courses
        Learn the entire spectrum of UX design from beginner to advanced courses
      </Text>
    </View>
  );
};

export default ProgressBox;

const styles = StyleSheet.create({});
