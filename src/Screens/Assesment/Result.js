import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
const Result = () => {
  return (
    <Screen>
      <View className=" flex flex-1 items-center justify-center">
        <Text className="text-xl font-popBold">Result</Text>
        <Text className="text-xl font-popRegular">
          You scored less than 50%
        </Text>
      </View>
    </Screen>
  );
};

export default Result;

const styles = StyleSheet.create({});
