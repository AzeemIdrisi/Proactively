import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import Input from "../components/Common/Input";
import Button from "../components/Common/Button";
import { UserContext } from "../store/user-context";
import { Colors } from "../utils/Theme";

const Login = () => {
  const { authenticate } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logginIn, setLoggingIn] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid email", "Please check your email try again.");
      return;
    }
    if (email === "ethan@gmail.com" && password === "proactively") {
      setLoggingIn(true);
      setTimeout(() => {
        authenticate("1234");
      }, 1000);
    } else {
      Alert.alert(
        "Invalid credentials",
        "Please check your email and password and try again."
      );
    }
  };

  if (logginIn) {
    return (
      <View className="h-screen justify-center items-center">
        <ActivityIndicator color={Colors.primary} size={"large"} />
        <Text className="mt-5 text-primary font-semibold">Logging in...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View className="h-screen mx-5 mt-10">
        <View>
          <Text className="font-semibold text-2xl">Login to</Text>
          <View className="flex-row items-center justify-start gap-x-1">
            <Text className="font-semibold text-4xl text-primary">
              proactively
            </Text>
            <Image
              source={require("../assets/mini_logo.png")}
              resizeMode="contain"
              className="size-7"
            />
          </View>
        </View>
        <View className="mt-10 gap-y-16">
          <Text className="text-secondary">
            Login as a patient using your registered email.
          </Text>
          <View className="gap-y-5">
            <Input
              placeholder="Enter your email"
              value={email}
              setValue={setEmail}
            />
            <Input
              placeholder="Enter your password"
              secure
              value={password}
              setValue={setPassword}
            />
          </View>
        </View>
        <View className="mt-10 justify-center items-center gap-y-5">
          <Button title="Login" className="bg-primary" onPress={handleLogin} />
          <Text className="text-secondary">
            Don't have an account? <Text className="text-primary">Sign up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
