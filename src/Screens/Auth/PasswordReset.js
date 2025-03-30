import { Text, View, StyleSheet, Image } from "react-native";
import AppFormFIeld from "../../components/AppFormField";
import { Formik } from "formik";
import Colors from "../../config/Colors";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";
import * as Yup from "yup";
const validSchema = Yup.object().shape({
  password1: Yup.string().required().label("password1"),
  password2: Yup.string().required().min(4).label("password2"),
});

export default PasswordReset = () => {
  return (
    <Screen>
      <View className="flex flex-1 justify-center  p-8">
        <Formik
          validationSchema={validSchema}
          initialValues={{ Username: "", password: "" }}
        >
          <View className="flex flex-1 content-center ">
            <View className="self-center">
              <Image
                source={require("../../../assets/mon.png")}
                style={{ width: 100, height: 100, marginBottom: 50 }}
              />
            </View>
            <Text className="font-bold text-4xl text-[#6857CF] ">
              Password Reset
            </Text>

            <Text className="font-extralight text-base text-[#857EB4] ">
              Kindly input the code sent to your
            </Text>
            <Text className="font-extralight text-sm  text-[#857EB4] ">
              Phone number you registered with
            </Text>
            <AppFormFIeld
              style={styles.input}
              placeholder="Enter password"
              name={"password1"}
            />
            <AppFormFIeld
              style={styles.input}
              placeholder="Repeat Password"
              name={"password2"}
            />
            <AppButton
              title={"LOGIN"}
              color={Colors.primary}
              btnStyle={{ borderRadius: 5 }}
            />
            <View className="content-center flex-row justify-center items-center">
              <Text className="self-center"> Don't have an account? </Text>
              <Text className="self-center text-purple-700 ">Sign Up </Text>
            </View>
          </View>
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: Colors.primary,
  },
});
