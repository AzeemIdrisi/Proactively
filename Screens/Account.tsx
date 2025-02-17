import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../utils/Theme";

const Account = () => {
  const handleLogout = () => {};
  return (
    <SafeAreaView>
      <View className="p-5 h-screen justify-between">
        <View>
          <View className="flex-row items-center justify-start gap-x-5 mt-5">
            <Image
              className="size-24 rounded-full"
              source={{
                uri: "https://kolinternational.academy/wp-content/uploads/2018/07/portrait-square-03.jpg",
              }}
            />
            <View>
              <Text className="font-medium text-2xl">Ethan Harkinson</Text>
              <Text className="text-secondary">ethanharkinson@outlook.com</Text>
            </View>
          </View>

          <View className="mt-5 flex-row justify-start items-center gap-x-2 border-b-2 border-gray-200 py-5">
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color={"black"}
            />
            <Text className="font-medium text-lg">Account</Text>
          </View>

          <TouchableOpacity
            onPress={handleLogout}
            className="mt-2 flex-row justify-between items-center gap-x-2 py-5 pr-3"
          >
            <Text
              className="text-lg font-medium"
              style={{ color: Colors.danger }}
            >
              Log out
            </Text>
            <FontAwesome name="angle-right" size={24} color={Colors.danger} />
          </TouchableOpacity>
        </View>
        <Text className="pb-40 text-secondary text-center">
          Proactively version 1.0.0
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Account;
