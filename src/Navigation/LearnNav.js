import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Courses from "../Screens/Learning/Courses";
import CourseDetails from "../Screens/Learning/CourseDetails";
import QuizPage from "../Screens/Assesment/QuizPage";
import Result from "../Screens/Assesment/Result";
import AddAssesment from "../Screens/Assesment/AddAssesment";
export default function LearnNav() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="course" component={Courses} />
      <Stack.Screen name="courseDetails" component={CourseDetails} />
      <Stack.Screen name="addAssesment" component={AddAssesment} />
      <Stack.Screen name="assesment" component={QuizPage} />
      <Stack.Screen name="result" component={Result} />
    </Stack.Navigator>
  );
}
