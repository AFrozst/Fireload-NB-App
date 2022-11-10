import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import MaterliaItem from "./MaterliaItem";
import Loading from "../common/Loading";
import { SIZES, FONTS } from "../../constants";
import { useIsFocused } from "@react-navigation/native";

import { getFireSector } from "../../services/fireSector";
import { deleteMaterial } from "../../services/material";
import HeaderFireSector from "../materials/Header";
import NotFound from "../common/NotFound";

const MaterialsList = ({ sectorId, institutionId }) => {
  const [sector, setSector] = useState({});
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const isFocused = useIsFocused();

  const loadData = async () => {
    try {
      setError(false);
      const { data } = await getFireSector(institutionId, sectorId);
      setSector(data);
      setMaterials(data.materials);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
      alert("Hubo un error de conexion, intente de nuevo");
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
  }, [isFocused]);

  if (error) {
    return (
      <NotFound
        onPress={() => {
          setIsLoading(true);
          loadData();
        }}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={materials}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onRefresh={loadData}
      refreshing={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: SIZES.extralarge * 3,
      }}
      ListHeaderComponent={() => (
        <>
          <HeaderFireSector sector={sector} />
          <View
            style={{ paddingTop: SIZES.font, paddingHorizontal: SIZES.padding }}
          >
            {materials.length === 0 ? (
              <Text
                style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.InterSemiBold,
                }}
              >
                No hay materiales registrados
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.InterSemiBold,
                }}
              >
                Materiales Combustibles
              </Text>
            )}
          </View>
        </>
      )}
    />
  );
};

export default MaterialsList;
