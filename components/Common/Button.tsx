import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ title, className, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full h-16 rounded-lg items-center justify-center bg-primary ${className}`}
    >
      <Text className="text-white text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
