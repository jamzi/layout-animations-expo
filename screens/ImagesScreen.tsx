import { useState } from "react";
import { StyleSheet, Text, Image, Button, ScrollView } from "react-native";
import Animated, {
  FadeOutDown,
  FadeInUp,
  Layout,
} from "react-native-reanimated";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const Card = ({
  id,
  image,
  title,
  onDelete,
}: {
  id: number;
  image: string;
  title: string;
  onDelete: (id: number) => void;
}) => (
  <Animated.View
    layout={Layout.delay(200).springify()}
    entering={FadeInUp}
    exiting={FadeOutDown}
  >
    <Image source={{ uri: image }} style={{ height: 200, width: 137 }} />
    <Text>{title}</Text>
    <View style={{ position: "absolute", top: 0, right: 0 }}>
      <Button title="X" onPress={() => onDelete(id)} />
    </View>
  </Animated.View>
);

export default function ImagesScreen({
  navigation,
}: RootTabScreenProps<"Images">) {
  const [cards, setCards] = useState(defaultValues);

  const onDelete = (id: number) => {
    const deleteIndex = cards.findIndex((card) => card.id === id);
    setCards([...cards.slice(0, deleteIndex), ...cards.slice(deleteIndex + 1)]);
    if (cards.length === 1) {
      setCards(defaultValues);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.map((item, i) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          onDelete={onDelete}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "lightgray",
    height: "100%",
  },
});

const defaultValues = [
  {
    id: 1,
    title: "Test1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Test2",
    image: "https://picsum.photos/200/301",
  },
  {
    id: 3,
    title: "Test3",
    image: "https://picsum.photos/200/302",
  },
  {
    id: 4,
    title: "Test4",
    image: "https://picsum.photos/200/303",
  },
  {
    id: 5,
    title: "Test5",
    image: "https://picsum.photos/200/304",
  },
  {
    id: 6,
    title: "Test6",
    image: "https://picsum.photos/200/305",
  },
  {
    id: 7,
    title: "Test7",
    image: "https://picsum.photos/200/306",
  },
];
