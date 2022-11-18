import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FocusedStatusBar } from "../../components";
import { LayoutScroll } from "../../layouts";
import { assets, COLORS, SIZES, FONTS, metodlogy } from "../../constants";

const MetodologyScreen = () => {
  const [steps, setSteps] = useState([]);

  const renderItemStep = (item, index) => {
    return (
      <View style={styles.itemStep} key={`itemStep-${index}`}>
        <View style={styles.itemStepHeader}>
          <Text style={styles.itemStepHeaderTitle}>{item.step}</Text>
        </View>

        <View style={styles.itemStepBody}>
          <Text style={styles.itemStepBodyText}>{item.description}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setSteps(metodlogy.steps);
  }, []);

  return (
    <LayoutScroll>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      <View style={styles.container}>
        <Text style={styles.title}>
          ¿Cómo se elabora un estudio de carga de fuego?
        </Text>

        <View style={styles.containerImage}>
          <Image
            source={assets.metodologyInformation}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.textAbsolute}>
            Etapas de un estudio de carga de fuego
          </Text>
        </View>

        <View style={styles.containerSteps}>
          {steps.map((item, index) => renderItemStep(item, index))}
        </View>
      </View>
    </LayoutScroll>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  title: {
    color: COLORS.primary,
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.extralarge,
    textAlign: "center",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.padding,
    backgroundColor: "#2C292C",
    borderRadius: SIZES.padding * 2,
    width: "100%",
    height: 300,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.padding * 2,
  },
  textAbsolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.padding,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderBottomLeftRadius: SIZES.padding * 2,
    borderBottomRightRadius: SIZES.padding * 2,
    color: COLORS.secondary,
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.small,
  },
  containerSteps: {
    padding: SIZES.padding,
  },
  itemStep: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.base,
  },
  itemStepHeader: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: COLORS.quaternary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.small,
  },
  itemStepHeaderTitle: {
    color: COLORS.white,
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.font,
  },
  itemStepBody: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    padding: SIZES.base,
  },
  itemStepBodyText: {
    color: COLORS.white,
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.font,
    textAlign: "justify",
    fontWeight: "bold",
  },
});

export default MetodologyScreen;
