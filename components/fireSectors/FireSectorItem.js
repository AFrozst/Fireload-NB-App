import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IconLabelItem } from "../common/SubInfo";
import { COLORS, SIZES, FONTS, assets } from "../../constants";
import {
  FIRE_SECTOR_DETAIL_SCREEN,
  FIRE_SECTOR_FORM_SCREEN,
} from "../../constants/routes/names";

const FireSectorItem = ({
  idInstitution,
  sector,
  navigation,
  handleDelete,
}) => {
  const handlePress = () => {
    //navigation.navigate("Fire Sector Screen", { sector });
    navigation.navigate(FIRE_SECTOR_DETAIL_SCREEN, { sector, idInstitution });
  };
  const handleEdit = () => {
    navigation.navigate(FIRE_SECTOR_FORM_SCREEN, { idInstitution, sector });
  };

  return (
    <View style={styles.container}>
      <Image
        source={assets.place}
        resizeMode="contain"
        style={styles.imageIcon}
      />
      <View style={styles.informationContainer}>
        <Text style={styles.title}>{sector.name}</Text>
        <Text style={styles.date}>{sector.updatedAt}</Text>
        <Text style={styles.date}>Area: {sector.area} m2</Text>
      </View>
      <IconLabelItem icon="🔥" label={sector.totalFireload} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDelete(sector.id)}
      >
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
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
    paddingHorizontal: SIZES.base * 2,
  },
  imageIcon: {
    width: 48,
    height: 48,
  },
  informationContainer: {
    flex: 1,
    marginLeft: SIZES.base,
  },
  title: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  date: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.small - 2,
    color: COLORS.textGray,
    marginTop: 3,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base / 2,
  },
  buttonText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
});

export default FireSectorItem;
