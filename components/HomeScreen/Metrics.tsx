import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Score from "./Score";

const Metrics = () => {
  return (
    <View className="bg-darkPrimary p-2">
      <Header />
      <Score />
    </View>
  );
};

export default Metrics;
