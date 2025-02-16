import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import Metrics from "../components/HomeScreen/Metrics";
import SheetView from "../components/HomeScreen/SheetView";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-darkPrimary">
        <Metrics />
      </View>
    </SafeAreaView>
  );
};

export default Home;
