import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IconLabelItem } from "../common/SubInfo";
import { COLORS, SIZES, FONTS, assets } from "../../constants";
import {
  FIRE_SECTOR_DETAIL_SCREEN,
  FIRE_SECTOR_FORM_SCREEN,
} from "../../constants/routes/names";
import { ModalOptions } from "../common/MyModals";
import { MaterialIcons } from "@expo/vector-icons";

const FireSectorItem = ({
  idInstitution,
  sector,
  navigation,
  handleDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePress = () => {
    navigation.navigate(FIRE_SECTOR_DETAIL_SCREEN, { sector, idInstitution });
  };
  const handleEdit = () => {
    navigation.navigate(FIRE_SECTOR_FORM_SCREEN, { idInstitution, sector });
  };

  return (
    <TouchableOpacity
      style={{
        marginHorizontal: SIZES.padding,
      }}
      onPress={handlePress}
    >
      <View style={styles.container}>
        <Image
          source={assets.place}
          resizeMode="contain"
          style={styles.imageIcon}
        />
        <View style={styles.informationContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{sector.name} </Text>
            {sector.location && (
              <Text style={styles.locationText}> ({sector.location})</Text>
            )}
          </View>

          <Text style={styles.date}>Area: {sector.area} m2</Text>
          <Text style={styles.date}>Materiales: {sector.numberMaterials}</Text>
          <Text style={styles.date}>Ra: {sector.Ra}</Text>
        </View>

        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            padding: 6, 
            borderRadius: 3,
          }}
        >
          <IconLabelItem
            icon="🔥"
            label={
              <Text style={{
                fontSize: SIZES.small,
              }}>
                {sector.fireload.toFixed(2).replace(".", ",")} Mcal/m2{" "}
              </Text>
            }
          />
        </View>

        <View style={styles.containerOptions}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsModalOpen(true)}
          >
            <MaterialIcons name="more-vert" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <ModalOptions
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title="Opciones de sector de incendio"
          titleEdit={"Editar sector de incendio"}
          titleDelete={"Eliminar sector de incendio"}
          description="¿Que desea hacer?"
          onPressDelete={() => handleDelete(sector.id)}
          onPressEdit={() => handleEdit()}
        />
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>{sector.intrinsicLevel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base,
    borderRadius: 5,
    backgroundColor: COLORS.tertiary,
  },
  imageIcon: {
    width: 48,
    height: 48,
  },
  informationContainer: {
    flex: 1,
    marginLeft: SIZES.base,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  locationText: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.small,
    color: COLORS.primary,
    fontStyle: "italic",
  },
  date: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.small - 2,
    color: COLORS.textGray,
    marginTop: 3,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.base,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.base - 2,
  },
  buttonText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  levelContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: COLORS.quaternary,
    marginRight: SIZES.base,
    marginTop: SIZES.base,
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 5,
  },
  containerOptions: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  levelText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small - 3,
    fontStyle: "italic",
    color: COLORS.primary,
  },
});

export default FireSectorItem;
