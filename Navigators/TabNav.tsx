import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../Screens/Account";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../utils/Theme";
import HomeStack from "./HomeStack";

const TabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.tertiary,
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
          paddingHorizontal: 50,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="filter-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          title: "Account",

          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
