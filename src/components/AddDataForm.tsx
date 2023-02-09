import { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { colors } from "../theme/colors";
import CustomTextInput from "./CustomTextInput";
import UploadPhoto from "./UploadPhoto";

//TODO: make textfield container tappable to focus on textinput

const AddDataForm = ({ toggleButton }) => {
  const [data, setData] = useState({
    name: "",
    value: "",
    description: "",
    image: null,
  });

  const handleChange = (val: any, name: string) => {
    if (name === "image") {
      setData({ ...data, [name]: val });
    } else {
      setData({ ...data, [name]: val?.target.value });
    }
  };

  useEffect(() => {
    if (data.name != "" && data.value != "" && data.image != null) {
      toggleButton(true);
    } else {
      toggleButton(false);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <UploadPhoto handleChange={handleChange} />
      <View>
        <CustomTextInput
          value={data.name}
          onChange={handleChange}
          name={"name"}
        />
        <CustomTextInput
          value={data.value}
          onChange={handleChange}
          keyboardType={"numeric"}
          name={"value"}
        />
        <CustomTextInput
          value={data.description}
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
