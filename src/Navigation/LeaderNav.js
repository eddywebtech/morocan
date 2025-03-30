import { Image, Text, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LocalLeaderBoard from "../Screens/Learning/LocalLeaderBoard";
import GlobalLeaderBoard from "../Screens/Learning/GlobalLeaderBoard";
import Constants from "expo-constants";
import AudioDawah from "../Screens/Dawah/AudioDawah";
import VideoDawah from "../Screens/Dawah/VideoDawah";
const Tab = createMaterialTopTabNavigator();

export default function LeaderNav() {
  return (
    <Tab.Navigator
      style={{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#fff",
      }}
    >
      <Tab.Screen name="local" component={LocalLeaderBoard} />
      <Tab.Screen name="global" component={GlobalLeaderBoard} />
    </Tab.Navigator>
  );
}

export const DawahTab = () => {
  return (
    <>
      <View
        style={{
          paddingTop: Constants.statusBarHeight,
          backgroundColor: "#fff",
        }}
      >
        <>
          <View className="flex-row items-center pl-4 gap-2 pb-2 mt-2 rounded-b-xl w-[100%] ">
            <Image
              source={{
                uri: "https://muftimenk.com/wp-content/uploads/cropped-mufti-menk-300x300.jpg",
              }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View className="flex flex-row items-center justify-between w-[70%] ">
              <View className="gap-y-2 justify-center ">
                <Text className="text-xl font-popSemiBold">Sodiq qodi</Text>
                <Text className="text-base text-zinc-500 font-popSemiBold">
                  5 Lectures
                </Text>
              </View>
            </View>
          </View>
        </>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Audio" component={AudioDawah} />
        <Tab.Screen name="Video" component={VideoDawah} />
      </Tab.Navigator>
    </>
  );
};
