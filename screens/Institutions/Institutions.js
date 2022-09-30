import React from "react";
import { LayoutScreen } from "../../Layouts";
import { View, Text } from "react-native";
import { InstitutionList } from "../../components";

const Institutions = ({ navigation }) => {
  return (
    <LayoutScreen>
      <InstitutionList />
    </LayoutScreen>
  );
};

export default Institutions;
