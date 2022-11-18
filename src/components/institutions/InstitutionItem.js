import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../../constants";
import { RectButton } from "../common/Button";
import { TitleItem, IconLabelItem } from "../common/SubInfo";
import {
  INSTITUTION_DETAIL_SCREEN,
  INSTITUTION_FORM_SCREEN,
} from "../../constants/routes/names";
import { ModalOptions } from "../common/MyModals";
import { MaterialIcons } from "@expo/vector-icons";

const InstitutionItem = ({ institution, navigation, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dateUpdate = new Date(institution.updatedAt).toLocaleDateString(
    "es-ES"
  );
  const dateTime = new Date(institution.updatedAt).toLocaleTimeString("es-ES");
  const date = `Ultima modificación: ${dateUpdate} ${dateTime}`;

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
              subtitle={institution.location}
              titleSize={SIZES.large}
              subtitleSize={SIZES.small}
            />
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => setIsModalOpen(true)}
              style={styles.iconContainer}
            >
              <MaterialIcons name="more-vert" size={27} color="black" />
            </TouchableOpacity>
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

      <ModalOptions
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Opciones Institucion"
        titleEdit={"Editar Institucion"}
        titleDelete={"Eliminar Institucion"}
        description="¿Que desea hacer?"
        onPressDelete={() => handleDelete(institution.id)}
        onPressEdit={() => handleEdit()}
      />
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
    borderTopRightRadius: SIZES.font,
    resizeMode: "cover",
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: SIZES.extralarge,
    backgroundColor: COLORS.white,
    alignSelf: "center",
    ...SHADOWS.light,
  },
  itemContainerInfo: {
    width: "100%",
    padding: SIZES.font,
  },
  infortmationContainer: {
    flexDirection: "row",
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
  dateText: {
    color: COLORS.textGray,
    fontSize: SIZES.small - 1,
    fontFamily: FONTS.InterRegular,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: SIZES.base,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InstitutionItem;
