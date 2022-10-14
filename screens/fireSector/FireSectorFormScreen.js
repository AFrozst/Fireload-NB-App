import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Layout } from "../../layouts";
import { BannerImage, RectButton, Input } from "../../components";
import { COLORS, SIZES, FONTS, assets } from "../../constants";

const FireSectorFormScreen = ({ navigation, route }) => {
  const [fireSector, setFireSector] = useState({
    name: "",
    area: "",
    description: "",
    observations: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChanges = (name, value) => {
    setFireSector({ ...fireSector, [name]: value });
  };

  const handleSummit = () => {
    try {
      if (!isEditing) {
        console.log("Guardando");
        console.log(fireSector);
      } else {
        console.log("Editando");
        console.log(fireSector);
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params) {
      setIsEditing(true);
      const { fireSector } = route.params;
      const name = fireSector.name;
      //const description = fireSector.description;
      setFireSector({ name });
      navigation.setOptions({ headerTitle: "Editar el Sector" });
    }
  }, []);

  return (
    <Layout>
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
