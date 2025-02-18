import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";
import Login from "../Screens/Login";
import { UserContext } from "../store/user-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "../utils/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import BootSplash from "react-native-bootsplash";

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
    await BootSplash.hide({ fade: true });
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
      <SafeAreaView className="bg-white h-screen justify-center items-center">
        <ActivityIndicator color={Colors.primary} size={"large"} />
      </SafeAreaView>
    );
  }

  return isLoggedIn ? <TabNav /> : <AuthenticatedStack />;
};

export default StackNav;
