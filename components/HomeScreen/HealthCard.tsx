import { View, Text, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../../utils/Theme";
import { useNavigation } from "@react-navigation/native";

interface Props {
  color: string;
  primaryText: string;
  secondaryText: string;
  value: string;
  unit?: string;
  screen: string;
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
  screen,
}) => {
  const navigation = useNavigation<any>();

  const handleTap = () => {
    navigation.navigate(screen);
  };
  return (
    <Pressable
      onPress={handleTap}
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

      <View className="flex-row items-end">
        <Text
          className={`${
            colorClasses[color] || "bg-gray-100 text-gray-800"
          } text-3xl font-bold`}
        >
          {value === "-" ? "-" : value.toLocaleString()}{" "}
        </Text>
        {value !== "-" && (
          <Text
            className={`${
              colorClasses[color] || "bg-gray-100 text-gray-800"
            } text-sm font-normal mb-1`}
          >
            {unit}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default HealthCard;
