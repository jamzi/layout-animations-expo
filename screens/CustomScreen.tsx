import { useState } from "react";
import { StyleSheet, Text, Button } from "react-native";
import Animated, {
  LayoutAnimationFunction,
  withTiming,
} from "react-native-reanimated";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

function CustomLayoutTransiton(): LayoutAnimationFunction {
  return () => {
    "worklet";
    return {
      animations: {
        backgroundColor: withTiming("blue", { duration: 1000 }),
      },
      initialValues: {
        backgroundColor: "red",
      },
    };
  };
}

function Box({ label, state }: { label: string; state: boolean }) {
  return (
    <Animated.View
      layout={CustomLayoutTransiton()}
      style={[styles.box, { height: state ? 30 : 60 }]}
    >
      <Text> {label} </Text>
    </Animated.View>
  );
}

export default function CustomScreen({
  navigation,
}: RootTabScreenProps<"Custom">) {
  const [state, setState] = useState(true);

  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ height: 300 }}>
        <View
          style={{ flexDirection: state ? "row" : "column", borderWidth: 1 }}
        >
          <Box key="a" label="A" state={state} />
          <Box key="b" label="B" state={state} />
          <Box key="c" label="C" state={state} />
        </View>
      </View>
      <Button
        onPress={() => {
          setState(!state);
        }}
        title="toggle"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    margin: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    width: 60,
    height: 60,
  },
});
