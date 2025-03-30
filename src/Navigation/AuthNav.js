import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Auth/Welcome";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import PasswordReset from "../Screens/Auth/PasswordReset";
import OtpVerification from "../Screens/Auth/OtpVerification";
import ForgotPassword from "../Screens/Auth/ForgotPassword";

export default function AuthNav() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="otp" component={OtpVerification} />
      <Stack.Screen name="passwordReset" component={PasswordReset} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
