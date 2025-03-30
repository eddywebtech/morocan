import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Learning/Home";
import LearnNav from "./LearnNav";
import TutorNav from "../Navigation/TutorNav";
import LeaderNav from "../Navigation/LeaderNav";
import DawahNav from "./DawahNav";
import { FontAwesome5, Feather, Entypo, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Poppins-semiBold",
          fontSize: 13,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dawah"
        component={DawahNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="microphone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={LearnNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="open-book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cubes" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TutorNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
