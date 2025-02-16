import { View, Text } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../../utils/Theme";

interface Props {
  title: string;
  author: string;
  date: string;
}
const TodoCards: React.FC<Props> = ({ title, author, date }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View className="border border-gray-200 p-5 rounded-xl items-start justify-start flex-row">
      <View className="mt-2">
        <BouncyCheckbox
          fillColor={Colors.success}
          iconStyle={{ borderRadius: 8, borderColor: Colors.primary }}
          innerIconStyle={{
            borderRadius: 8,
            borderWidth: 2,
            borderColor: isChecked ? Colors.success : "gray",
          }}
          onPress={(checked: boolean) => {
            setIsChecked(checked);
          }}
        />
      </View>

      <View className="w-full">
        <Text
          className={`font-medium text-lg w-[90%] ${isChecked && "opacity-50"}`}
        >
          {title}
        </Text>
        <Text className="mt-2 text-secondary max-w-[90%]">
          {author} • {date}
        </Text>
      </View>
    </View>
  );
};

export default TodoCards;
