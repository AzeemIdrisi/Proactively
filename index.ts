import { registerRootComponent } from "expo";

import App, { sendNotification } from "./App";
import { getMessaging } from "@react-native-firebase/messaging";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

getMessaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
  sendNotification(remoteMessage);
});

registerRootComponent(App);
