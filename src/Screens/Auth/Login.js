import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppFormFIeld from "../../components/AppFormField";
import { Formik } from "formik";
import Colors from "../../config/Colors";
import Screen from "../../components/Screen";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import SubmitButton from "../../components/SubmitBtn";
import { useAuth } from "../../context/AuthContext";
const validSchema = Yup.object().shape({
  Username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

export default Login = () => {
  const { isAuthenticated, login, logout } = useAuth();

  const navigation = useNavigation();

  const handleLogin = (values) => {
    console.log(values, "values");
    login();
  };

  return (
    <Screen>
      <View className="flex flex-1 justify-center p-2">
        <Formik
          onSubmit={handleLogin}
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
            <AppFormFIeld
              style={styles.input}
              placeholder="Username"
              name={"Username"}
            />
            <AppFormFIeld
              style={styles.input}
              placeholder="Password"
              name={"password"}
            />

            <View className="flex-row items-center justify-between ">
              <View>
                <Text className="font-popRegular text-base"> Remember Me</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("forgotPassword")}
              >
                <Text className="font-popRegular text-base">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <SubmitButton
              title={"LOGIN"}
              color={Colors.primary}
              btnStyle={{ borderRadius: 5 }}
            />
            <View className="content-center flex-row justify-center items-center">
              <Text className="self-center font-popRegular text-base ">
                {" "}
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("register")}>
                <Text className="self-center text-purple-700 font-popSemiBold ">
                  Sign Up{" "}
                </Text>
              </TouchableOpacity>
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
