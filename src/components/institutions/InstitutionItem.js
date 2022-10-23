import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../../constants";
import { RectButton } from "../common/Button";
import { TitleItem, IconLabelItem } from "../common/SubInfo";
import {
  INSTITUTION_DETAIL_SCREEN,
  INSTITUTION_FORM_SCREEN,
} from "../../constants/routes/names";

const InstitutionItem = ({ institution, navigation, handleDelete }) => {
  const handlePress = () => {
    navigation.navigate(INSTITUTION_DETAIL_SCREEN, {
      institution: institution,
    });
  };

  const handleEdit = () => {
    navigation.navigate(INSTITUTION_FORM_SCREEN, {
      institution: institution,
    });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.bannerContainer}>
        <View style={styles.imageContainer} />
      </View>

      <View style={styles.itemContainerInfo}>
        <View style={styles.infortmationContainer}>
          <Image
            source={assets.building}
            style={styles.logoImage}
            resizeMode="cover"
          />

          <View style={styles.info}>
            <TitleItem
              title={institution.fullName}
              subtitle={institution.createdAt}
              titleSize={SIZES.large}
              subtitleSize={SIZES.small}
            />
          </View>
        </View>

        <View style={styles.containerOptions}>
          <IconLabelItem
            label={institution.numberFireSectors}
            icon="Sectores de Incendio:"
          />
          <RectButton
            label="Inspeccionar"
            minWidth={100}
            fontSize={SIZES.base}
            color={COLORS.quaternary}
            handlePress={handlePress}
          />
          <RectButton
            label="Editar"
            minWidth={100}
            fontSize={SIZES.base}
            color="#F2C94C"
            handlePress={handleEdit}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(institution.id)}
      >
        <Text style={{ color: "#fff" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.font,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  bannerContainer: {
    width: "100%",
    height: 15,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: SIZES.font,
    resizeMode: "cover",
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: SIZES.extralarge,
    backgroundColor: COLORS.white,
    ...SHADOWS.light,
  },
  itemContainerInfo: {
    width: "100%",
    padding: SIZES.font,
  },
  infortmationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flex: 1,
    marginLeft: SIZES.base,
  },
  containerOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.font,
  },
});

export default InstitutionItem;
