import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Layout } from "../../layouts";
import {
  BannerImage,
  RectButton,
  Input,
  FocusedStatusBar,
} from "../../components";
import { COLORS, SIZES, assets } from "../../constants";

const {
  saveFireSector,
  updateFireSector,
} = require("../../services/fireSector");

const FireSectorFormScreen = ({ navigation, route }) => {
  const [idInstitution, setIdInstitution] = useState("");
  const [fireSector, setFireSector] = useState({
    name: "",
    area: 0,
    description: "",
    observations: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChanges = (name, value) => {
    setFireSector({ ...fireSector, [name]: value });
  };

  const handleSummit = async () => {
    try {
      if (!isEditing) {
        await saveFireSector(idInstitution, fireSector);
      } else {
        const id = route.params.sector.id;
        await updateFireSector(idInstitution, id, fireSector);
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.idInstitution && route.params.sector) {
      setIsEditing(true);
      const { idInstitution, sector } = route.params;
      setIdInstitution(idInstitution);
      const setorUpdate = {
        name: sector.name,
        area: sector.area.toString(),
        description: sector.description,
        observations: sector.observations,
      };
      setFireSector(setorUpdate);
      navigation.setOptions({ headerTitle: "Editar el Sector" });
    } else if (route.params && route.params.idInstitution) {
      const id = route.params.idInstitution;
      setIdInstitution(id);
    }
  }, []);

  return (
    <Layout>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        justifyContent="center"
      >
        <BannerImage
          image={assets.newFireSector}
          title="Registro de Sector de Fuego"
          subtitle="Llena los campos para registrar un nuevo sector"
        />
        <View style={styles.containerForm}>
          <Input
            label="Nombre del Sector"
            placeholder="Nombre del Sector"
            value={fireSector.name}
            onChangeText={(value) => handleChanges("name", value)}
          />

          <Input
            label="Area"
            placeholder="0 m2"
            value={fireSector.area}
            onChangeText={(value) => handleChanges("area", value)}
            keyboardType="numeric"
          />

          <Input
            label="Descripción"
            placeholder="Descripción del Sector"
            value={fireSector.description}
            onChangeText={(value) => handleChanges("description", value)}
          />

          <Input
            label="Observaciones"
            placeholder="Observaciones"
            value={fireSector.observations}
            onChangeText={(value) => handleChanges("observations", value)}
          />
        </View>
        <View style={styles.buttonContainer}>
          {!isEditing ? (
            <RectButton
              label="Guardar"
              fontSize={SIZES.font}
              color={COLORS.quaternary}
              handlePress={handleSummit}
              width="100%"
              borderRadius={SIZES.base}
            />
          ) : (
            <RectButton
              label="Actualizar"
              fontSize={SIZES.font}
              color={COLORS.quaternary}
              handlePress={handleSummit}
              width="100%"
              borderRadius={SIZES.base}
            />
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerForm: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
});

export default FireSectorFormScreen;
