import { useContext, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { DataContext } from "../../DataProvider";

import InventoryCard from "../components/InventoryCard";
import { Title } from "../components/Title";
import { InventoryItem, RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { BORDER_RADIUS } from "../theme/constants";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const { data } = useContext(DataContext);
  const handleAddButtonPress = () => navigation.navigate("AddItem");

  //TODO: fix layout
  //TODO: fix type keyExtractor

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={data}
        contentContainerStyle={styles.itemContainer}
        renderItem={InventoryCard}
        // columnWrapperStyle={{ margin: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  itemContainer: {
    width: "100%",
    padding: 10,
    marginTop: 20,
    justifyContent: "space-between",
  },
});
