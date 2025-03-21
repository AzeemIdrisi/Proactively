import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../../utils/Theme";
import { useNavigation } from "@react-navigation/native";
import StatusText from "../Common/StatusText";
import { UserContext } from "../../store/user-context";

const AppointmentCard = () => {
  const navigation = useNavigation<any>();
  const handleTap = () => {
    navigation.navigate("appointment");
  };

  const { appointmentData } = useContext(UserContext);

  const { doctor, doctorSpec, doctorImg, dataTime, meetingLink } =
    appointmentData;
  return (
    <Pressable
      onPress={handleTap}
      className="border border-gray-200 p-5 rounded-xl items-start"
    >
      <View className="flex-row items-center justify-between w-full">
        <StatusText text="upcoming" />
        <FontAwesome name="angle-right" size={24} color={Colors.secondary} />
      </View>
      <View className="flex-row items-center justify-between w-full mt-6">
        <View className="max-w-[75%] overflow-hidden">
          <Text
            className="font-semibold text-2xl"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {doctor.length > 0 ? doctor : "Laurie Simons"}
            {"  "}
            <Text
              className="font-normal text-base text-secondary"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {doctorSpec.length > 0 ? doctorSpec : "MD, DipABLM"}
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
            uri:
              doctorImg.length > 0
                ? doctorImg
                : "https://i.pinimg.com/736x/f3/51/c7/f351c7d0a2e54acf12eba031d49bf783.jpg",
          }}
          className="size-16 rounded-full"
        />
      </View>
      <View>
        <Text className="text-secondary text-lg mt-5">
          {dataTime.length ? dataTime : "Thu, December 21, 2024 | 10:00 AM PST"}
        </Text>
      </View>
    </Pressable>
  );
};

export default AppointmentCard;
