import { StatusBar } from "expo-status-bar";
import "./global.css";
import Navigation from "./Navigators/Navigation";
import { useEffect } from "react";
import { getMessaging } from "@react-native-firebase/messaging";
import messaging from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  Notifications.setNotificationChannelAsync("default", {
    name: "default",
    importance: Notifications.AndroidImportance.MAX,
  });

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    console.error(
      "Permission not granted to get push token for push notification!"
    );
    return;
  }
}

export const sendNotification = async (remoteMessage: any) => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: remoteMessage?.notification?.title,
        body: remoteMessage?.notification?.body,
        data: remoteMessage?.notification?.data,
      },
      trigger: null,
    });
  } catch (error) {
    console.log("Error in App.js", error);
  }
};

export default function App() {
  useEffect(() => {
    const unsubscribe = getMessaging().onMessage(async (remoteMessage) => {
      sendNotification(remoteMessage);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const getFcmToken = async () => {
    const token = await messaging().getToken();
    console.log("🚀 ~ getFcmToken ~ token:", token);
  };
  // getFcmToken();

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
