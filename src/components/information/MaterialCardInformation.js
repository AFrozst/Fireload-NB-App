import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";
import React from "react";

const MaterialCardInformation = ({ material }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeaderImage}>
        <Image
          source={{
            uri: "https://st4.depositphotos.com/5971520/21322/v/450/depositphotos_213228020-stock-illustration-the-pile-of-hot-wooden.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.itemBody}>
        <View style={styles.itemBodyTitle}>
          <Text style={styles.itemBodyName}>{material.name}</Text>
        </View>
        <View style={styles.itemBodyValues}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.itemBodyValue}>Poder calorífico: </Text>
            <Text style={styles.valueText}>
              {material.heatValue.toFixed(1).replace(".", ",")} Mcal/kg
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.itemBodyValue}>Poder calorífico: </Text>
            <Text style={styles.valueText}>
              {material.heatValue2.toFixed(1).replace(".", ",")} MJ/kg
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.tertiary,
    borderRadius: 5,
    margin: SIZES.padding - 5,
    padding: SIZES.padding,
  },
  itemHeaderImage: {
    width: 50,
    height: 50,
    backgroundColor: "#2C292C",
    borderRadius: SIZES.padding,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginRight: SIZES.padding,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.padding,
  },
  itemBody: {
    flex: 1,
    flexDirection: "column",
    padding: SIZES.padding,
  },
  itemBodyTitle: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    padding: SIZES.padding / 2,
    marginBottom: SIZES.padding / 2,
  },
  itemBodyName: {
    color: COLORS.white,
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.font,
    textAlign: "center",
  },
  itemBodyValues: {
    flex: 1,
    flexDirection: "column",
  },
  itemBodyValue: {
    color: COLORS.black,
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small,
    textAlign: "left",
  },
  valueText: {
    color: COLORS.quaternary,
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.small,
    textAlign: "left",
  },
});

export default MaterialCardInformation;
