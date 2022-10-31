import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { FocusedStatusBar, NotFound } from "../../components";
import { assets, COLORS } from "../../constants";

const FireloadScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <NotFound
        title="Screen para Carga de Fuego"
        subtitle="Trabajando..."
        image={assets.notfound}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
});

export default FireloadScreen;
