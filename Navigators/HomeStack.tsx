import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Appointment from "../Screens/Appointment";
import BMI from "../Screens/BMI";
import Steps from "../Screens/Steps";
import Sleep from "../Screens/Sleep";
import Alerts from "../Screens/Alerts";

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="appointment"
        component={Appointment}
        options={{
          headerTitle: "Appointment details",
        }}
      />
      <Stack.Screen
        name="bmi"
        component={BMI}
        options={{
          headerTitle: "BMI entry",
        }}
      />
      <Stack.Screen
        name="steps"
        component={Steps}
        options={{
          headerTitle: "Steps entry",
        }}
      />
      <Stack.Screen
        name="sleep"
        component={Sleep}
        options={{
          headerTitle: "Sleep entry",
        }}
      />
      <Stack.Screen
        name="alerts"
        component={Alerts}
        options={{
          title: "Alerts",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
