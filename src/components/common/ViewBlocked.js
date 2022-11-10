import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

export const ViewBlocked = () => {
  return <View style={styles.containerBlocked} />;
};

export const ViewBlockedPressable = ({ enableBackdropDismiss, onDismiss }) => {
  return (
    <Pressable
      style={styles.containerBlocked}
      onPress={() => {
        if (enableBackdropDismiss) {
          onDismiss();
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  containerBlocked: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
