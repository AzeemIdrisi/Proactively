import { StatusBar } from "expo-status-bar";
import "./global.css";
import Navigation from "./Navigators/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
