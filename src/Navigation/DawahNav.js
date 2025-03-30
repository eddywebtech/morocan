import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dawah from "../Screens/Dawah/Dawah";
import DawahDetails from "../Screens/Dawah/DawahDetails";
import { DawahTab } from "../Navigation/LeaderNav";
import VideoPlay from "../Screens/Learning/VideoPlay";
import DawahUpload from "../Screens/Dawah/DawahUpload";
export default function DawahNav() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dawahNav" component={Dawah} />
      <Stack.Screen name="dawahDetails" component={DawahTab} />
      <Stack.Screen name="videoPlay" component={VideoPlay} />
      <Stack.Screen name="dawahUpload" component={DawahUpload} />
    </Stack.Navigator>
  );
}
