import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../config/Colors";
import SubmitButton from "../../components/SubmitBtn";
const AddCourse = () => {
  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required().label("Course name"),
    courseDescription: Yup.string().required().label("Course Description"),
    coursePrice: Yup.number().required().label("Course price"),
    courseCapacity: Yup.number().required().label("Course capacity"),
    ageGroup: Yup.string().required().label("Age Group"),
    courseCateg: Yup.string().required().label("Course Category"),
    courseSlug: Yup.string().required().label("Course Slug"),
  });
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-center font-popBold text-xl ">
          Add New Course
        </Text>

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            courseName: "",
            courseDescription: "",
            coursePrice: "",
            courseCapacity: "",
            ageGroup: "",
            courseCateg: "",
            courseSlug: "",
          }}
        >
          {({ values, setFieldValue, initialValues }) => (
            <>
              <Text className="font-popSemiBold text-base ">Course Title</Text>
              <AppFormField
                placeholder="Enter course title"
                name={"courseName"}
                style={{
                  marginTop: 0,
                  borderWidth: 1,
                  borderColor: "#481acb",
                  borderRadius: 5,
                }}
              />
              <Text className="font-popSemiBold text-base ">
                Course Capacity(Enter Zero(0) for unlimited capacity )
              </Text>
              <AppFormField
                keyboardType="numeric"
                placeholder="Enter course capacity"
                name={"courseCapacity"}
                style={{
                  marginTop: 0,
                  borderWidth: 1,
                  borderColor: "#481acb",
                  borderRadius: 5,
                }}
              />
              <Text className="font-popSemiBold text-base ">Course Slug</Text>
              <AppFormField
                placeholder="Enter course slug"
                name={"courseSlug"}
                style={{
                  marginTop: 0,
                  borderWidth: 1,
                  borderColor: "#481acb",
                  borderRadius: 5,
                }}
              />

              <View name="ageGroup">
                <Text className="font-popSemiBold text-base ">Age Group</Text>
                <Picker
                  style={{
                    backgroundColor: Colors.light,
                    borderWidth: 1,
                    borderColor: "#481acb",
                    borderRadius: 25,
                  }}
                  selectedValue={values.ageGroup}
                  onValueChange={(itemValue) =>
                    setFieldValue("ageGroup", itemValue)
                  }
                >
                  <Picker.Item
                    label="Select Age Group"
                    value={initialValues.ageGroup}
                    key={0}
                  />
                  <Picker.Item label="10-17" value={1} key={1} />
                  <Picker.Item label="18-25" value={2} key={2} />
                  <Picker.Item label="25-40" value={3} key={3} />
                </Picker>
              </View>
              <View className="my-3" name="courseCateg">
                <Text className="font-popSemiBold text-base ">
                  Course Category
                </Text>
                <Picker
                  style={{
                    backgroundColor: Colors.light,
                    borderWidth: 1,
                    borderColor: "#481acb",
                    borderRadius: 25,
                  }}
                  selectedValue={values.courseCateg}
                  onValueChange={(itemValue) =>
                    setFieldValue("courseCateg", itemValue)
                  }
                >
                  <Picker.Item
                    label="Select course category"
                    value={initialValues.courseCateg}
                    key={0}
                  />
                  <Picker.Item label="Design" value={1} key={1} />
                  <Picker.Item label="Programming" value={2} key={2} />
                  <Picker.Item label="Embedded System" value={3} key={3} />
                </Picker>
              </View>

              <Text className="font-popSemiBold text-base ">
                Course Description
              </Text>
              <AppFormField
                placeholder="Enter course Description"
                name={"courseDescription"}
                style={{
                  marginTop: 0,
                  paddingBottom: 120,
                  borderWidth: 1,
                  borderColor: "#481acb",
                  borderRadius: 5,
                }}
              />
              <SubmitButton
                title={"Add Course"}
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

export default AddCourse;

const styles = StyleSheet.create({});
