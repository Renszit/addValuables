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

  //TODO: fix type keyExtractor

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{ height: "100%" }}
        numColumns={2}
        keyExtractor={(item, index) => " key" + index + item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={InventoryCard}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    justifyContent: "space-between",
  },
});
