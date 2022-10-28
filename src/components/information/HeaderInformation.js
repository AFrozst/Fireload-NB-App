import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

const HeaderInformation = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding + 5,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: SIZES.extralarge,
    fontFamily: FONTS.InterBold,
    color: COLORS.white,
  },
});

export default HeaderInformation;
