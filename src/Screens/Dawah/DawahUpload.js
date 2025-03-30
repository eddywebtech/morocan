import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import SubmitButton from "../../components/SubmitBtn";

import { Feather } from "@expo/vector-icons";

const DawahUpload = ({ route }) => {
  const validationSchema = Yup.object().shape({
    lectureTitle: Yup.string().required().label("Lecture title"),
    lectureDescription: Yup.string().required().label("Lecture Description"),
  });

  const { type } = route.params;
  return (
    <Screen>
      {type === "audio" && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-center font-popBold text-xl py-3">
            Upload Audio Lecture
          </Text>

          <Formik
            validationSchema={validationSchema}
            initialValues={{
              lectureTitle: "",
              lectureDescription: "",
            }}
          >
            {({ values, setFieldValue, initialValues }) => (
              <>
                <View className=" flex-row items-center bg-zinc-200 border-slate-200 border-x-sky-900 rounded-lg h-16 ">
                  <View className="justify-center h-16 w-20 border-r-[1px] border-r-slate-600 bg-slate-100 rounded-l-md items-center">
                    <Feather name="upload" size={22} />
                  </View>
                  <Text className="font-popSemiBold text-base pl-2 ">
                    Upload Lecture Audio
                  </Text>
                </View>
                <Text className="font-popSemiBold text-base ">
                  Lecture Title
                </Text>
                <AppFormField
                  placeholder="Enter lecture title"
                  name={"lectureTitle"}
                  style={{
                    marginTop: 0,
                    borderWidth: 1,
                    borderColor: "#481acb",
                    borderRadius: 5,
                  }}
                />
                <Text className="font-popSemiBold text-base ">
                  Lecture Description
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
                  title={"Add Lecture"}
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
      )}

      {type === "video" && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-center font-popBold text-xl py-3 ">
            Upload Video Lecture
          </Text>

          <Formik
            validationSchema={validationSchema}
            initialValues={{
              lectureTitle: "",
              lectureDescription: "",
            }}
          >
            {({ values, setFieldValue, initialValues }) => (
              <>
                <View className=" flex-row items-center bg-zinc-200 border-slate-200 border-x-sky-900 rounded-lg h-16 ">
                  <View className="justify-center h-16 w-20 border-r-[1px] border-r-slate-600 bg-slate-100 rounded-l-md items-center">
                    <Feather name="upload" size={22} />
                  </View>
                  <Text className="font-popSemiBold text-base pl-2 ">
                    Upload Lecture Video
                  </Text>
                </View>
                <Text className="font-popSemiBold text-base ">
                  Lecture Title
                </Text>
                <AppFormField
                  placeholder="Enter lecture title"
                  name={"lectureTitle"}
                  style={{
                    marginTop: 0,
                    borderWidth: 1,
                    borderColor: "#481acb",
                    borderRadius: 5,
                  }}
                />
                <Text className="font-popSemiBold text-base ">
                  Lecture Description
                </Text>
                <AppFormField
                  placeholder="Enter Lecture Description"
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
                  title={"Add Lecture"}
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
      )}
    </Screen>
  );
};

export default DawahUpload;
