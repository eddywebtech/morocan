import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import AppFormFIeld from "../../components/AppFormField";
import * as Yup from "yup";
import { Formik } from "formik";
import Colors from "../../config/Colors";
import Screen from "../../components/Screen";
import SubmitButton from "../../components/SubmitBtn";
const validSchema = Yup.object().shape({
  Username: Yup.string().required().label("Username"),
  fullname: Yup.string().required().label("fullname"),
  country: Yup.string().required().label("country"),
  DOB: Yup.string().required().label("DOB"),
  password: Yup.string().required().min(4).label("Password"),
});

export default Register = () => {
  return (
    <Screen>
      <Formik
        validationSchema={validSchema}
        initialValues={{ Username: "", password: "" }}
      >
        <ScrollView>
          <View className="flex flex-1 content-center pt-8 px-2 ">
            <View className="space-y-2 pb-7 ">
              <Text className="text-3xl font-popXtraBold ">
                Let's create your account
              </Text>
              <Text className="text-lg font-popLight ">
                It’s time to create your account to get your learning plan and
                save your progress
              </Text>
            </View>
            <AppFormFIeld
              style={styles.input}
              placeholder="Username"
              name={"Username"}
            />
            <AppFormFIeld
              style={styles.input}
              placeholder="Full Name"
              name={"fullname"}
            />
            <AppFormFIeld
              style={styles.input}
              placeholder="Password"
              name={"password"}
            />
            <AppFormFIeld
              style={styles.input}
              placeholder="Date of Birth"
              name={"DOB"}
            />
            <AppFormFIeld
              style={styles.input}
              placeholder="Country"
              name={"country"}
            />

            <SubmitButton
              title={"CREATE NEW ACCOUNT"}
              color={Colors.primary}
              btnStyle={{ borderRadius: 5, marginTop: 20 }}
            />
          </View>
        </ScrollView>
      </Formik>
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
