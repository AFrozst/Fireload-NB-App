import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FocusedStatusBar } from "../components";
import { SIZES, FONTS, COLORS } from "../constants";

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Fireload NB App</Text>
        <Text style={styles.subtitle}>Versión 1.0.0</Text>
        <Text style={styles.text}>
          Fireload NB es una aplicación móvil que permite la gestión de estudios
          de carga de fuego ponderada, en la nube.
        </Text>

        <View style={styles.referencesContainer}>
          <Text style={styles.referencesTitle}>Referencias</Text>
          <Text style={styles.referencesDescription}>
            La aplicación móvil fue elaborada base los lineamientos de las
            siguientes referencias:
          </Text>
          <View style={styles.referenceData}>
            <View style={styles.referenceIcon}>
              <MaterialCommunityIcons
                name="book-open-page-variant"
                size={30}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.referenceTextContainer}>
              <Text style={styles.referenceText}>
                Instituto Boliviano de Normalización y Calidad. (2007). NB 58005
                Criterios para determinar la resistencia al fuego de materiales
                constitutivos de los edificios y de la carga de fuego ponderada
                (Qp) en entrepisos
              </Text>
            </View>
          </View>

          <View style={styles.referenceData}>
            <View style={styles.referenceIcon}>
              <MaterialCommunityIcons
                name="book-open-page-variant"
                size={30}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.referenceTextContainer}>
              <Text style={styles.referenceText}>
                Instituto Boliviano de Normalización y Calidad. (2010) NB 58002
                Extintores contra Incendios Disposiciones generales.
              </Text>
            </View>
          </View>
          <View style={styles.lineSeparator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: SIZES.padding * 2,
  },
  title: {
    fontFamily: FONTS.InterBold,
    color: COLORS.white,
    fontSize: SIZES.extralarge,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: FONTS.InterBold,
    color: COLORS.white,
    fontSize: SIZES.large,
    textAlign: "center",
    fontStyle: "italic",
  },
  text: {
    fontFamily: FONTS.InterRegular,
    color: COLORS.white,
    fontSize: SIZES.medium - 1,
    textAlign: "center",
    marginTop: SIZES.padding,
  },
  referencesContainer: {
    marginTop: SIZES.padding * 2,
  },
  referencesTitle: {
    fontFamily: FONTS.InterBold,
    color: COLORS.white,
    fontSize: SIZES.large,
    textAlign: "left",
  },
  referencesDescription: {
    fontFamily: FONTS.InterRegular,
    color: COLORS.white,
    fontSize: SIZES.small + 1,
    marginTop: SIZES.padding,
  },
  referenceData: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding,
  },
  referenceTextContainer: {
    flex: 1,
    marginLeft: SIZES.padding,
  },
  referenceText: {
    fontFamily: FONTS.InterRegular,
    color: COLORS.white,
    fontSize: SIZES.font,
    fontWeight: "bold",
    textAlign: "justify",
    marginLeft: SIZES.padding,
  },
  referenceIcon: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    borderRadius: 50,
  },
  lineSeparator: {
    height: 1,
    backgroundColor: COLORS.white,
    marginTop: SIZES.padding * 2,
  },
});

export default AboutScreen;
