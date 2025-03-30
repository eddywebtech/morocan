import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import { Entypo } from "@expo/vector-icons";
const Profile = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Screen>
      <View className="flex-row justify-between items-center pr-2">
        <View className="flex-row items-center gap-2 pb-2 rounded-b-xl ">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
            }}
            style={{ width: 60, height: 60, borderRadius: 40 }}
          />
          <View>
            <Text className="text-base font-popSemiBold">Fatima Ojo</Text>
            <Text className="text-base font-popRegular">Joined March 2024</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Entypo name="edit" size={23} />
        </TouchableOpacity>
      </View>

      <FlatList
        ItemSeparatorComponent={
          <View className="h-[0.5px] w-[88%] self-center bg-zinc-200 my-2" />
        }
        contentContainerStyle={{ paddingTop: 20 }}
        data={data}
        renderItem={({ item }) => (
          <View className="flex-row justify-between py-1 items-center  gap-2 ">
            <View className="flex-row justify-between items-center  gap-2">
              <Entypo name="book" size={28} color={"#481acb"} />
              <View>
                <Text className="font-popSemiBold text-xl text-slate-700 ">
                  My Courses
                </Text>
                <Text className="font-popLight text-sm text-slate-700 ">
                  Edit your courses with ease
                </Text>
              </View>
            </View>
            <Entypo name="chevron-small-right" size={28} color={"#000"} />
          </View>
        )}
      />
    </Screen>
  );
};

export default Profile;

const styles = StyleSheet.create({});
