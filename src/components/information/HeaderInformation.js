import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

const HeaderInformation = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding + 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: SIZES.extralarge,
    fontFamily: FONTS.InterBold,
    color: COLORS.white,
  },
  subtitle: {
    fontSize: SIZES.small,
    fontFamily: FONTS.InterRegular,
    color: COLORS.gray,
  },
});

export default HeaderInformation;
