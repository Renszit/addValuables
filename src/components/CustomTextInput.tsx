import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TextStyle,
  TextInputProps,
} from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export type CustomTextInputProps = {
  value: string | undefined | number;
  onChange: (e: any, name: string) => void;
  placeholder?: string;
  name: string;
  keyboardType?: TextInputProps["keyboardType"];
  style?: TextStyle;
};

const CustomTextInput = ({
  value,
  onChange,
  placeholder,
  name,
  ...props
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <View>
      <Text style={styles.textLabel}>
        {name[0].toUpperCase() + name.slice(1)}
      </Text>
      <View
        style={[
          styles.textFieldContainer,
          {
            borderColor: isFocused ? colors.mainBlue : colors.fadedGrey,
            borderWidth: isFocused ? 2 : 1,
          },
        ]}
      >
        <TextInput
          accessibilityLabel={name + "Input"}
          value={value?.toString()}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          onChangeText={(e) => onChange(e, name)}
          placeholder={placeholder}
          multiline={true}
          {...props}
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
  textLabel: {
    marginBottom: 5,
    fontSize: 13,
    color: colors.textBlack,
    fontFamily: fonts.bold,
  },
  textFieldContainer: {
    backgroundColor: colors.solidWhite,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});

export default CustomTextInput;
