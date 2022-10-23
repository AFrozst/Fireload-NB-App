import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Layout } from "../../layouts";
import { BannerImage, RectButton, Input } from "../../components";
import { COLORS, SIZES, FONTS, assets } from "../../constants";

import { saveInstitution, updateInstitution } from "../../services/institution";

const InstitutionFormScreen = ({ navigation, route }) => {
  const [institution, setInstitution] = useState({
    fullName: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChanges = (name, value) => {
    setInstitution({ ...institution, [name]: value });
  };

  const handleSummit = async () => {
    try {
      if (!isEditing) {
        await saveInstitution(institution);
      } else {
        const id = route.params.institution.id;
        await updateInstitution(id, institution);
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params) {
      setIsEditing(true);
      const { institution } = route.params;
      const name = institution.fullName;
      setInstitution({ fullName: name });
      navigation.setOptions({ headerTitle: "Editar la Institución" });
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
          image={assets.newInstitution}
          title="Regitro de Institución"
          subtitle="Llena los campos para registrar una nueva institución"
        />

        <View style={styles.containerForm}>
          <Input
            label="Nombre de la Institución"
            placeholder="Nombre Completo"
            value={institution.fullName}
            onChangeText={(text) => handleChanges("fullName", text)}
            //error = {"This field is required"}
            underlineColorAndroid="transparent"
          />

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
    marginTop: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
  },
  input: {
    width: "90%",
    height: 40,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#10ac84",
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.padding,
    fontFamily: FONTS.InterRegular,
    fontSize: 14,
    color: COLORS.black,
  },
});

export default InstitutionFormScreen;
