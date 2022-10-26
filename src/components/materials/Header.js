import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants";

const Header = ({ sector }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {sector.name && <Text style={styles.title}>{sector.name}</Text>}
          {sector.location && (
            <Text style={styles.locationText}> ({sector.location})</Text>
          )}
        </View>

        {sector.environmentDescription && (
          <Text style={styles.secundary}>
            Descripcion del ambiente: {sector.environmentDescription}
          </Text>
        )}

        {sector.activity && (
          <Text style={styles.secundary}>Actividad: {sector.activity}</Text>
        )}

        {sector.occupation && (
          <Text style={styles.secundary}>Ocupacion: {sector.occupation}</Text>
        )}

        {sector.typeFurniture && (
          <Text style={styles.secundary}>
            Tipo de mobiliaria: {sector.typeFurniture}
          </Text>
        )}

        {sector.observaciones && (
          <Text style={styles.secundary}>
            Observaciones: {sector.observaciones}
          </Text>
        )}
      </View>

      <View style={styles.headerDataContainer}>
        <Text style={styles.title}>Area o Superficie: {sector.area} m2 </Text>
        <Text style={styles.title}>
          Nivel de intrinseco: {sector.intrinsicLevel}
        </Text>
      </View>

      <View style={styles.extraInfoContainer}>
        <Text style={styles.extraInfoText}>Ra: {sector.Ra} </Text>
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
  locationText: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterRegular,
    fontStyle: "italic",
  },
});

export default Header;
