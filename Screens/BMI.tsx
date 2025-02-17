import { View, Text } from "react-native";
import React, { useState } from "react";
import Unitsbox from "../components/Common/Unitsbox";
import Button from "../components/Common/Button";

const BMI = () => {
  const [weight, setWeight] = useState<string>("78");
  const [height, setHeight] = useState<string>("154");
  const handleSubmit = () => {};
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
