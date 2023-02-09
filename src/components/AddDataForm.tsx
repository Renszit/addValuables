import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { InventoryItem } from "../navigation/types";
import CustomTextInput from "./CustomTextInput";
import UploadPhoto from "./UploadPhoto";

type AddDataFormProps = {
  newData: InventoryItem;
  toggleButton: (bool: boolean) => void;
  handleChange: (val: string, name: string) => void;
};

const AddDataForm = ({
  newData,
  toggleButton,
  handleChange,
}: AddDataFormProps) => {
  useEffect(() => {
    if (
      newData.name != "" &&
      newData.value != "" &&
      newData.photo != "" &&
      newData.photo != null
    ) {
      toggleButton(true);
    } else {
      toggleButton(false);
    }
  }, [newData]);

  return (
    <View style={styles.container}>
      <UploadPhoto handleChange={handleChange} />
      <View>
        <CustomTextInput
          value={newData.name}
          onChange={handleChange}
          name={"name"}
        />
        <CustomTextInput
          value={newData.value}
          onChange={handleChange}
          keyboardType={"numeric"}
          name={"value"}
        />
        <CustomTextInput
          value={newData.description}
          onChange={handleChange}
          placeholder={"Optional"}
          name={"description"}
          style={{ height: 100 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
  },
});

export default AddDataForm;
