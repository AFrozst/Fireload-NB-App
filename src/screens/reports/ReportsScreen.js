import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import { FocusedStatusBar, NotFound } from "../../components";
import { assets, SIZES, FONTS } from "../../constants";

const Reports = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <NotFound
        title="Screen para Reportes"
        subtitle="Trabajando..."
        image={assets.notfound}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Reports;
