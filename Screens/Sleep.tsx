import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "../components/Common/Button";
import { NavigationProp } from "@react-navigation/native";
import { UserContext } from "../store/user-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ScreenProps {
  navigation: NavigationProp<"">;
}
const Sleep: React.FC<ScreenProps> = ({ navigation }) => {
  const { healthData, setHealthData } = useContext(UserContext);

  const [hour, setHour] = useState<string>(healthData.sleep.toString());

  const addHour = () => {
    if (parseInt(hour) < 24) {
      setHour((prev: string) => (parseInt(prev) + 1).toString());
    }
  };
  const subtractHour = () => {
    if (parseInt(hour) > 0) {
      setHour((prev: string) => (parseInt(prev) - 1).toString());
    }
  };
  const handleSubmit = async () => {
    setHealthData((prev: typeof healthData) => {
      return { ...prev, sleep: hour };
    });

    await AsyncStorage.setItem(
      "healthData",
      JSON.stringify({ ...healthData, sleep: hour })
    );

    navigation.goBack();
  };

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
