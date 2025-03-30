import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import { Formik } from "formik";
import AppFormFIeld from "../../components/AppFormField";
import Colors from "../../config/Colors";
import * as Yup from "yup";
import AppButton from "../../components/AppButton";
const validSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

const ForgotPassword = () => {
  return (
    <Screen>
      <View>
        <Image
          source={require("../../../assets/mon.png")}
          style={{
            width: 100,
            alignSelf: "center",
            height: 100,
            marginBottom: 50,
          }}
        />
        <View className="p-2">
          <Text className="font-bold text-4xl text-[#6857CF] ">
            Forgot Password
          </Text>

          <Text className="font-popLight text-base text-gray-500 ">
            Kindly enter the email address you registered with
          </Text>
          <Formik validationSchema={validSchema} initialValues={{ email: "" }}>
            <>
              <AppFormFIeld
                style={styles.input}
                placeholder="Email"
                name={"email"}
              />

              <AppButton
                title={"Continue"}
                color={Colors.primary}
                btnStyle={{ borderRadius: 5, marginTop: 20 }}
              />
              <View className="flex flex-row self-center pb-20">
                <Text className="text-lg font-popRegular ">
                  Don't have an account?{" "}
                </Text>

                <TouchableOpacity>
                  <Text className=" text-lg text-[#6857CF] font-popSemiBold ">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          </Formik>
        </View>
      </View>
    </Screen>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: Colors.primary,
    paddingVertical: 10,
  },
});
