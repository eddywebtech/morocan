import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatBox = ({ align }) => {
  return (
    <View
      className={
        align === "right"
          ? "bg-slate-200 p-3 w-[250px] rounded-t-lg self-end"
          : "bg-zinc-200 p-3 w-[250px] rounded-t-lg self-start"
      }
    >
      <Text className="font-popBold text-lg">John Doe</Text>
      <Text className="font-popRegular text-base ">
        The rest of props are available to control the playback of the video,
        but we recommend that
      </Text>
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({});
