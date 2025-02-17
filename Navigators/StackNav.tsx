import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";
import Login from "../Screens/Login";
import { UserContext } from "../store/user-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "../utils/Theme";

const StackNav = () => {
  const Stack = createStackNavigator();
  const { userId, authenticate } = useContext(UserContext);
  const isLoggedIn: boolean = !!userId;

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const checkLoggedIn = async () => {
    setIsAuthenticating(true);
    const userId = await AsyncStorage.getItem("userId");

    if (!!userId) {
      authenticate(userId);
    }
    setIsAuthenticating(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      checkLoggedIn();
    }
  }, []);

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

  if (isAuthenticating) {
    return (
      <View className="bg-white h-screen justify-center items-center">
        <ActivityIndicator color={Colors.primary} size={"large"} />
      </View>
    );
  }

  return isLoggedIn ? <TabNav /> : <AuthenticatedStack />;
};

export default StackNav;
