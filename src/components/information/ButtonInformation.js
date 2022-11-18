import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

const ButtonInformation = ({
  label,
  backgroundColor,
  icon,
  colorLabel,
  descirption,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <View style={styles.containerTitle}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text
          style={[styles.label, { color: colorLabel, textAlign: "center" }]}
        >
          {label}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {descirption && (
          <Text style={[styles.description, { color: colorLabel }]}>
            {descirption}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 125,
    borderRadius: 15,
    margin: SIZES.padding - 7,
    padding: SIZES.padding * 2,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: FONTS.InterSemiBold,
    marginLeft: 5,
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    color: COLORS.white,
    fontSize: SIZES.base,
    fontFamily: FONTS.InterRegular,
    marginLeft: 15,
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default ButtonInformation;
