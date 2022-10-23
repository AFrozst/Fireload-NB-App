import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import DetailHeader from "../institutions/DetailHeader";
import DetailsDesc from "../institutions/DetailsDesc";
import FireSectorItem from "./FireSectorItem";
import Loading from "../common/Loading";
import { COLORS, FONTS, SIZES } from "../../constants";
import { useIsFocused } from "@react-navigation/native";

import { getInstitution } from "../../services/institution";
import { deleteFireSector } from "../../services/fireSector";

const FireSectorsList = ({ data, fireSectors, navigation }) => {
  const [institution, setInstitution] = useState(data);
  const [sectors, setSectors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  const loadData = async () => {
    try {
      const dataApi = await getInstitution(data.id);
      const sectorsApi = dataApi.data.firesectors;
      setSectors(sectorsApi);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
            await deleteFireSector(data.id, id);
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
        idInstitution={data.id}
        sector={item}
        navigation={navigation}
        handleDelete={handleDelete}
      />
    );
  };

  useEffect(() => {
    loadData();
  }, [isFocused]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={sectors}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: SIZES.extralarge * 3,
      }}
      ListHeaderComponent={() => (
        <React.Fragment>
          <DetailHeader institution={institution} navigation={navigation} />
          <View style={{ padding: SIZES.font }}>
            <DetailsDesc data={institution} />
            {sectors.length > 0 && (
              <Text style={styles.title}>Sectores de Incendio</Text>
            )}
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
});

export default FireSectorsList;
