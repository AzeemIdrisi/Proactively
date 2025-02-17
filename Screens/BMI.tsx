import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import Unitsbox from "../components/Common/Unitsbox";
import Button from "../components/Common/Button";
import { UserContext } from "../store/user-context";
import { NavigationProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ScreenProps {
  navigation: NavigationProp<"">;
}
const BMI: React.FC<ScreenProps> = ({ navigation }) => {
  const { healthData, setHealthData } = useContext(UserContext);

  const [weight, setWeight] = useState<string>(
    healthData.weight.toString() === "0" ? "" : healthData.weight.toString()
  );
  const [height, setHeight] = useState<string>(
    healthData.height.toString() === "0" ? "" : healthData.height.toString()
  );

  const handleSubmit = async () => {
    setHealthData((prev: typeof healthData) => {
      return { ...prev, height, weight };
    });

    await AsyncStorage.setItem(
      "healthData",
      JSON.stringify({ ...healthData, height, weight })
    );

    navigation.goBack();
  };

  return (
    <View className="h-screen m-5">
      <Unitsbox
        label="Body weight:"
        value={weight}
        setValue={setWeight}
        unit="kgs"
        className="py-3"
      />
      <Unitsbox
        label="Height:"
        value={height}
        setValue={setHeight}
        unit="cms"
        className="py-3"
      />
      <Button title="Submit" onPress={handleSubmit} className="mt-10" />
    </View>
  );
};

export default BMI;
