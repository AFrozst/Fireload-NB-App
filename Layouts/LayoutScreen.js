import React from "react";
import { View, StyleSheet } from "react-native";
import { FocusedStatusBar } from "../components";
import { COLORS } from "../constants";

const LayoutScreen = ({ children }) => {
  return (
    <View style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 0,
  },
});

export default LayoutScreen;
