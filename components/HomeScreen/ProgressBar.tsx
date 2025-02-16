import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  progressVal: number;
}
const interpolateColor = (progress: any) => {
  if (progress <= 50) {
    const r = 220;
    const g = Math.round((progress / 50) * 200); // 0 to 200
    const b = 0;
    return `rgb(${r},${g},${b})`;
  } else {
    const r = Math.round(220 - ((progress - 50) / 50) * 220); // 220 to 0
    const g = 200;
    const b = 0;
    return `rgb(${r},${g},${b})`;
  }
};

const ProgressBar: React.FC<Props> = ({ progressVal }) => {
  const progress = (progressVal / 3200) * 100; // percentage
  const arrowPosition = useSharedValue(progress); // Animation value
  const [arrowColor, setArrowColor] = useState(interpolateColor(progress));

  useEffect(() => {
    setArrowColor(interpolateColor(progress));
    arrowPosition.value = withTiming(progress, { duration: 300 });
  }, [progress]);

  const animatedArrowStyle = useAnimatedStyle(() => ({
    left: `${arrowPosition.value}%`,
  }));

  return (
    <View className="py-5">
      <Animated.View style={animatedArrowStyle}>
        <AntDesign name="caretdown" size={24} color={arrowColor} />
      </Animated.View>

      <View className="w-full h-5 rounded-full overflow-hidden">
        <LinearGradient
          colors={["rgb(220,0,0)", "rgb(200,200,0)", "rgb(0,200,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View className="flex-row w-full justify-between mt-3">
        <Text className="text-white/60 text-sm">0</Text>
        <Text className="text-white/60 text-sm">600</Text>
        <Text className="text-white/60 text-sm">1200</Text>
        <Text className="text-white/60 text-sm">1800</Text>
        <Text className="text-white/60 text-sm">2400</Text>
        <Text className="text-white/60 text-sm">3000</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
