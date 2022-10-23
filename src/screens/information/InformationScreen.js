import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FocusedStatusBar, NotFound } from "../../components";
import { assets } from "../../constants";

const InformationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" />
      <NotFound 
        title="Screen para Informaciones"
        subtitle="Trabajando en ello..."
        image={assets.notfound}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default InformationScreen;
