import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";

import data from "../../Utils/QuizData";
import { useNavigation } from "@react-navigation/native";

const QuizPage = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [assesmentSol, setAssesmentSol] = useState([]);

  const handleNext = () => {
    if (currentIndex === data.questions.length - 1) return;
    const newassesment = {
      question_id: data.questions[currentIndex].id,
      option_id: currentAnswer,
    };
    setAssesmentSol((prev) => [...prev, newassesment]);

    console.log(assesmentSol, "assesment");
    setCurrentIndex(currentIndex + 1);
    setCurrentAnswer(null);
  };
  const handlePrev = () => {
    console.log(assesmentSol, "assesment");
    setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    const newassesment = {
      question_id: data.questions[currentIndex].id,
      option_id: currentAnswer,
    };
    setAssesmentSol((prev) => [...prev, newassesment]);
    console.log(assesmentSol);
    navigation.navigate("result");
    setAssesmentSol([]);
  };

  return (
    <Screen>
      <View>
        <View>
          <Text className="font-popBold text-2xl self-center ">Lesson 01</Text>
        </View>
        <Text className="font-popSemiBold text-lg pt-10 ">
          {data.questions[currentIndex].question_text}
        </Text>
        <FlatList
          data={data.questions[currentIndex].options}
          contentContainerStyle={{ gap: 10, paddingVertical: 50 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setCurrentAnswer(item.id)}
              className={
                currentAnswer === item.id
                  ? "bg-pink-500 p-2 "
                  : "bg-zinc-200 p-2 "
              }
            >
              <Text className="text-lg font-popRegular">
                {item.option_text}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View className="flex-row justify-between ">
          {currentIndex !== 0 && (
            <TouchableOpacity onPress={handlePrev}>
              <Text className="font-popSemiBold text-xl "> Prev </Text>
            </TouchableOpacity>
          )}
          {currentIndex !== data.questions.length - 1 ? (
            currentAnswer && (
              <TouchableOpacity onPress={handleNext}>
                <Text className="font-popSemiBold text-xl "> Next </Text>
              </TouchableOpacity>
            )
          ) : (
            <TouchableOpacity onPress={handleSubmit}>
              <Text className="font-popSemiBold text-xl "> Submit </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Screen>
  );
};

export default QuizPage;

const styles = StyleSheet.create({});
