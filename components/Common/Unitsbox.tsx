import { View, Text, TextInput } from "react-native";
import React from "react";

interface Props {
  label: string;
  value: string;
  unit: string;
  className: string;
  setValue: (text: string) => void;
}
const Unitsbox: React.FC<Props> = ({
  label,
  value,
  unit,
  className,
  setValue,
}) => {
  return (
    <View className={className}>
      <Text className="font-medium text-xl">{label}</Text>
      <View className="mt-2 border border-gray-200 p-5 py-8 rounded-xl items-end justify-start flex-row w-64 gap-x-2">
        <TextInput
          value={value}
          placeholder="0"
          onChangeText={setValue}
          maxLength={5}
          keyboardType="number-pad"
          className={`font-bold text-4xl`}
        />
        <Text className=" mb-1 text-2xl text-secondary font-medium -z-10">
          {unit}
        </Text>
      </View>
    </View>
  );
};

export default Unitsbox;
