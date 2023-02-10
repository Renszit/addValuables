import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { InventoryItem } from "../navigation/types";
import { colors } from "../theme/colors";
import { BORDER_RADIUS } from "../theme/constants";
import { fonts } from "../theme/fonts";

export type InventoryCardProps = {
  item: InventoryItem;
};

//TODO: fix shadow clipping

const InventoryCard = ({ item, index }: InventoryCardProps) => {
  const isInRightColindex = index % 2 === 0;
  return (
    <View
      style={[styles.container, { marginLeft: !isInRightColindex ? 20 : 0 }]}
    >
      <Image source={{ uri: item.photo }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>
          {"€" + item.value.toLocaleString("en-US")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 265,
    marginTop: 20,
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
