import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../../utils/Theme";

interface Props {
  color: string;
  primaryText: string;
  secondaryText: string;
  value: number;
  unit?: string;
}

const colorClasses: Record<string, string> = {
  blue: "bg-blue-100 text-blue-800",
  orange: "bg-orange-100 text-red-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
};

const HealthCard: React.FC<Props> = ({
  color,
  primaryText,
  secondaryText,
  value,
  unit,
}) => {
  return (
    <View
      className={`w-52 h-40 rounded-xl p-4 px-5  justify-between ${
        colorClasses[color] || "bg-gray-100 text-gray-800"
      }`}
    >
      <View>
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold text-lg">{primaryText}</Text>
          <FontAwesome name="angle-right" size={24} color={Colors.secondary} />
        </View>
        <Text
          className={`${
            colorClasses[color] || "bg-gray-100 text-gray-800"
          } mt-1`}
        >
          {secondaryText}
        </Text>
      </View>
      <Text
        className={`${
          colorClasses[color] || "bg-gray-100 text-gray-800"
        } text-3xl font-bold`}
      >
        {value.toLocaleString()}{" "}
        <Text className="text-sm font-normal">{unit}</Text>
      </Text>
    </View>
  );
};

export default HealthCard;
