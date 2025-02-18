import React, { useEffect } from "react";
import Metrics from "../components/HomeScreen/Metrics";

import HomeBottomSheet from "../components/HomeScreen/HomeBottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    // Listener for notifications when the app is in the foreground
    const foregroundSubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        const data = notification.request.content.data;

        if (data && data.screen && data.params) {
          const { screen, params } = data;
          const parsedParams = params ? JSON.parse(params) : {};

          // Navigate to the screen
          navigation.navigate(screen, parsedParams);
        }
      });

    // Listener for when a user taps on a notification (background or closed)
    const backgroundSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const data = response.notification.request.content.data;

        if (data && data.screen && data.params) {
          const { screen, params } = data;
          const parsedParams = params ? JSON.parse(params) : {};

          // Navigate to the screen
          navigation.navigate(screen, parsedParams);
        }
      });

    // Cleanup the listeners on unmount
    return () => {
      foregroundSubscription.remove();
      backgroundSubscription.remove();
    };
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1">
      <Metrics />
      <HomeBottomSheet />
    </SafeAreaView>
  );
};

export default Home;
