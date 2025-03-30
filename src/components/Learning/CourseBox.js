import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { MaterialIcons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");

const CourseBox = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View className=" flex-row self-start p-1 rounded-lg items-start">
      <Image
        source={{
          uri: data?.banner,
        }}
        resizeMode="cover"
        style={{ height: 100, width: 120, borderRadius: 10 }}
      />
      <View className="pl-2  gap-y-3 ">
        <View className="pt-3">
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Courses", {
                screen: "courseDetails",
                params: { courseInfo: data },
              })
            }
          >
            <Text className="text-xl font-popBold">{data?.title}</Text>
          </TouchableOpacity>
          <Text className="text-[#481acb] font-popRegular text-lg">
            {data?.author}
          </Text>
        </View>
        <View className="flex-row items-center justify-between w-full">
          <View className="flex-row">
            <View className="flex-row content-center items-center">
              <Ionicons name="timer-outline" size={20} />
              <Text className="text-gray-400 font-popRegular px-1 ">
                21 Hours
              </Text>
            </View>
            <View className="flex-row items-center first-letter content-center ">
              <Ionicons name="book-outline" size={20} />

              <Text className="text-gray-400 font-popRegular px-1 ">
                48 Lessons
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourseBox;

const styles = StyleSheet.create({});
