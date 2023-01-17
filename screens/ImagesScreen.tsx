import { useState } from "react";
import { StyleSheet, Text, Image, Button } from "react-native";
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
    layout={Layout.springify()}
    entering={FadeInUp}
    exiting={FadeOutDown}
  >
    <Image source={{ uri: image }} style={{ height: 200, width: 150 }} />
    <Text>{title}</Text>
    <Button title="X" onPress={() => onDelete(id)} />
  </Animated.View>
);

export default function ImagesScreen({
  navigation,
}: RootTabScreenProps<"Images">) {
  const [cards, setCards] = useState([
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
  ]);

  const onDelete = (id: number) => {
    const deleteIndex = cards.findIndex((card) => card.id === id);
    setCards([...cards.slice(0, deleteIndex), ...cards.slice(deleteIndex + 1)]);
  };

  return (
    <View style={styles.container}>
      {cards.map(({ image, title, id }) => (
        <Card
          id={id}
          image={image}
          title={title}
          key={id}
          onDelete={onDelete}
        />
      ))}
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
