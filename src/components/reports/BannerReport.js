import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, assets } from "../../constants";

const BannerReport = () => {
  return (
    <View style={styles.container}>
      <View style={styles.conteinerInfo}>
        <Text style={styles.title}>¡Genere un reporte rápido!</Text>
        <Text style={styles.text}>
          Elije un estudio de carga de fuego y presione el botón Generar PDF
        </Text>
      </View>

      <View style={styles.containerImage}>
        <Image
          source={assets.report}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 125,
    marginBottom: SIZES.padding,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    padding: SIZES.padding,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  conteinerInfo: {
    flex: 1,
    padding: SIZES.padding * 2,
    justifyContent: "center",
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: SIZES.padding, // 20
  },
  title: {
    fontSize: SIZES.small + 2,
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
    textAlign: "center",
  },
  text: {
    fontSize: SIZES.base + 3,
    marginTop: 2,
    fontFamily: FONTS.InterRegular,
    color: COLORS.textGray,
    paddingLeft: 5,
    fontStyle: "italic",
  },
  image: {
    width: "100%",
    height: 115,
    alignSelf: "center",
  },
});

export default BannerReport;
