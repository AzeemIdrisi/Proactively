import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const navigation = useNavigation<any>();

  const handleAlertsTap = () => {
    navigation.navigate("alerts");
  };
  return (
    <View className="flex-row justify-between items-center px-5 py-5">
      <Image
        className="size-12 rounded-full"
        source={{
          uri: "https://kolinternational.academy/wp-content/uploads/2018/07/portrait-square-03.jpg",
        }}
      />
      <Text className="text-lg text-white font-medium">Ethan Harkinson</Text>
      <Pressable onPress={handleAlertsTap} className="relative">
        <FontAwesome5 name="bell" size={24} color="white" />
        <View className="bg-red-500 size-2 rounded-full absolute right-0 top-0"></View>
      </Pressable>
    </View>
  );
};

export default Header;
