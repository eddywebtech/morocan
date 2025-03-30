import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import LeaderBox from "../../components/Learning/LeaderBox";

const GlobalLeaderBoard = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <View className="flex flex-1 p-3 bg-white">
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => (
          <View className="h-[0.5px] w-[88%] self-center bg-zinc-200 my-2" />
        )}
        renderItem={({ item }) => <LeaderBox position={item} />}
      />
    </View>
  );
};

export default GlobalLeaderBoard;

const styles = StyleSheet.create({});
