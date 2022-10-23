import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const LayoutContainer = ({ children }) => {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default LayoutContainer;
