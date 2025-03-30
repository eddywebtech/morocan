import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Image
        source={require("../../../assets/mon.png")}
        style={{
          width: 100,
          height: 100,
          marginBottom: 50,
          alignSelf: "center",
        }}
      />
      <View className="flex flex-1 items-center px-10 ">
        <Text className="text-4xl font-popBold  text-center ">
          The best way to learn Islam for free
        </Text>
        <View className="pt-10 w-full space-y-6 items-center justify-center ">
          <View className="border-2 w-full items-center justify-center p-4 rounded-md border-blue-600">
            <Text className="text-[#6857CF] font-popRegular ">
              CONTINUE WITH GOOGLE
            </Text>
          </View>
          <View className="bg-blue-800 w-full items-center justify-center p-4 rounded-md  ">
            <Text className="text-white font-popRegular">
              CONTINUE WITH FACEBOOK
            </Text>
          </View>
          <Text className="text-2xl"> OR </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("register")}
            className="w-full items-center justify-center p-4 rounded-md bg-[#6857CF] "
          >
            <Text className="text-white font-popRegular">
              SIGN UP WITH E-MAIL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row self-center pb-20">
        <Text className="text-lg font-popRegular">
          Already have an account?{" "}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text className=" text-lg text-[#6857CF] font-popSemiBold ">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
