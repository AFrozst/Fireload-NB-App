import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FocusedStatusBar } from "../../components";
import { LayoutScroll } from "../../layouts";
import {
  assets,
  COLORS,
  SIZES,
  FONTS,
  weightedFireloadData,
} from "../../constants";

const FireloadScreen = () => {
  const [data, setData] = useState({});

  const renderItemFormule = (item, index) => {
    return (
      <View style={styles.itemFormule} key={`itemFormule-${index}`}>
        <View style={styles.itemFormuleHeader}>
          <Text style={styles.itemFormuleHeaderSymbol}>{item.symbol}</Text>
        </View>
        <View style={styles.itemFormuleBody}>
          <Text style={styles.itemFormuleBodyText}>{item.description}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setData(weightedFireloadData);
  }, []);

  return (
    <LayoutScroll>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={assets.ilustrationFireloadInformation}
            style={styles.image}
          />
          <Text style={styles.textAbsolute}>
            Ilustración representativa de una carga de fuego
          </Text>
        </View>

        <View style={{ padding: 5 }}>
          <Text style={[styles.textNormal, { fontWeight: "bold" }]}>
            "{data?.shortDefinition}"
          </Text>
          <Text style={styles.textNormal}>{data?.description}</Text>

          {data?.patron && (
            <View style={styles.containerInfoMessage}>
              <Text style={styles.textMessage}>{data.patron}</Text>
            </View>
          )}

          <Text style={styles.textNormal}>{data?.definitionNB58005}</Text>
        </View>

        <View style={{ padding: 5 }}>
          <View style={styles.containerImageFormule}>
            <Image
              source={assets.formuleInformation}
              style={styles.imageFormule}
            />
            <Text style={[styles.textAbsolute, { paddingVertical: 3 }]}>
              Fórmula de la carga de fuego ponderada
            </Text>
          </View>
          <Text style={styles.textNormal}>Donde: </Text>

          {data?.formule?.map((item, index) => renderItemFormule(item, index))}
        </View>
      </View>
    </LayoutScroll>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C292C",
    borderRadius: SIZES.padding * 2,
    width: "100%",
    height: 270,
    marginBottom: SIZES.padding,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
  containerInfoMessage: {
    padding: SIZES.padding,
    backgroundColor: COLORS.quaternary,
    borderRadius: 10,
    marginVertical: 5,
  },
  textMessage: {
    fontFamily: FONTS.InterRegular,
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: "bold",
  },
  textNormal: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.font,
    color: COLORS.black,
    textAlign: "justify",
    marginVertical: 5,
  },
  containerImageFormule: {
    marginVertical: SIZES.padding,
    backgroundColor: "#2C292C",
    borderRadius: SIZES.padding * 2,
    width: "100%",
    height: 125,
  },
  imageFormule: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding * 2,
  },
  itemFormule: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: COLORS.tertiary,
  },
  itemFormuleHeader: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.base,
  },
  itemFormuleHeaderSymbol: {
    color: COLORS.white,
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.font,
  },
  itemFormuleBody: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  itemFormuleBodyText: {
    color: COLORS.black,
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.font,
    fontStyle: "italic",
    textAlign: "justify",
  },
});

export default FireloadScreen;
