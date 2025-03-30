import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import { Feather } from "@expo/vector-icons";
import LessonBox from "../../components/Learning/LessonBox";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../../components/AppButton";
const CourseDetails = ({ route }) => {
  const data = [1, 2, 3, 4, 5, 6];
  const navigation = useNavigation();
  const { courseInfo } = route.params;
  return (
    <Screen>
      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <>
            <View>
              <View className="items-center py-2 justify-between flex-row">
                <TouchableHighlight
                  onPress={() => navigation.goBack()}
                  underlayColor={"#f1f5f9"}
                  style={{ borderRadius: 90, padding: 10 }}
                >
                  <Feather name="arrow-left" size={28} />
                </TouchableHighlight>
                <Text className="font-popBold text-xl " numberOfLines={1}>
                  {courseInfo?.title}
                </Text>
                <View />
              </View>
              <Image
                source={{
                  uri: courseInfo?.banner,
                }}
                resizeMode="cover"
                style={{ height: 280, width: "100%", borderRadius: 10 }}
              />
            </View>
            <View className="flex-row items-center justify-between py-4 ">
              <Text className="font-popBold text-lg text-amber-500 ">
                By {courseInfo?.author}
              </Text>
              <Feather name="download" size={20} />
            </View>
            <View className="py-2">
              <Text className="font-popBold text-2xl ">
                {courseInfo?.title}
              </Text>
              <View className="flex-row items-center gap-1 pt-2">
                <Text className="text-zinc-400 font-popSemiBold ">
                  30 Lectures
                </Text>
                <Text className="text-zinc-400 font-popSemiBold ">|</Text>
                <Text className="text-zinc-400 font-popSemiBold ">
                  15 Hours
                </Text>
              </View>
            </View>
            <View className="py-2">
              <Text className="font-popBold text-2xl ">About this Course</Text>
              <View className="flex-row items-center gap-1 pt-2">
                <Text className="text-zinc-400 font-popRegular text-base text-justify ">
                  This course has been designed to help people course has been
                  designed to help peoplecourse has been designed to help people
                  designed to help peoplecourse has been designed to help people
                </Text>
              </View>
            </View>
            <View className="py-3">
              <View className="flex-row gap-2 ">
                <Text className="text-lg font-popSemiBold text-amber-500">
                  Lessons
                </Text>
                <Text className="text-lg font-popSemiBold">Reviews </Text>
              </View>
            </View>
          </>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20, paddingBottom: 10 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <LessonBox />}
      />
      <AppButton btnStyle={{ borderRadius: 10 }} title={"Enroll now for $50"} />
    </Screen>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({});
