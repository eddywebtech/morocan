// storage.js
import AsyncStorage from "@react-native-async-storage/async-storage";

const FIRST_TIME_USER_KEY = "isFirstTimeUser";

export const checkFirstTimeUser = async () => {
  const value = await AsyncStorage.getItem(FIRST_TIME_USER_KEY);
  return value === null; // Returns true if it's the first time
};

export const setUserAsNotFirstTime = async () => {
  await AsyncStorage.setItem(FIRST_TIME_USER_KEY, "false");
};
