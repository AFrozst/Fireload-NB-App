import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Alert, Text } from "react-native";
import { Layout } from "../../layouts";
import {
  BannerImage,
  RectButton,
  Input,
  FocusedStatusBar,
} from "../../components";
import SelectList from "react-native-dropdown-select-list";
import { COLORS, SIZES, assets, FONTS } from "../../constants";

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
    Ra: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState("");

  const raData = [
    { key: 1, value: "1" },
    { key: 2, value: "1.5" },
    { key: 3, value: "3" },
  ];

  const getLevel = (ra) => {
    switch (ra) {
      case 1:
        return "BAJO";
      case 1.5:
        return "MEDIO";
      case 3:
        return "ALTO";
      default:
        return "";
    }
  };

  const handleRaChanges = () => {
    const ravalue = raData.find((item) => item.key === selected);
    setFireSector({ ...fireSector, Ra: ravalue.value });
  };

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
          Alert.alert("Campos vacios", "Por favor llene los campos con *");
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
          Alert.alert("Sector actualizado", "Sector actualizado con exito");
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
          title="Registro de Sector de Incendio"
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

          <View style={styles.InputSelect}>
            <Text style={styles.label}>Ra. Riesgo de Activacion *</Text>
            {isEditing && (
              <Text
                style={[
                  styles.label,
                  {
                    marginLeft: 15,
                  },
                ]}
              >
                Ra Actual: {fireSector.Ra}
              </Text>
            )}
            {fireSector.Ra !== "" && (
              <Text
                style={[
                  styles.labelSecondary,
                  {
                    marginLeft: 15,
                    marginBottom: 10,
                  },
                ]}
              >
                Nivel de Riesgo: ({getLevel(+fireSector.Ra)})
              </Text>
            )}

            <SelectList
              setSelected={setSelected}
              data={raData}
              onSelect={handleRaChanges}
              placeholder="Selecciona el riesgo de activación"
              search={false}
            />
          </View>
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
  InputSelect: {
    flex: 1,
    marginTop: SIZES.padding,
  },
  label: {
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
    color: COLORS.primary,
  },
  labelSecondary: {
    fontSize: SIZES.small,
    fontFamily: FONTS.InterRegular,
    color: COLORS.textGray,
  },
});

export default FireSectorFormScreen;
