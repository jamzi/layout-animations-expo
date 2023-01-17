import { useState } from "react";
import { StyleSheet, Text, Image, Button, FlatList } from "react-native";
import Animated, { Easing, Keyframe } from "react-native-reanimated";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function KeyframesScreen({
  navigation,
}: RootTabScreenProps<"Keyframes">) {
  const [show, setShow] = useState(false);

  const enteringAnimation = new Keyframe({
    0: {
      originX: 50,
      transform: [{ rotate: "45deg" }, { scale: 0.5 }],
    },
    30: {
      transform: [{ rotate: "-90deg" }, { scale: 2 }],
    },
    50: {
      originX: 70,
    },
    100: {
      originX: 0,
      transform: [{ rotate: "0deg" }, { scale: 1 }],
      easing: Easing.quad,
    },
  })
    .duration(2000)
    .withCallback((finished: boolean) => {
      "worklet";
      if (finished) {
        console.log("callback");
      }
    });

  const exitingAnimation = new Keyframe({
    0: {
      opacity: 1,
      originX: 0,
    },
    30: {
      originX: -50,
      easing: Easing.exp,
    },
    100: {
      opacity: 0,
      originX: 500,
    },
  }).duration(2000);

  return (
    <View style={styles.container}>
      {show && (
        <Animated.View
          entering={enteringAnimation}
          exiting={exitingAnimation}
          style={{ width: 200, height: 200, backgroundColor: "red" }}
        />
      )}
      <View style={{ position: "absolute", bottom: 0 }}>
        <Button
          title="animate"
          onPress={() => {
            setShow((last) => !last);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
});
