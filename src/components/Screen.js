import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Colors from "../config/Colors";
import { StatusBar } from "expo-status-bar";

function Screen({ children, style }) {
  return (
    <View style={[styles.screen, style]}>
      <StatusBar style="dark" />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
