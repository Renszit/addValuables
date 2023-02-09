import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TextStyle,
  TextInputProps,
} from "react-native";
import { colors } from "../theme/colors";

export type CustomTextInputProps = {
  value: string;
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
  return (
    <View>
      <Text style={styles.textLabel}>{name}</Text>
      <View style={styles.textFieldContainer}>
        <TextInput
          accessibilityLabel={name}
          value={value}
          onChange={(val) => onChange(val, name)}
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
