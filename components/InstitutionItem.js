import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Image } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../constants";
import { RectButton } from "./Button";
import { TitleItem, IconLabelItem } from "./SubInfo";

const InstitutionItem = ({ institution }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <View
        style={{
          width: "100%",
          height: 50,
        }}
      >
        <View style={styles.imageContainer} />
      </View>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <View style={styles.infoContainer}>
          <Image
            source={institution.image}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.info}>
            <TitleItem
              title={institution.name}
              subtitle={institution.location}
              titleSize={SIZES.large}
              subtitleSize={SIZES.small}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: SIZES.font,
          }}
        >
          <IconLabelItem
            label={institution.tuition}
            icon="Sectores de Incendio:"
          />
          <RectButton
            label="Inspeccionar"
            minWidth={120}
            fontSize={SIZES.small}
            color={COLORS.quaternary}
            handlePress={() =>
              navigation.navigate("Institution Details Screen", { institution })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    resizeMode: "cover",
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
});

export default InstitutionItem;
