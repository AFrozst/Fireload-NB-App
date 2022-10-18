import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import MaterliaItem from "./MaterliaItem";
import Loading from "../common/Loading";
import { SIZES, FONTS } from "../../constants";
import { useIsFocused } from "@react-navigation/native";

import { getFireSector } from "../../services/fireSector";
import { deleteMaterial } from "../../services/material";

const MaterialsList = ({ sectorId, institutionId }) => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  const loadData = async () => {
    try {
      const { data } = await getFireSector(institutionId, sectorId);
      setMaterials(data.materials);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Eliminar Material",
      "Estas seguro de eliminar este material?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              await deleteMaterial(institutionId, sectorId, id);
              await loadData();
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => {
    return <MaterliaItem material={item} handleDelete={handleDelete} />;
  };

  useEffect(() => {
    loadData();
    console.log("====================Use Effect: List====================");
  }, [isFocused]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={materials}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: SIZES.extralarge * 3 }}
      ListHeaderComponent={() => (
        <View style={{ paddingTop: SIZES.font }}>
          <Text
            style={{ fontSize: SIZES.font, fontFamily: FONTS.InterSemiBold }}
          >
            Materiales Combustibles
          </Text>
        </View>
      )}
    />
  );
};

export default MaterialsList;
