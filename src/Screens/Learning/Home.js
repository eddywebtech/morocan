import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import { Feather } from "@expo/vector-icons";
import CategoryBox from "../../components/Learning/CategoryBox";
import ProgressBox from "../../components/Learning/ProgressBox";
import PopularBox from "../../components/Learning/PopularBox";
const Home = () => {
  return (
    <Screen>
      <View className="flex flex-1 pt-4 ">
        <View>
          <Image
            style={{ width: 60, height: 60, alignSelf: "center" }}
            source={require("../../../assets/mon.png")}
          />
        </View>
        <Text className="text-4xl font-popBold">Let's learn</Text>
        <Text className="text-4xl font-popBold">something new</Text>
        <View className="flex flex-row items-center mt-3 border-[1px] border-gray-300 rounded-md py-2 ">
          <Feather style={{ paddingHorizontal: 10 }} name="search" size={26} />
          <TextInput placeholder="Search for courses..." autoCorrect={false} />
        </View>
        <View className="flex  py-4">
          <Text className="pb-4 text-2xl font-popSemiBold">Categories</Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
          </ScrollView>
        </View>
        <View className="flex  py-4">
          <Text className="pb-4 text-2xl font-popSemiBold">In Progress</Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            <ProgressBox />
            <ProgressBox />
            <ProgressBox />
            <ProgressBox />
            <ProgressBox />
          </ScrollView>
        </View>
        <View className="flex  py-4">
          <Text className="pb-4 text-2xl font-popSemiBold">
            Suggested Courses
          </Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            <PopularBox />
            <PopularBox />
            <PopularBox />
            <PopularBox />
            <PopularBox />
          </ScrollView>
        </View>
      </View>
    </Screen>
  );
};

export default Home;
