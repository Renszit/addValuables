import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { ImagePicker } from "../sdk/ImagePicker";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

//TODO: change icon to figma icon
//TODO: implement image picker

const UploadPhoto = ({ handleChange }) => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.takePhoto();

    if (!result?.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    handleChange(image, "photo");
  }, [image]);

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityLabel="pickPhoto"
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
              accessibilityLabel={"photo"}
              source={{ uri: image }}
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
