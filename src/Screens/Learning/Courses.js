import { FlatList, TextInput, StyleSheet, Text, View } from "react-native";
import React from "react";
import CourseBox from "../../components/Learning/CourseBox";
import Screen from "../../components/Screen";
import { MockCourse } from "../../Utils/MockCourse";
import { Feather } from "@expo/vector-icons";
const Courses = () => {
  return (
    <Screen>
      <View className="flex flex-1 ">
        <Text className="font-popBold text-xl self-center pt-2 ">Courses</Text>
        <View className="flex flex-row items-center mt-3 border-[1px] border-gray-300 rounded-md py-2 ">
          <Feather style={{ paddingHorizontal: 10 }} name="search" size={26} />
          <TextInput placeholder="Search for courses..." autoCorrect={false} />
        </View>
        <FlatList
          data={MockCourse}
          renderItem={({ item }) => <CourseBox data={item} />}
          contentContainerStyle={{ gap: 20 }}
        />
      </View>
    </Screen>
  );
};

export default Courses;

const styles = StyleSheet.create({});
