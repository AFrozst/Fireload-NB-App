import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const Layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
  },
});

export default Layout;
