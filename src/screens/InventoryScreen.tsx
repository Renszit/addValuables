import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import InventoryCard, { InventoryItem } from "../components/InventoryCard";
import { Title } from "../components/Title";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import MOCK_DATA from "./mockdata.json";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const [data, setData] = useState<InventoryItem[]>(MOCK_DATA);

  const handleAddButtonPress = () => navigation.navigate("AddItem");

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        directionalLockEnabled={true}
        keyExtractor={(item: InventoryItem) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={Math.ceil(MOCK_DATA.length / 2)}
        data={data}
        contentContainerStyle={{ width: Dimensions.get("window").width }}
        renderItem={InventoryCard}
      />
    </View>
  );
}
//TODO: fix layout
//TODO: remove horizontal scroll/scrollview

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    alignItems: "center",
  },
});
