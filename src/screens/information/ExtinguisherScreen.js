import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { FocusedStatusBar, NotFound } from "../../components";
import { assets, COLORS } from "../../constants";

const ExtinguisherScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <NotFound
        title="Screen para Agentes Extintores"
        subtitle="Trabajando..."
        image={assets.notfound}
      />
    </SafeAreaView>
  );
};

export default ExtinguisherScreen;
