import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LeaderBox from "../../components/Learning/LeaderBox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Attendance = ({ showModal, handlePress }) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Modal
      style={{ height: 120, backgroundColor: "#000" }}
      transparent={true}
      visible={showModal}
    >
      <View
        className="bg-zinc-100"
        style={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: "50%",
          position: "absolute",
          bottom: 0,
          width: "96%",
          paddingTop: 20,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={handlePress}>
          <View className="h-2 w-16 self-center bg-blue-950 rounded-full" />
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <>
              <View className="flex-row justify-between items-center px-2 ">
                <View className="flex-row items-center gap-2 pb-2 rounded-b-xl ">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                    }}
                    style={{ width: 55, height: 55, borderRadius: 40 }}
                  />
                  <View className="gap-1">
                    <Text className="text-base font-popSemiBold">
                      Fatima Ojo
                    </Text>
                    <View className=" flex-row items-center ">
                      <MaterialCommunityIcons
                        name="star-three-points"
                        color={"#481acb"}
                        size={20}
                      />
                      <Text className="text-base font-popRegular text-zinc-400 ">
                        12:30 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <Text className="text-base font-popBold text-zinc-800 ">
                  {item}
                </Text>
              </View>
            </>
          )}
        />
      </View>
    </Modal>
  );
};

export default Attendance;

const styles = StyleSheet.create({});
