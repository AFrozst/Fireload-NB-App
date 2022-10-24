import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
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
    location: "",
    area: 0,
    environmentDescription: "",
    activity: "",
    typeFurniture: "",
    occupation: "",
    observations: "",
    Ra: 1.5,
    intrinsicLevel: "BAJO (1)",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChanges = (name, value) => {
    setFireSector({ ...fireSector, [name]: value });
  };

  const handleSummit = async () => {
    try {
      if (!isEditing) {
        if (
          fireSector.name === "" ||
          fireSector.area === 0 ||
          fireSector.Ra === ""
        ) {
          alert("Hay campos obligatorios vacios. Por favor, verifique");
        } else {
          await saveFireSector(idInstitution, fireSector);
          alert("Sector creado con exito");
          navigation.goBack();
        }
      } else {
        if (
          fireSector.name === "" ||
          fireSector.area === 0 ||
          fireSector.Ra === ""
        ) {
          alert("Hay campos obligatorios vacios. Por favor, verifique");
        } else {
          const id = route.params.sector.id;
          await updateFireSector(idInstitution, id, fireSector);
          alert("Sector actualizado con exito");
          navigation.goBack();
        }
      }
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
        location: sector.location,
        environmentDescription: sector.environmentDescription,
        activity: sector.activity,
        typeFurniture: sector.typeFurniture,
        occupation: sector.occupation,
        observations: sector.observations,
        Ra: sector.Ra.toString(),
        intrinsicLevel: sector.intrinsicLevel,
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

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
            required
          />

          <Input
            label="Ubiación"
            placeholder="Piso, planta, etc."
            value={fireSector.location}
            onChangeText={(value) => handleChanges("location", value)}
          />

          <Input
            label="Area"
            placeholder="0 m2"
            value={fireSector.area}
            onChangeText={(value) => handleChanges("area", value)}
            keyboardType="numeric"
            required
          />

          <Input
            label="Descripción del Ambiente"
            placeholder="Descripción del Ambiente"
            value={fireSector.environmentDescription}
            onChangeText={(value) =>
              handleChanges("environmentDescription", value)
            }
          />

          <Input
            label="Actividad"
            placeholder="Que se hace en el sector"
            value={fireSector.activity}
            onChangeText={(value) => handleChanges("activity", value)}
          />

          <Input
            label="Tipo de Mobiliaria"
            placeholder="Tipo de Mobiliaria"
            value={fireSector.typeFurniture}
            onChangeText={(value) => handleChanges("typeFurniture", value)}
          />

          <Input
            label="Ocupación"
            placeholder="Ocupación"
            value={fireSector.occupation}
            onChangeText={(value) => handleChanges("occupation", value)}
          />

          <Input
            label="Observaciones"
            placeholder="Observaciones"
            value={fireSector.observations}
            onChangeText={(value) => handleChanges("observations", value)}
          />

          <Input
            label="Ra"
            placeholder="Riesgo de Activación"
            value={fireSector.Ra.toString()}
            onChangeText={(value) => handleChanges("Ra", value)}
            keyboardType="numeric"
            required
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
  logoImage: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginTop: 50,
  },
});

export default FireSectorFormScreen;
