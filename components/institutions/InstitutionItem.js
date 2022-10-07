import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants";
import { RectButton } from "../common/Button";
import { TitleItem, IconLabelItem } from "../common/SubInfo";

const InstitutionItem = ({ institution, navigation }) => {
  const handlePress = () => {
    navigation.navigate("Institution Detail Screen", { institution: institution });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.bannerContainer}>
        <View style={styles.imageContainer} />
      </View>

      <View style={styles.itemContainerInfo}>
        <View style={styles.infortmationContainer}>
          <Image
            source={institution.image}
            style={styles.logoImage}
            resizeMode="cover"
          />

          <View style={styles.info}>
            <TitleItem
              title={institution.fullName}
              subtitle={institution.location}
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
      </View>
      </View>
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