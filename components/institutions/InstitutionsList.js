import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import InstitutionItem from "./InstitutionItem";
import HomeHeader from "../common/HomeHeader";
import Loading from "../common/Loading";
import NotFound from "../common/NotFound";
import { InstitutionsData } from "../../constants";

const InstitutionsList = ({ navigation }) => {
  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadInstitutions = async () => {
    try {
      setInstitutions(InstitutionsData);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    loadInstitutions();
  }, []);

  const renderItem = ({ item }) => {
    return <InstitutionItem institution={item} navigation={navigation} />;
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
