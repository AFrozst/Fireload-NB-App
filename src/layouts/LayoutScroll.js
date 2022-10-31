import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const LayoutScroll = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor:  COLORS.white,
  },
});

export default LayoutScroll;
