import React from "react";
import StackNav from "./StackNav";
import { NavigationContainer } from "@react-navigation/native";
import { UserContextProvider } from "../store/user-context";

const Navigation = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default Navigation;
