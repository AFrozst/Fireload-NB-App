import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Layout } from "../../layouts";
import {
  FocusedStatusBar,
  MaterialsList,
  AddButton,
} from "../../components";

import { COLORS } from "../../constants";
import { MATERIAL_FORM_SCREEN } from "../../constants/routes/names";

const FireSectorScreen = ({ navigation, route }) => {
  const { sector, idInstitution } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      <Layout
        styleContainer={{
          paddingHorizontal: 0,
        }}
      >
        <MaterialsList
          sectorId={sector ? sector.id : null}
          institutionId={idInstitution}
        />
      </Layout>

      <AddButton
        handlePress={() =>
          navigation.navigate(MATERIAL_FORM_SCREEN, {
            sectorId: sector ? sector.id : null,
            institutionId: idInstitution,
          })
        }
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
