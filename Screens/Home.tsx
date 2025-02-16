import { SafeAreaView, View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import Metrics from "../components/HomeScreen/Metrics";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppointmentCard from "../components/HomeScreen/AppointmentCard";
import HealthOverview from "../components/HomeScreen/HealthOverview";

const Home = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["45%", "93%"], []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1">
        <View className="bg-darkPrimary h-screen">
          <Metrics />
        </View>
        <BottomSheet
          ref={sheetRef}
          index={0}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          handleIndicatorStyle={{ display: "none" }}
          animateOnMount={false}
        >
          <BottomSheetScrollView>
            <View className="mx-5">
              <AppointmentCard />
              <HealthOverview />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
