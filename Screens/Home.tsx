import { View } from "react-native";
import React from "react";
import Metrics from "../components/HomeScreen/Metrics";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeBottomSheet from "../components/HomeScreen/HomeBottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1">
        <View className="bg-darkPrimary h-screen">
          <Metrics />
        </View>
        <HomeBottomSheet />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
