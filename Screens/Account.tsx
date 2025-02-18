import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../utils/Theme";
import { UserContext } from "../store/user-context";
import * as Clipboard from "expo-clipboard";
import messaging from "@react-native-firebase/messaging";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Account = () => {
  const { logOut } = useContext(UserContext);

  const handleCopyFCM = async () => {
    const token = await messaging().getToken();
    await Clipboard.setStringAsync(token?.toString());
    ToastAndroid.show("FCM token copied to clipboard.", ToastAndroid.LONG);
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout of your account?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes, Logout",
        onPress: () => logOut(),
      },
    ]);
  };

  return (
    <SafeAreaView>
      <View className="p-5 justify-between h-[97%]">
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
          <Pressable
            onPress={handleCopyFCM}
            className="mt-2 flex-row justify-start items-center gap-x-2 border-b-2 border-gray-200 py-5"
          >
            <MaterialIcons name="content-copy" size={24} color="black" />
            <Text className="text-md font-semibold">Copy FCM Token</Text>
          </Pressable>

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
        <Text className="text-secondary text-center">
          Proactively version 1.0.0
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Account;
