import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";

const LayoutContainer = ({ children, ...props }) => {
  return (
    <ScrollView>
      <View style={[styles.container, props.style]}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default LayoutContainer;
