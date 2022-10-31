import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { FocusedStatusBar, NotFound } from "../../components";
import { assets, COLORS } from "../../constants";

const MaterialsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <NotFound
        title="Screen para Materiales"
        subtitle="Trabajando..."
        image={assets.notfound}
      />
    </SafeAreaView>
  );
};

export default MaterialsScreen;
