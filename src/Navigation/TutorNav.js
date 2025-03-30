import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../Screens/Learning/Profile";
import AddCourse from "../Screens/Tutor/AddCourse";
import AddLesson from "../Screens/Tutor/AddLesson";

export default function TutorNav() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="addlesson" component={AddLesson} />
      <Stack.Screen name="addCourse" component={AddCourse} />
    </Stack.Navigator>
  );
}
