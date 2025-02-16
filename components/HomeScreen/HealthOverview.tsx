import { View, Text } from "react-native";
import React from "react";
import HealthCard from "./HealthCard";
import { FlatList } from "react-native-gesture-handler";

const cardsData = [
  {
    primaryText: "Steps",
    secondaryText: "Updated",
    value: 12000,
    color: "blue",
  },
  {
    primaryText: "BMI",
    secondaryText: "Updated",
    value: 22.5,
    color: "yellow",
    unit: "kg/m²",
  },
  {
    primaryText: "Sleep",
    secondaryText: "Updated",
    value: 8,
    color: "orange",
    unit: "hours",
  },
];

const HealthOverview = () => {
  return (
    <View className="py-10 border-b-2 border-b-gray-200">
      <Text className="font-semibold text-2xl">Health Overview</Text>

      <FlatList
        className="mt-5 w-full overflow-visible"
        horizontal
        contentContainerStyle={{ gap: 10 }}
        showsHorizontalScrollIndicator={false}
        data={cardsData}
        renderItem={({ item }) => (
          <HealthCard
            primaryText={item.primaryText}
            secondaryText={item.secondaryText}
            value={item.value}
            color={item.color}
            unit={item.unit}
          />
        )}
      />
    </View>
  );
};

export default HealthOverview;
