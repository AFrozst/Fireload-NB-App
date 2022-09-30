import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

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
