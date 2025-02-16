import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";
import Login from "../Screens/Login";

const StackNav = () => {
  const Stack = createStackNavigator();
  const isLoggedIn: boolean = false;

  const AuthenticatedStack = () => {
    return (
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  return isLoggedIn ? <TabNav /> : <AuthenticatedStack />;
};

export default StackNav;
