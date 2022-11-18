import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { LayoutScroll } from "../../layouts";
import {
  BannerImage,
  RectButton,
  Input,
  FocusedStatusBar,
} from "../../components";
import { COLORS, SIZES, FONTS, assets } from "../../constants";

import SelectList from "react-native-dropdown-select-list";
import { getMaterials, addMaterial } from "../../services/material";

const MaterialFormScreen = ({ navigation, route }) => {
  const [sectorId, setSectorId] = useState(route.params.sectorId);
  const [institutionId, setInstitutionId] = useState(
    route.params.institutionId
  );

  const [selected, setSelected] = useState("");
  const [ciSelected, setCiSelected] = useState("");
  const [data, setData] = useState([]);
  const [materialsAPI, setMaterialsAPI] = useState([]);
  const [material, setMaterial] = useState({
    materialId: 0,
    weight: 0,
    heatValue: 0,
    ciValue: 0,
  });

  const ciData = [
    { key: 1, value: "1" },
    { key: 2, value: "1.2" },
    { key: 3, value: "1.6" },
  ];

  const createSelectList = (data) => {
    const selectList = data.map((item) => {
      return {
        key: item.id,
        value: item.name,
      };
    });
    return selectList;
  };

  const calculateTotalCalorificValue = () => {
    const total = material.weight * material.heatValue;
    return total;
  };

  const handleChanges = (name, value) => {
    setMaterial({ ...material, [name]: value });
  };

  const handleListChanges = () => {
    const materialSelected = materialsAPI.find((item) => item.id === selected);
    setMaterial({
      ...material,
      materialId: materialSelected.id,
      heatValue: materialSelected.heatValue,
    });
  };

  const handleCiChanges = () => {
    const ciValue = ciData.find((item) => item.key === ciSelected);
    setMaterial({ ...material, ciValue: ciValue.value });
  };

  const handleSummit = async () => {
    try {
      const sendObject = {
        materialId: material.materialId,
        weight: +material.weight,
        ci: +material.ciValue,
      };

      if (sendObject.weight === 0 || ciSelected === "" || selected === "") {
        Alert.alert("Error", "No todos los campos estan llenos");
        return;
      } else {
        const { response, status } = await addMaterial(
          institutionId,
          sectorId,
          sendObject
        );
        if (status === 200) {
          Alert.alert("Material registrado con éxito");
          navigation.goBack();
        }

        if (status === 409) {
          alert(response.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadMaterials = async () => {
    try {
      const materials = await getMaterials();
      setMaterialsAPI(materials.data);
      setData(createSelectList(materials.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMaterials();
  }, []);

  return (
    <LayoutScroll>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      <BannerImage
        image={assets.addMaterial}
        title="Agregar Material"
        subtitle="Agrega un material a la lista"
      />

      <View style={styles.container}>
        <View style={styles.InputSelect}>
          <Text style={styles.label}>Material</Text>
          <SelectList
            setSelected={setSelected}
            data={data}
            onSelect={handleListChanges}
            placeholder="Selecciona un material"
            searchPlaceholder="Buscar material"
            maxHeight={150}
          />

          {selected != "" && (
            <View style={styles.containerMaterialInfo}>
              <Text style={styles.labelExtra}>
                {material.heatValue.toFixed(2).replace(".", ",")} Mcal/kg
              </Text>
            </View>
          )}
        </View>

        <Input
          label="Peso"
          placeholder="Peso"
          value={material.weight}
          onChangeText={(value) => {
            handleChanges("weight", value);
          }}
          keyboardType="numeric"
          required
        />

        <View style={styles.InputSelect}>
          <Text style={styles.label}>Ci. Grado de peligrosidad</Text>
          <SelectList
            setSelected={setCiSelected}
            data={ciData}
            onSelect={handleCiChanges}
            placeholder="Selecciona un grado de peligrosidad"
            searchPlaceholder="Buscar el grado de peligrosidad"
          />
        </View>

        <View style={styles.containerTotal}>
          <Text style={styles.textTotal}>Total Calorifico: </Text>
          <Text style={styles.textTotal}>
            {calculateTotalCalorificValue().toFixed(2).replace(".", ",")} Mcal
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <RectButton
            label="Agregar"
            fontSize={SIZES.font}
            color={COLORS.primary}
            handlePress={handleSummit}
            width="80%"
            borderRadius={SIZES.base}
          />
        </View>
      </View>
    </LayoutScroll>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.padding,
  },
  containerTotal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: SIZES.padding,
  },
  textTotal: {
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
    color: COLORS.primary,
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
  labelExtra: {
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
    color: COLORS.textGray,
  },
  containerMaterialInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: SIZES.padding,
    paddingTop: SIZES.padding,
  },
});

export default MaterialFormScreen;
