import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import StatusText from "../components/Common/StatusText";

const Appointment = () => {
  const openMeet = () => {
    Linking.openURL("https://www.meet.google.com/abc-defa-dwa");
  };

  return (
    <ScrollView className="p-5">
      <View className="items-start w-full">
        <StatusText text="upcoming" />
      </View>

      <View className="w-full items-center justify-center gap-y-8 py-5 pb-10 border-b-2 border-b-gray-200">
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/f3/51/c7/f351c7d0a2e54acf12eba031d49bf783.jpg",
          }}
          className="size-36 rounded-full"
        />
        <View className="items-center gap-y-2">
          <Text className="text-xl font-medium">
            Your upcoming appointment with
          </Text>
          <Text className="text-secondary text-lg">
            Laurie Simons, MD, DipABLM
          </Text>
        </View>
        <View className="items-center w-full gap-y-4">
          <Text className="text-purple-800 bg-purple-100 font-medium text-lg p-2 py-0 rounded-lg">
            Appointment
          </Text>
          <Text className="text-secondary text-base">
            Thu, December 21, 2024 | 10:00 AM PST
          </Text>
        </View>
      </View>

      <View className="mt-8 gap-y-2">
        <Text className="font-medium text-xl">Meeting link:</Text>
        <TouchableOpacity onPress={openMeet}>
          <Text className="text-secondary text-lg">
            www.meet.google.com/abc-defa-dwa
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Appointment;
