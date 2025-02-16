import { View, Text, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../../utils/Theme";

const AppointmentCard = () => {
  return (
    <View className="border border-gray-200 p-5 rounded-xl items-start">
      <View className="flex-row items-center justify-between w-full">
        <Text className="bg-emerald-600 text-white uppercase px-2 py-1 rounded">
          Upcoming
        </Text>
        <FontAwesome name="angle-right" size={24} color={Colors.secondary} />
      </View>
      <View className="flex-row items-center justify-between w-full mt-6">
        <View className="max-w-[75%] overflow-hidden">
          <Text
            className="font-semibold text-2xl"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Laurie Simons{"  "}
            <Text
              className="font-normal text-base text-secondary"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              MD, DipABLLoremIpsum
            </Text>
          </Text>
          <Text
            className="text-secondary"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Internal medicine
          </Text>
        </View>

        <Image
          source={{
            uri: "https://i.pinimg.com/736x/f3/51/c7/f351c7d0a2e54acf12eba031d49bf783.jpg",
          }}
          className="size-16 rounded-full"
        />
      </View>
      <View>
        <Text className="text-secondary text-lg mt-5">
          Thu, December 21, 2024 | 10:00 AM PST{" "}
        </Text>
      </View>
    </View>
  );
};

export default AppointmentCard;
