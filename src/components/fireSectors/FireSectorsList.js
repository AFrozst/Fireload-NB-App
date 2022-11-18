import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import DetailHeader from "../institutions/DetailHeader";
import DetailsDesc from "../institutions/DetailsDesc";
import FireSectorItem from "./FireSectorItem";
import Loading from "../common/Loading";
import NotFound from "../common/NotFound";
import { COLORS, FONTS, SIZES } from "../../constants";
import { useIsFocused } from "@react-navigation/native";

import { getInstitution } from "../../services/institution";
import { deleteFireSector } from "../../services/fireSector";

const FireSectorsList = ({ idInstitution, navigation }) => {
  const [institution, setInstitution] = useState({});
  const [sectors, setSectors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const isFocused = useIsFocused();

  const loadData = async () => {
    try {
      setError(false);
      const dataApi = await getInstitution(idInstitution);
      setInstitution(dataApi.data);
      const sectorsApi = dataApi.data.firesectors;
      setSectors(sectorsApi);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
      alert("Hubo un error de conexion, intente de nuevo");
    }
  };

  const handleDelete = async (id) => {
    Alert.alert("Eliminar Sector", "¿Estás seguro de eliminar este sector?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Eliminar",
        onPress: async () => {
          try {
            await deleteFireSector(idInstitution, id);
            await loadData();
          } catch (error) {
            console.log(error);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <FireSectorItem
        idInstitution={idInstitution}
        sector={item}
        navigation={navigation}
        handleDelete={handleDelete}
      />
    );
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
      data={sectors}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      onRefresh={loadData}
      refreshing={false}
      contentContainerStyle={{
        paddingBottom: SIZES.extralarge * 3,
      }}
      ListHeaderComponent={() => (
        <React.Fragment>
          <DetailHeader institution={institution} navigation={navigation} />
          <View style={{ backgroundColor: COLORS.primary }}>
            <View
              style={{
                padding: SIZES.font,
                borderTopLeftRadius: SIZES.extralarge,
                borderTopRightRadius: SIZES.extralarge,
                backgroundColor: COLORS.white,
              }}
            >
              <DetailsDesc data={institution} />
              {sectors.length > 0 ? (
                <View
                  style={{
                    marginTop: SIZES.font + 5,
                  }}
                >
                  <Text style={styles.title}>Sectores</Text>
                </View>
              ) : (
                <View style={{ paddingTop: 15 }}>
                  <Text style={[styles.title, { textAlign: "center" }]}>
                    No hay sectores de incendio registrados en esta institución
                  </Text>
                  <Text style={styles.subText}>Añade uno para comenzar</Text>
                </View>
              )}
            </View>
          </View>
        </React.Fragment>
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
  },
  subText: {
    color: COLORS.textGray,
    fontSize: SIZES.small,
    fontFamily: FONTS.InterRegular,
    textAlign: "center",
  },
});

export default FireSectorsList;
