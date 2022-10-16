import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import { FocusedStatusBar, NotFound } from "../../components";

import { assets, SIZES, FONTS, COLORS } from "../../constants";

const FireSectorScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <NotFound
        title="Screen para Sector de Incendios"
        subtitle="Trabajando..."
        image={assets.notfound}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FireSectorScreen;
