import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import InstitutionCard from "./InstitutionCard";
import { InstitutionsData } from "../../../constants";

const InstLista = () => {
  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadInstitutions = () => {
    setInstitutions(InstitutionsData);
  };

  const renderItem = ({ item }) => {
    return <InstitutionCard institution={item} />;
  };

  useEffect(() => {
    loadInstitutions();
  }, []);

  return (
    <FlatList
      style={{ width: "100%" }}
      data={institutions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default InstLista;
