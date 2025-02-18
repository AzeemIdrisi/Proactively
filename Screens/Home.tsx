import React from "react";
import Metrics from "../components/HomeScreen/Metrics";

import HomeBottomSheet from "../components/HomeScreen/HomeBottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <Metrics />
      <HomeBottomSheet />
    </SafeAreaView>
  );
};

export default Home;
