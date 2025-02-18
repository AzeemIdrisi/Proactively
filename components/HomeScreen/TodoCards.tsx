import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../../utils/Theme";
import { UserContext } from "../../store/user-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  title: string;
  author: string;
  date: string;
  index: number;
}
const TodoCards: React.FC<Props> = ({ title, author, date, index }) => {
  const { tasks, setTasks } = useContext(UserContext);

  const isChecked = tasks[index.toString()];
  const handleCheck = async (checked: boolean) => {
    setTasks((prevTasks: any) => ({
      ...prevTasks,
      [index.toString()]: checked,
    }));

    await AsyncStorage.setItem(
      "tasks",
      JSON.stringify({ ...tasks, [index.toString()]: checked })
    );
  };
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
          onPress={handleCheck}
          isChecked={isChecked}
        />
      </View>

      <View className="w-full">
        <Text
          className={`font-medium text-lg w-[85%] ${isChecked && "opacity-50"}`}
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
