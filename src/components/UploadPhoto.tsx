import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { useEffect, useState } from "react";
import { ImagePicker } from "../sdk/ImagePicker";
import { ImagePickerAsset } from "expo-image-picker";

//TODO: change icon to figma icon

const UploadPhoto = ({ handleChange }) => {
  const [image, setImage] = useState<ImagePickerAsset | null>(null);
  console.log(image);
  const pickImage = async () => {
    const result = await ImagePicker.takePhoto();
    if (result) {
      setImage(result.assets[0]);
    }
  };

  useEffect(() => {
    handleChange(image, "image");
  }, [image]);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={pickImage}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.photoContainer,
        ]}
        pressRetentionOffset={20}
        hitSlop={20}
      >
        {image && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: image.uri }}
              style={{ width: 150, height: 150, borderRadius: 75 }}
            />
            <Pressable
              onPress={() => setImage(null)}
              pressRetentionOffset={20}
              hitSlop={20}
              style={styles.trashCanView}
            >
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={15}
                color={colors.solidWhite}
              />
            </Pressable>
          </View>
        )}
        {!image && (
          <>
            <MaterialCommunityIcons
              name="camera"
              size={34}
              color={colors.mainBlue}
            />
            <Text style={styles.text}>Add Photo</Text>
          </>
        )}
      </Pressable>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  photoContainer: {
    borderColor: colors.fadedGrey,
    borderWidth: 2,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75,
    width: 150,
    height: 150,
  },
  text: {
    fontFamily: fonts.bold,
    color: colors.textBlack,
    fontSize: 17,
  },
  imageContainer: {
    alignItems: "center",
  },
  trashCanView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.red,
  },
});
