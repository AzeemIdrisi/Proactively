import { View, Text } from "react-native";
import React, { useContext } from "react";
import HealthCard from "./HealthCard";
import { FlatList } from "react-native-gesture-handler";
import { UserContext } from "../../store/user-context";

const cardsData = [
  {
    primaryText: "Steps",
    secondaryText: "Updated",
    value: 12000,
    color: "blue",
    screen: "steps",
  },
  {
    primaryText: "BMI",
    secondaryText: "Updated",
    value: 22.5,
    color: "yellow",
    unit: "kg/m²",
    screen: "bmi",
  },
  {
    primaryText: "Sleep",
    secondaryText: "Updated",
    value: 8,
    color: "orange",
    unit: "hours",
    screen: "sleep",
  },
];

const HealthOverview = () => {
  const { healthData } = useContext(UserContext);

  const renderCards = ({ item }: any) => {
    let val: string;
    if (item.primaryText === "BMI") {
      val = (
        healthData.weight /
        (healthData.height * 0.01 * healthData.height * 0.01)
      ).toFixed(2);
    } else if (item.primaryText === "Steps") {
      val = healthData.steps.toString();
    } else if (item.primaryText === "Sleep") {
      val = healthData.sleep.toString();
    } else {
      val = "-";
    }

    return (
      <HealthCard
        primaryText={item.primaryText}
        secondaryText={
          val === "0" || val === "NaN" ? "No data" : item.secondaryText
        }
        value={val === "0" || val === "NaN" ? "-" : val}
        color={item.color}
        unit={item.unit}
        screen={item.screen}
      />
    );
  };
  return (
    <View className="py-10 border-b-2 border-b-gray-200">
      <Text className="font-semibold text-2xl">Health Overview</Text>

      <FlatList
        className="mt-5 w-full overflow-visible"
        horizontal
        contentContainerStyle={{ gap: 10 }}
        showsHorizontalScrollIndicator={false}
        data={cardsData}
        renderItem={renderCards}
      />
    </View>
  );
};

export default HealthOverview;
