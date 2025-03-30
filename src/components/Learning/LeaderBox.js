import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const LeaderBox = ({ position }) => {
  return (
    <View className="flex-row justify-between items-center px-2 ">
      <View className="flex-row items-center gap-2 pb-2 rounded-b-xl ">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
          }}
          style={{ width: 55, height: 55, borderRadius: 40 }}
        />
        <View className="gap-1">
          <Text className="text-base font-popSemiBold">Fatima Ojo</Text>
          <View className=" flex-row items-center ">
            <MaterialCommunityIcons
              name="star-three-points"
              color={"#481acb"}
              size={20}
            />
            <Text className="text-base font-popSemiBold text-slate-500 ">
              220 MCP
            </Text>
          </View>
        </View>
      </View>
      <Text className="text-base font-popBold text-zinc-800 ">{position}</Text>
    </View>
  );
};

export default LeaderBox;

const styles = StyleSheet.create({});
