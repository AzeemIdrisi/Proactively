import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  userId: null,
  authenticate: (userId) => {},
  logOut: () => {},
  healthData: {
    score: 0,
    steps: 0,
    weight: 0,
    height: 0,
    sleep: 0,
  },
  setHealthData: (healthData) => {},
  tasks: [{ id: null, status: false }],
  setTasks: (tasks) => {},
});

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [healthData, setHealthData] = useState({
    score: 0,
    steps: 0,
    weight: 0,
    height: 0,
    sleep: 0,
  });
  const [tasks, setTasks] = useState([{ id: null, status: false }]);

  const authenticate = async (userId) => {
    setUserId(userId);
    await AsyncStorage.setItem("userId", userId);
  };

  const logOut = async () => {
    setUserId(null);
    setHealthData({
      score: 0,
      steps: 0,
      weight: 0,
      height: 0,
      sleep: 0,
    });
    setTasks([{ id: null, status: false }]);
    await AsyncStorage.removeItem("healthData");
    await AsyncStorage.removeItem("userId");
  };

  const value = {
    userId,
    authenticate,
    logOut,
    healthData,
    setHealthData,
    tasks,
    setTasks,
  };

  useEffect(() => {
    const loadUserData = async () => {
      const storedHealthData = await AsyncStorage.getItem("healthData");
      if (storedHealthData) {
        setHealthData(JSON.parse(storedHealthData));
      }
    };
    loadUserData();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
