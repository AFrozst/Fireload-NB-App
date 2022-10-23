import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { FocusedStatusBar, InstitutionsList } from "../../components";
import { SIZES, FONTS, COLORS } from "../../constants";

const InstitutionsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, zIndex: 0 }}>
          <InstitutionsList navigation={navigation} />
        </View>

        <View style={styles.background}>
          <View style={{ height: 150, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.secondary }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.InterSemiBold,
  },
});

export default InstitutionsScreen;
