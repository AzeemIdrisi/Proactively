import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Input from "../components/Input";

const Login = () => {
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
        <View className="mt-10 gap-y-10">
          <Text className="text-secondary">
            Login as a patient using your registered email.
          </Text>
          <View className="gap-y-5">
            <Input placeholder="Enter your email" />
            <Input placeholder="Enter your password" secure />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
