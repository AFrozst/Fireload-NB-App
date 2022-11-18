import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const Layout = ({ children, styleContainer }) => {
  return (
    <SafeAreaView style={[styles.container, styleContainer]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.secondary,
  },
});

export default Layout;
