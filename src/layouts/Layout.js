import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const Layout = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: SIZES.padding,
  },
});

export default Layout;
