import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FocusedStatusBar,
  BannerInformation,
  HeaderInformation,
} from "../../components";
import { LayoutScroll } from "../../layouts";
import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../../constants";

const InformationScreen = ({ navigation }) => {
  return (
    <LayoutScroll>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <HeaderInformation title={"Informacion Geneal"} />

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
        }}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>
              Bienvenido al area de informacion de la aplicacion
            </Text>
          </View>
          <BannerInformation />
        </View>
      </View>
    </LayoutScroll>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.padding * 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: SIZES.large + 2,
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
    textAlign: "center",
  },
  text: {
    fontSize: SIZES.medium - 3,
    fontFamily: FONTS.InterRegular,
    color: COLORS.textGray,
    textAlign: "center",
  },
});

export default InformationScreen;
