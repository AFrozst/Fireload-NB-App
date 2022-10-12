import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extralarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  label,
  minWidth,
  fontSize,
  color,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        minWidth: minWidth,
        padding: SIZES.small,
        borderRadius: SIZES.extralarge,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: fontSize,
          textAlign: "center",
          fontFamily: FONTS.InterSemiBold,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export const RectButtonArrow = ({
  title,
  minWidth,
  fontSize,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        width: "100%",
        padding: SIZES.small,
        borderRadius: SIZES.font,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: SIZES.base,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: fontSize,
          textAlign: "center",
          fontFamily: FONTS.InterSemiBold,
        }}
      >
        {title}
      </Text>
      <MaterialCommunityIcons
        name="arrow-right"
        size={24}
        color={COLORS.white}
        style={{ marginLeft: SIZES.small }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  RecButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.extralarge,
  },
  textRectButton: {
    color: COLORS.white,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
  },
});
