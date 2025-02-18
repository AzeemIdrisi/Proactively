import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import StatusText from "../components/Common/StatusText";
import Button from "../components/Common/Button";
import Feather from "@expo/vector-icons/Feather";
import { UserContext } from "../store/user-context";

const Appointment = ({ navigation, route }: any) => {
  const { appointmentData } = useContext(UserContext);

  const { doctor, doctorSpec, doctorImg, dataTime, meetingLink } =
    appointmentData;

  const openMeet = () => {
    Linking.openURL(
      meetingLink.length > 0
        ? meetingLink
        : "https://meet.google.com/abc-defa-dwa"
    );
  };

  return (
    <ScrollView className="p-5">
      <View className="items-start w-full">
        <StatusText text="upcoming" />
      </View>

      <View className="w-full items-center justify-center gap-y-8 py-5 pb-10 border-b-2 border-b-gray-200">
        <Image
          source={{
            uri:
              doctorImg.length > 0
                ? doctorImg
                : "https://i.pinimg.com/736x/f3/51/c7/f351c7d0a2e54acf12eba031d49bf783.jpg",
          }}
          className="size-36 rounded-full"
        />
        <View className="items-center gap-y-2">
          <Text className="text-xl font-medium">
            Your upcoming appointment with
          </Text>
          <Text className="text-secondary text-lg">
            {`${doctor.length > 0 ? doctor : "Laurie Simons"}, ${doctorSpec.length > 0 ? doctorSpec : "MD, DipABLM"}`}
          </Text>
        </View>
        <View className="items-center w-full gap-y-4">
          <Text className="text-purple-800 bg-purple-100 font-medium text-lg p-2 py-0 rounded-lg">
            Appointment
          </Text>
          <Text className="text-secondary text-base">
            {dataTime.length > 0
              ? dataTime
              : "Thu, December 21, 2024 | 10:00 AM PST"}
          </Text>
        </View>
      </View>

      <View className="justify-between gap-y-20 mb-40">
        <View className="mt-8 gap-y-2">
          <Text className="font-medium text-xl">Meeting link:</Text>
          <TouchableOpacity onPress={openMeet}>
            <Text className="text-secondary text-lg">
              {meetingLink.length > 0
                ? meetingLink
                : "https://meet.google.com/abc-defa-dwa"}
            </Text>
          </TouchableOpacity>
        </View>

        <Button title="Join meeting" onPress={openMeet}>
          <Feather name="arrow-up-right" size={24} color="white" />
        </Button>
      </View>
    </ScrollView>
  );
};

export default Appointment;
