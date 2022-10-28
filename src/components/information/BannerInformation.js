import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../../constants";

const BannerInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.conteinerInfo}>
        <Text style={styles.title}>Area de informacion general!</Text>
        <Text style={styles.text}>
          Conoce mas acerca del estudio de carga de fuego
        </Text>
      </View>

      <View style={styles.containerImage}>
        <Image source={assets.Information} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 125,
    marginVertical: SIZES.padding * 2,
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
    width: 125,
    height: 125,
    alignSelf: "center",
  },
});

export default BannerInformation;
