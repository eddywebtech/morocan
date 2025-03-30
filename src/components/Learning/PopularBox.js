import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PopularBox = () => {
  return (
    <View className="bg-teal-50 rounded-xl w-80 h-34 p-3">
      <View className="pb-2">
        <Text className="font-popSemiBold text-lg">Visual Design</Text>
      </View>
      <Text
        numberOfLines={3}
        className="w-full text-sm font-popRegular text-gray-600  "
        textBreakStrategy="simple"
      >
        Learn the entire spectrum of UX design from beginner to advanced courses
        Learn the entire spectrum of UX design from beginner to advanced courses
        Learn the entire spectrum of UX design from beginner to advanced courses
      </Text>
      <View className="flex-row justify-evenly pt-2">
        <Text className="bg-black text-white font-popLight w-auto px-4 py-2 rounded-full">
          36 lessons
        </Text>
        <Text className="bg-black text-white font-popLight w-auto px-4 py-2 rounded-full">
          56 hours
        </Text>
        <Text className="bg-black text-white font-popLight w-auto px-4 py-2 rounded-full">
          2 tutors
        </Text>
      </View>
    </View>
  );
};

export default PopularBox;

const styles = StyleSheet.create({});
