import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { LayoutScroll, Layout } from "../../layouts";
import {
  FocusedStatusBar,
  NotFound,
  HeaderFireSector,
  MaterialsList,
  AddButton,
} from "../../components";

import { assets, SIZES, FONTS, COLORS, SHADOWS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MATERIAL_FORM_SCREEN } from "../../constants/routes/names";

const FireSectorScreen = ({ navigation, route }) => {
  console.log("================= FIRE SECTOR SCREEN ===================");
  const { sector, idInstitution } = route.params;
  const [fireSector, setFireSector] = useState(sector);

  useEffect(() => {
    console.log(
      "====================Use Effect: Fire Sector===================="
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      {fireSector && <HeaderFireSector sector={fireSector} />}
      <Layout>
        <MaterialsList
          sectorId={fireSector ? fireSector.id : null}
          institutionId={idInstitution}
        />
      </Layout>

      <AddButton
        handlePress={() => navigation.navigate(MATERIAL_FORM_SCREEN, {
          sectorId: fireSector ? fireSector.id : null,
          institutionId: idInstitution,
          })}
        bottom={20}
        right={20}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  addButton: {
    left: 20,
    bottom: 20,
  },
  buttonAdd: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 20,
    right: 20,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
    marginTop: -5,
  },
});

export default FireSectorScreen;
