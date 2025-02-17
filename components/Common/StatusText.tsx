import { Text } from "react-native";
import React from "react";

interface Props {
  text: string;
}
const StatusText: React.FC<Props> = ({ text }) => {
  return (
    <Text className="bg-emerald-600 text-white uppercase px-2 py-1 rounded">
      {text}
    </Text>
  );
};

export default StatusText;
