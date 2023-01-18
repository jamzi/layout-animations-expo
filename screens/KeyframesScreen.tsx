import { useState } from "react";
import { StyleSheet, Button } from "react-native";
import Animated, { Keyframe } from "react-native-reanimated";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function KeyframesScreen({
  navigation,
}: RootTabScreenProps<"Keyframes">) {
  const [show, setShow] = useState(false);

  const enteringAnimation = new Keyframe({
    0: {
      transform: [{ rotate: "45deg" }, { scale: 0.5 }],
    },
    30: {
      transform: [{ rotate: "-90deg" }, { scale: 2 }],
    },
    100: {
      transform: [{ rotate: "0deg" }, { scale: 1 }],
    },
  }).duration(2000);

  const exitingAnimation = new Keyframe({
    0: {
      opacity: 1,
    },
    100: {
      opacity: 0,
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
