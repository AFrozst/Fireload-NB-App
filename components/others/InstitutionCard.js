import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { assets } from "../../constants";
import { INSTITUTION_DETAIL_SCREEN } from "../../constants/routes/names";

const InstitutionCard = ({ institution }) => {
  // Para evitar pasar como parametro la varibale nabivgation usaremos useNavigation
  const navigation = useNavigation();

  // Para editar usaremos el mismo form de crear, pero le pasaremos parametros extra como el ID del ITEM
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(INSTITUTION_DETAIL_SCREEN, {
            data: institution,
          })
        }
      >
        <View style={styles.itemContainerInfo}>
          <Image source={assets.building} style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemTextTitle}>{institution.fullName}</Text>
            <Text style={styles.itemText}>
              Sectores de Incendio: {institution.numberFireSectors}
            </Text>
            <Text style={styles.itemText}>
              Fecha de creación: {institution.createdAt}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#021D34",
    paddingRight: 15,
    paddingLeft: 5,
    paddingVertical: 10,
    marginVertical: 8,
    borderRadius: 10,
    // Posicionar cada componente al lado de otro
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContainerInfo: {
    alignItems: "center",
    flexDirection: "row",
  },
  itemInfo: {
    marginLeft: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  itemTextTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  itemText: {
    color: "#ffffff",
    fontSize: 12,
  },
  itemButtonDelete: {
    backgroundColor: "#ee5253",
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default InstitutionCard;
