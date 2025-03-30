import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Fonts from "./src/config/Fonts";
import AppNav from "./src/Navigation/AppNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseLearn from "./src/Screens/Learning/CourseLearn";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavTheme from "./src/Navigation/NavTheme";
import AuthNav from "./src/Navigation/AuthNav";
import { AuthProvider, useAuth } from "./src/context/AuthContext";
import FirstTimeUserScreen from "./src/Screens/Learning/FirstTime";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { isAuthenticated, isFirstTimer } = useAuth();

  return isAuthenticated ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {isFirstTimer !== "false" ? (
        <Stack.Screen name="firstTimer" component={FirstTimeUserScreen} />
      ) : ( */}
      <>
        <Stack.Screen name="appNav" component={AppNav} />
        <Stack.Screen name="courseLearn" component={CourseLearn} />
      </>
      {/* )} */}
    </Stack.Navigator>
  ) : (
    <AuthNav />
  );
};

export default function App() {
  const [fontsLoaded] = useFonts(Fonts);
  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <GestureHandlerRootView>
        <NavigationContainer theme={NavTheme}>
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
