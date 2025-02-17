import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const UserContext = createContext({
  userId: null,
  authenticate: (userId) => {},
  logOut: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const authenticate = async (userId) => {
    setUserId(userId);
    await AsyncStorage.setItem("userId", userId);
  };
  const logOut = async () => {
    setUserId(null);
    await AsyncStorage.removeItem("userId");
  };

  const value = {
    userId: userId,
    authenticate,
    logOut,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
