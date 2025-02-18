import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Animated, Image, Text, View } from "react-native";
import BootSplash from "react-native-bootsplash";

type Props = {
  onAnimationEnd: () => void;
  isAppReady: boolean;
};

const AnimatedBootSplash = ({ onAnimationEnd, isAppReady }: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));

  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require("../../assets/bootsplash/manifest.json"),
    logo: require("../../assets/bootsplash/logo.png"),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      //   // Perform animations and call onAnimationEnd
      //   Animated.timing(opacity, {
      //     useNativeDriver: true,
      //     toValue: 0,
      //     duration: 500,
      //     delay: 2000,
      //   }).start(() => {
      //     onAnimationEnd();
      //   });
    },
  });

  useEffect(() => {
    if (isAppReady) {
      setTimeout(() => {
        Animated.timing(opacity, {
          useNativeDriver: true,
          toValue: 0,
          duration: 1000,
        }).start(() => {
          onAnimationEnd();
        });
      }, 1000);
    }
  }, [isAppReady]);

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <LinearGradient
        colors={["#00AB9A", "#204CBB"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View className="h-[80%] items-center justify-center">
          <Image {...logo} />
        </View>
        <Text className="text-white">Powered by Proactively</Text>
      </LinearGradient>
    </Animated.View>
  );
};

export default AnimatedBootSplash;
