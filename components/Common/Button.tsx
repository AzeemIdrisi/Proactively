import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  title,
  className,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full h-16 rounded-lg flex-row gap-x-1 items-center justify-center bg-primary ${className}`}
    >
      <Text className="text-white text-lg">{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
