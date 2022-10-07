import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { assets, SIZES, FONTS } from "../../constants";

const NotFound = ({
  title = "Página no encontrada",
  subtitle = "Trabajando...",
  image = assets.notfound,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: SIZES.extralarge,
    fontFamily: FONTS.InterSemiBold,
  },
  subtitle: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.InterRegular,
  },
});

export default NotFound;
