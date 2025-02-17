import { View, Text } from "react-native";
import React, { useState } from "react";
import Unitsbox from "../components/Common/Unitsbox";
import Button from "../components/Common/Button";

const Steps = () => {
  const handleSubmit = () => {};
  const [stepsCount, setStepsCount] = useState<string>("14425");
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
