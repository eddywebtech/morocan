import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Screen from "../../components/Screen";
import { Formik } from "formik";
import AppFormFIeld from "../../components/AppFormField";
import SubmitButton from "../../components/SubmitBtn";
import { Feather } from "@expo/vector-icons";
import * as Yup from "yup";
import AppButton from "../../components/AppButton";
const validationSchema = Yup.object().shape({
  question: Yup.string().required().label("question"),
  lessonDescription: Yup.string().required().label("Course Description"),
  coursePrice: Yup.number().required().label("Course price"),
});

const InputComponent = ({ valespased }) => {
  return (
    <>
      {valespased.map((val, index) => {
        return (
          <View className="pt-3" key={index}>
            <Text className="font-popSemiBold text-base ">
              Question{index + 1}
            </Text>
            <AppFormFIeld
              placeholder="Enter Assesment question"
              name={"lessonTitle"}
              style={{
                marginTop: 0,
                height: 35,
                borderWidth: 1,
                borderColor: "#481acb",
                borderRadius: 5,
              }}
            />
            <Text className="font-popSemiBold text-base ">Options</Text>
            {val?.options.map((opt, index) => {
              return (
                <View className="flex  w-full items-center flex-row gap-2 self-end ">
                  <Text className="font-popSemiBold text-base ">{opt}</Text>
                  <View className="w-full">
                    <AppFormFIeld
                      placeholder="Enter Option"
                      name={"lessonDescription"}
                      style={{
                        marginTop: 0,
                        height: 35,
                        width: "90%",
                        borderWidth: 1,
                        borderColor: "#481acb",
                        borderRadius: 5,
                      }}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </>
  );
};

const AddAssesment = () => {
  const [assesment, setAssesment] = useState([
    {
      question_text: "",
      question_id: 1,
      options: ["A", "B", "C", "D"],
    },
  ]);

  const handleCreateAssesment = () => {
    setAssesment((prev) => [
      ...prev,
      {
        question_text: "",
        question_id: prev.length + 1,
        options: ["A", "B", "C", "D"],
      },
    ]);
    console.log(assesment.length);
  };

  return (
    <Screen>
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
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
              <InputComponent valespased={assesment} />
              <AppButton
                handlePress={() => handleCreateAssesment()}
                title={"Add Question"}
                btnStyle={{
                  // position: "absolute",
                  // bottom: 0,
                  width: "50%",
                  alignSelf: "center",
                  borderRadius: 5,
                  backgroundColor: "#481acb",
                  marginTop: 20,
                }}
              />
            </ScrollView>
            <SubmitButton
              handlePress={() => handleCreateAssesment()}
              title={"Submit Assesment"}
              btnStyle={{
                position: "absolute",
                bottom: 0,
                // width: "50%",
                alignSelf: "center",
                borderRadius: 5,
                backgroundColor: "#481acb",
                marginTop: 20,
              }}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default AddAssesment;
