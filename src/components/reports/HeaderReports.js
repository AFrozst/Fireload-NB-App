import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES } from "../../constants";

const HeaderReports = () => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>
        Bienvenido al generador de reportes de Fireload NB
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.large + 2,
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
    textAlign: "center",
  },
});

export default HeaderReports;
