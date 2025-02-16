import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../utils/Theme";

interface InputProps {
  placeholder: string;
  secure?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, secure }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <View
        className={`flex-row items-center w-full bg-gray-200 justify-between h-16 px-5 rounded-lg border ${
          isFocused ? "border-primary" : "border-gray-200"
        }`}
      >
        <TextInput
          placeholder={placeholder}
          className={`h-full ${secure ? "w-[90%]" : "w-full"}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secure && !showPassword}
        />
        {secure && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="h-full items-center justify-center"
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color={Colors.secondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
