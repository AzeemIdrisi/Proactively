import { View, Text, ImageBackground } from "react-native";
import React, { useContext } from "react";
import ProgressBar from "./ProgressBar";
import { UserContext } from "../../store/user-context";

const Score = () => {
  const { healthData } = useContext(UserContext);

  const calculateHealthScore = (
    steps: number,
    bmi: number,
    sleep: number
  ): number => {
    const MAX_STEPS = 20000;
    const BMI_OPTIMAL = 22;
    const BMI_MAX = 30;
    const MAX_SLEEP = 10;

    const stepsScore = (steps / MAX_STEPS) * 1000;
    const bmiScore = ((BMI_MAX - bmi) / (BMI_MAX - BMI_OPTIMAL)) * 1000;
    const sleepScore = (sleep / MAX_SLEEP) * 1000;

    return stepsScore + bmiScore + sleepScore;
  };

  const bmi =
    healthData.weight / (healthData.height * 0.01 * healthData.height * 0.01);
  const score: number = calculateHealthScore(
    healthData.steps,
    bmi,
    healthData.sleep
  );
  return (
    <View className="p-5">
      <ImageBackground
        imageStyle={{ paddingBottom: 45, paddingTop: 20 }}
        resizeMode="contain"
        source={require("../../assets/translucent_logo.png")}
        className="gap-y-12"
      >
        <Text className="text-white/60 text-lg">Health Score</Text>
        <View className="gap-y-3">
          <Text className="text-white text-5xl font-bold">
            {Number.isNaN(score) ? 0 : score.toFixed(0)}
          </Text>
          <Text className="text-white/60">
            This score is for information purposes only.
          </Text>
        </View>
        <ProgressBar progressVal={Number.isNaN(score) ? 0 : score} />
      </ImageBackground>
    </View>
  );
};

export default Score;
