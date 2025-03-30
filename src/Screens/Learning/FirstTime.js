// FirstTimeUserScreen.js
import React from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { setUserAsNotFirstTime } from "../../Utils/FirstTime";

const FirstTimeUserScreen = () => {
  const data = [
    {
      id: 1,
      title: "Introduction to python",
      icon: <Ionicons name="logo-python" size={30} />,
    },
    {
      id: 2,
      title: "Introduction to html",
      icon: <Ionicons name="logo-html5" size={30} />,
    },
    {
      id: 3,
      title: "Introduction to Javascript",
      icon: <Ionicons name="logo-javascript" size={30} />,
    },
    {
      id: 4,
      title: "Introduction to Css",
      icon: <Ionicons name="logo-css3" size={30} />,
    },
    {
      id: 5,
      title: "Introduction to React ",
      icon: <Ionicons name="logo-react" size={30} />,
    },
    {
      id: 6,
      title: "Introduction to python",
      icon: <Ionicons name="logo-python" size={30} />,
    },
  ];
  const navigation = useNavigation();

  const handlePress = async () => {
    await setUserAsNotFirstTime();
    navigation.navigate("Courses", {
      screen: "courseDetails",
      params: {
        courseInfo: {
          id: 1,
          title: "eddy",
          author: "Ustadh Abass",
          banner:
            "https://images.unsplash.com/photo-1531844734254-51193b49c604?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        },
      },
    });
  };

  return (
    <Screen>
      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <>
            <View className="p-2">
              <Text className="font-popBold text-2xl ">
                Select Your First Course
              </Text>
              <Text className="font-popLight text-lg ">
                Don't Worry you can two to four more courses as you want later.
              </Text>
              <View className="flex-row items-center gap-x-1 p-2 mt-2 justify-center">
                <AntDesign name="exclamationcircle" size={30} color="#fcd34d" />
                <Text className="font-popLight text-base bg-[#fcd34d] p-1 rounded-lg ">
                  People with tech skills are among the most in-demand
                  professionals in the world
                </Text>
              </View>
              <Text className="font-popSemiBold text-base pl-5 ">
                Select a course to start
              </Text>
            </View>
          </>
        )}
        contentContainerStyle={{ gap: 20, marginTop: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={handlePress}
            className="rounded-md flex-row self-center items-center border-[1.5px] p-2 border-zinc-400 w-[80%] "
          >
            {item.icon}
            <Text className="font-popSemiBold text-xl ">{item.title} </Text>
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
};

export default FirstTimeUserScreen;
