import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import SubmitButton from "../../components/SubmitBtn";

import { Feather } from "@expo/vector-icons";

const AddLesson = () => {
  const validationSchema = Yup.object().shape({
    lessonTitle: Yup.string().required().label("Course name"),
    lessonDescription: Yup.string().required().label("Course Description"),
    coursePrice: Yup.number().required().label("Course price"),
  });
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-center font-popBold text-xl ">
          Add Lesson to Course
        </Text>

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            lessonTitle: "",
            lessonDescription: "",
          }}
        >
          {({ values, setFieldValue, initialValues }) => (
            <>
              <View className=" flex-row items-center bg-zinc-200 border-slate-200 border-x-sky-900 rounded-lg h-16 ">
                <View className="justify-center h-16 w-20 border-r-[1px] border-r-slate-600 bg-slate-100 rounded-l-md items-center">
                  <Feather name="upload" size={22} />
                </View>
                <Text className="font-popSemiBold text-base pl-2 ">
                  Upload Course Media
                </Text>
              </View>
              <Text className="font-popSemiBold text-base ">Lesson Title</Text>
              <AppFormField
                placeholder="Enter course title"
                name={"lessonTitle"}
                style={{
                  marginTop: 0,
                  borderWidth: 1,
                  borderColor: "#481acb",
                  borderRadius: 5,
                }}
              />
              <Text className="font-popSemiBold text-base ">
                Course Description
              </Text>
              <AppFormField
                placeholder="Enter course Description"
                name={"lessonDescription"}
                style={{
                  marginTop: 0,
                  paddingBottom: 120,
                  borderWidth: 1,
                  borderColor: "#481acb",
                  borderRadius: 5,
                }}
              />
              <SubmitButton
                title={"Add Lesson"}
                btnStyle={{
                  borderRadius: 5,
                  backgroundColor: "#481acb",
                  marginTop: 20,
                }}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </Screen>
  );
};

export default AddLesson;

const styles = StyleSheet.create({});
