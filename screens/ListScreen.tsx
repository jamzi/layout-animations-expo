import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, TextInput } from "react-native";
import Animated, {
  LightSpeedInLeft,
  FadeInDown,
  LightSpeedOutRight,
} from "react-native-reanimated";

import { Text, View } from "../components/Themed";

interface EventParticipant {
  name: string;
  id: string;
}

const Participant = ({
  name,
  onRemove,
}: {
  name: string;
  onRemove: () => void;
}): React.ReactElement => {
  return (
    <Animated.View
      entering={LightSpeedInLeft}
      exiting={LightSpeedOutRight}
      style={styles.participantView}
    >
      <Text>{name}</Text>
      <Button title="Remove" color="red" onPress={onRemove} />
    </Animated.View>
  );
};

export default function TabTwoScreen() {
  const [inputValue, setInputValue] = useState("Test user");
  const [participantList, setParticipantList] = useState<EventParticipant[]>(
    []
  );

  const addParticipant = () => {
    setParticipantList(
      [{ name: inputValue, id: Date.now().toString() }].concat(participantList)
    );
  };

  const removeParticipant = (id: string) => {
    setParticipantList(
      participantList.filter((participant) => participant.id !== id)
    );
  };

  return (
    <View style={[styles.listView]}>
      <ScrollView style={[{ width: "100%" }]}>
        {participantList.map((participant) => (
          <Participant
            key={participant.id}
            name={participant.name}
            onRemove={() => removeParticipant(participant.id)}
          />
        ))}
      </ScrollView>
      <View style={[styles.bottomRow]}>
        <View style={[styles.textInput]}>
          <Text>Add participant: </Text>
          <TextInput
            placeholder="Name"
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>
        <Button
          title="Add"
          disabled={inputValue === ""}
          onPress={addParticipant}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  participantView: {
    borderBottomColor: "black",
    width: "100%",
    borderBottomWidth: 1,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fffbeb",
  },
  listView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingBottom: 30,
  },
  bottomRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  textInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
