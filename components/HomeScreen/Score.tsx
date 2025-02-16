import { View, Text, ImageBackground } from "react-native";
import React from "react";
import ProgressBar from "./ProgressBar";

const Score = () => {
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
          <Text className="text-white text-5xl font-bold">2,740</Text>
          <Text className="text-white/60">
            This score is for information purposes only.
          </Text>
        </View>
        <ProgressBar progressVal={2740} />
      </ImageBackground>
    </View>
  );
};

export default Score;
