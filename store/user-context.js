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
  tasks: {},
  setTasks: (tasks) => {},
  appointmentData: {
    doctor: "",
    doctorSpec: "",
    doctorImg: "",
    dataTime: "",
    meetingLink: "",
  },
  setAppointmentData: (data) => {},
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
  const [tasks, setTasks] = useState({});
  const [appointmentData, setAppointmentData] = useState({
    doctor: "",
    doctorSpec: "",
    doctorImg: "",
    dataTime: "",
    meetingLink: "",
  });

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
    setTasks({});
    setAppointmentData({
      doctor: "",
      doctorSpec: "",
      doctorImg: "",
      dataTime: "",
      meetingLink: "",
    });
    await AsyncStorage.removeItem("healthData");
    await AsyncStorage.removeItem("userId");
    await AsyncStorage.removeItem("tasks");
  };

  const value = {
    userId,
    authenticate,
    logOut,
    healthData,
    setHealthData,
    tasks,
    setTasks,
    appointmentData,
    setAppointmentData,
  };

  useEffect(() => {
    const loadUserData = async () => {
      const storedHealthData = await AsyncStorage.getItem("healthData");
      const storedTasksData = await AsyncStorage.getItem("tasks");
      if (storedHealthData) {
        setHealthData(JSON.parse(storedHealthData));
      }
      if (storedTasksData) {
        setTasks(JSON.parse(storedTasksData));
      }
    };
    loadUserData();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
