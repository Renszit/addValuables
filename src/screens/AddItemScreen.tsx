import { createContext, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import { DataContext } from "../../DataProvider";
import AddDataForm from "../components/AddDataForm";
import Button from "../components/Button";
import { InventoryItem, RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

const totalValExceedsMax = (data: InventoryItem[], newData: InventoryItem) => {
  let totalValue = 0;
  data.forEach((item) => {
    totalValue += Number(item.value);
  });
  totalValue += Number(newData.value);
  return totalValue >= 40000;
};

export default function AddItemScreen({
  route,
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const { data, updateData } = useContext(DataContext);

  const [newData, setNewData] = useState<InventoryItem>({
    id: data.length + 1,
    name: "",
    value: "",
    description: "",
    photo: "",
  });

  const handleChange = (val: any, name: string) => {
    setNewData({ ...newData, [name]: val });
  };

  const toggleButton = (bool: boolean) => setButtonEnabled(bool);

  const handleAddButtonPress = async () => {
    if (totalValExceedsMax(data, newData)) {
      alert("Total value of items exceeds 40000");
      navigation.goBack();
      return;
    }
    await updateData(newData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button
          title="Add"
          disabled={!buttonEnabled}
          onPress={handleAddButtonPress}
        />
      </View>
      <AddDataForm
        newData={newData}
        toggleButton={toggleButton}
        handleChange={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
});
