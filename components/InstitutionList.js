import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import InstitutionItem from "./InstitutionItem";
import HomeHeader from "./HomeHeader";
import { InstitutionsData } from "../constants";

const InstitutionList = () => {
  const [institutions, setInstitutions] = useState(InstitutionsData);

  const loadInstitutions = () => {
    setInstitutions(InstitutionsData);
  };

  const renderItem = ({ item }) => {
    return <InstitutionItem institution={item} />;
  };

  return (
    <FlatList
      data={institutions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={true}
      onRefresh={loadInstitutions}
      refreshing={false}
      ListHeaderComponent={<HomeHeader />}
    />
  );
};

export default InstitutionList;
