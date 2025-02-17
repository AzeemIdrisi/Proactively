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
const Steps: React.FC<ScreenProps> = ({ navigation }) => {
  const { healthData, setHealthData } = useContext(UserContext);

  const [stepsCount, setStepsCount] = useState<string>(
    healthData.steps.toString() === "0" ? "" : healthData.steps.toString()
  );
  const handleSubmit = async () => {
    setHealthData((prev: typeof healthData) => {
      return { ...prev, steps: stepsCount };
    });

    await AsyncStorage.setItem(
      "healthData",
      JSON.stringify({ ...healthData, steps: stepsCount })
    );

    navigation.goBack();
  };
  return (
    <View className="h-screen m-5">
      <Unitsbox
        label="Steps count:"
        value={stepsCount}
        setValue={setStepsCount}
        unit="steps"
        className="py-3"
      />
      <Button title="Submit" onPress={handleSubmit} className="mt-10" />
    </View>
  );
};

export default Steps;
