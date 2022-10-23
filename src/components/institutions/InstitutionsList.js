import React, { useState, useEffect } from "react";
import { FlatList, Alert } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import InstitutionItem from "./InstitutionItem";
import HomeHeader from "../common/HomeHeader";
import Loading from "../common/Loading";
import NotFound from "../common/NotFound";

import { getInstitutions, deleteInstitution } from "../../services/institution";

const InstitutionsList = ({ navigation }) => {
  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const isFocused = useIsFocused();

  const loadInstitutions = async () => {
    try {
      const dataApi = await getInstitutions();
      setInstitutions(dataApi.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleDelete = async (id) => {
    Alert.alert(
      "Eliminar Institución",
      "¿Estás seguro de eliminar esta institución?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: async () => {
            try {
              await deleteInstitution(id);
              await loadInstitutions();
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    loadInstitutions();
  }, [isFocused]);

  const renderItem = ({ item }) => {
    return (
      <InstitutionItem
        institution={item}
        navigation={navigation}
        handleDelete={handleDelete}
      />
    );
  };

  if (error) {
    return <NotFound />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={institutions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={true}
      onRefresh={loadInstitutions}
      refreshing={false}
      ListHeaderComponent={<HomeHeader />}
      style={{ width: "100%" }}
    />
  );
};

export default InstitutionsList;
