import { StatusBar } from "expo-status-bar";
import "./global.css";
import Navigation from "./Navigators/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="auto" />
      <Navigation />
    </GestureHandlerRootView>
  );
}
