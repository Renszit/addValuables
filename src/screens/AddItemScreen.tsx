import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import UploadPhoto from "../components/UploadPhoto";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { useContext, createContext, useState } from "react";
import AddDataForm from "../components/AddDataForm";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const toggleButton = (bool: boolean) => setButtonEnabled(bool);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button
          title="Add"
          disabled={!buttonEnabled}
          onPress={() => undefined}
        />
      </View>
      <AddDataForm toggleButton={toggleButton} />
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
