import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Animated, { BounceInDown, PinwheelIn } from "react-native-reanimated";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function CountScreen({
  navigation,
}: RootTabScreenProps<"Count">) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Animated.Text key={count} style={styles.count} entering={PinwheelIn}>
        {count}
      </Animated.Text>
      <TouchableOpacity onPress={() => setCount((count) => count - 1)}>
        <Text style={styles.actionText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount((count) => count + 1)}>
        <Text style={styles.actionText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
  },
  count: { color: "white", fontSize: 100 },
  actionText: { color: "white", fontSize: 150 },
});
