import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "../components/Common/Button";

const Sleep = () => {
  const [hour, setHour] = useState<number>(0);

  const addHour = () => {
    if (hour < 24) {
      setHour((prev) => prev + 1);
    }
  };
  const subtractHour = () => {
    if (hour > 0) {
      setHour((prev) => prev - 1);
    }
  };
  const handleSubmit = () => {};

  return (
    <View className="h-screen m-5">
      <View className="mt-2 border border-gray-200 p-8 rounded-xl items-center justify-between flex-row">
        <TouchableOpacity
          onPress={subtractHour}
          className="bg-blue-200 size-12 items-center justify-center rounded-full border"
          style={{ borderColor: "blue" }}
        >
          <AntDesign name="minus" size={24} color="blue" />
        </TouchableOpacity>
        <View className="flex-row gap-x-2 items-center justify-center">
          <FontAwesome name="moon-o" size={24} color="gray" />
          <Text className="font-semibold text-xl text-secondary">
            {hour} {hour <= 1 ? "hour" : "hours"}
          </Text>
        </View>
        <TouchableOpacity
          onPress={addHour}
          className="bg-blue-200 size-12 items-center justify-center rounded-full border"
          style={{ borderColor: "blue" }}
        >
          <AntDesign name="plus" size={24} color="blue" />
        </TouchableOpacity>
      </View>
      <Button title="Submit" onPress={handleSubmit} className="mt-10" />
    </View>
  );
};

export default Sleep;
