import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants";

const Header = ({ sector }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Descripcion: </Text>
        <Text style={styles.secundary}>{sector.description}</Text>
        <Text style={styles.title}>Observaciones: </Text>
        <Text style={styles.secundary}>{sector.observations}</Text>
      </View>

      <View style={styles.headerDataContainer}>
        <Text style={styles.title}>Area o Superficie: {sector.area} m2 </Text>
        <Text style={styles.title}>Materiales o combustibles: 5</Text>
      </View>

      <View style={styles.extraInfoContainer}>
        <Text style={styles.extraInfoText}>Ra: 1.5 MODERADO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#0F2C3C",
  },
  infoContainer: {
    padding: SIZES.padding,
    //flex: 1,
    //padding: SIZES.padding - 5,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterBold,
  },
  secundary: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: FONTS.InterRegular,
    lineHeight: SIZES.large,
  },
  headerDataContainer: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.padding,
    backgroundColor: "#153F59",
  },
  extraInfoContainer: {
    flexDirection: "row", 
    justifyContent: "flex-end",
    alignItems: "center",
    padding: SIZES.padding - 5,
  },
  extraInfoText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: FONTS.InterLight,
    fontStyle: "italic",
  },
});

export default Header;
