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

const OtpVerification = () => {
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
        <View className="p-8 ">
          <Text className="font-bold text-4xl text-[#6857CF] ">
            OTP Verification
          </Text>

          <Text className="font-extralight text-base text-[#857EB4] ">
            Kindly input the code sent to your
          </Text>
          <Text className="font-extralight text-sm  text-[#857EB4] ">
            Phone number you registered with
          </Text>
          <Formik validationSchema={validSchema} initialValues={{ email: "" }}>
            <>
              <AppFormFIeld
                style={styles.input}
                placeholder="Enter code"
                name={"otpCode"}
              />

              <AppButton
                title={"Continue"}
                color={Colors.primary}
                btnStyle={{ borderRadius: 5, marginTop: 20 }}
              />
              <View className="flex flex-row self-center pb-20">
                <Text className="text-lg"> Don't have an account? </Text>

                <TouchableOpacity>
                  <Text className=" text-lg text-[#6857CF] font-semibold ">
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

export default OtpVerification;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: Colors.primary,
    paddingVertical: 10,
  },
});
