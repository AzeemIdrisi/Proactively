import { View } from "react-native";
import React, { useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import AppointmentCard from "./AppointmentCard";
import HealthOverview from "./HealthOverview";
import Todos from "./Todos";

const HomeBottomSheet = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["45%", "93%"], []);

  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      handleIndicatorStyle={{ display: "none" }}
      animateOnMount={false}
    >
      <BottomSheetScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5 pb-40">
          <AppointmentCard />
          <HealthOverview />
          <Todos />
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default HomeBottomSheet;
