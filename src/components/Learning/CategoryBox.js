import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CategoryBox = () => {
  return (
    <View className="flex-row border-[1px] items-center w-auto px-4 justify-center h-14 rounded-2xl border-gray-300">
      <View className="bg-orange-500 p-1 rounded-full">
        <Ionicons name="color-palette-outline" size={20} />
      </View>
      <Text className="px-1 font-popSemiBold text-lg">Tawheed</Text>
    </View>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({});
