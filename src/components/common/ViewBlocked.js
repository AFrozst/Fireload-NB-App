import React from "react";
import { View, StyleSheet, useWindowDimensions, Pressable } from "react-native";

export const ViewBlocked = () => {
  const { width, height } = useWindowDimensions();
  return <View style={styles.containerBlocked} />;
};

export const ViewBlockedPressable = ({ enableBackdropDismiss, onDismiss }) => {
  const { width, height } = useWindowDimensions();
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
