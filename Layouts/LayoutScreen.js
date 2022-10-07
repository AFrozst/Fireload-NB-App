import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../constants";

const LayoutScreen = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#021D34" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
    alignItems: "center",
  },
});

export default LayoutScreen;
