import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { InventoryItem } from "../navigation/types";
import { colors } from "../theme/colors";
import { BORDER_RADIUS } from "../theme/constants";
import { fonts } from "../theme/fonts";

export type InventoryCardProps = {
  item: InventoryItem;
};

//TODO: format value

const InventoryCard = ({ item }: InventoryCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.photo }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{"€" + item.value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 265,
    maxWidth: 157,
    margin: 10,
    aspectRatio: 2.3,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.solidWhite,
    shadowColor: colors.shadow,
    shadowRadius: 14,
    shadowOpacity: 0.5,
    shadowOffset: { width: 10, height: 20 },
    elevation: 5,
  },
  title: {
    fontSize: 19,
    fontFamily: fonts.bold,
    color: colors.textBlack,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: fonts.regular,
    fontWeight: "400",
    color: colors.textGrey,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "50%",
    padding: 20,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    height: "50%",
  },
});

export default InventoryCard;
