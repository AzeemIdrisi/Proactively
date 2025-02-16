import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View>
      <Text>TabNav</Text>
    </View>
  );
};

export default TabNav;
