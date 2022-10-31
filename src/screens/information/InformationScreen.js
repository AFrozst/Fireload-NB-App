import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  FocusedStatusBar,
  BannerInformation,
  HeaderInformation,
  ButtonInformation,
} from "../../components";
import { LayoutScroll } from "../../layouts";
import { COLORS, SIZES, FONTS } from "../../constants";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  FIRELAOD_INFORMATION_SCREEN,
  FIRES_INFORMATION_SCREEN,
  EXTINGUISHERS_INFORMATION_SCREEN,
  MATERIALS_INFORMATION_SCREEN,
} from "../../constants/routes/names";

const handleNavigation = (navigation, route) => {
  navigation.navigate(route);
};

const InformationScreen = ({ navigation }) => {
  return (
    <LayoutScroll>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <HeaderInformation title={"Informacion General"} />

      <View style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: COLORS.primary,
        zIndex: -100,
      }}/>

      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Bienvenido al area de informacion de la aplicacion
          </Text>
        </View>

        <BannerInformation />

        <View style={styles.containerContent}>
          <Text style={styles.titleContent}>Tabla de contenido</Text>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: SIZES.padding,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ButtonInformation
                label={"Calculo de Fuego"}
                backgroundColor={COLORS.primary}
                colorLabel={COLORS.white}
                icon={
                  <FontAwesome5
                    name="gripfire"
                    size={24}
                    color={COLORS.white}
                  />
                }
                descirption={
                  "¿Qué es el cálculo de carga de fuego? Según la Normativa Boliviana 58005"
                }
                onPress={() =>
                  handleNavigation(navigation, FIRELAOD_INFORMATION_SCREEN)
                }
              />
              <ButtonInformation
                label={"Clases de Fuego"}
                backgroundColor={COLORS.tertiary}
                colorLabel={COLORS.primary}
                icon={
                  <Ionicons
                    name="bonfire-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                }
                descirption={
                  "Conoce las diferentes clases de fuego según la Normativa Boliviana 58002"
                }
                onPress={() =>
                  handleNavigation(navigation, FIRES_INFORMATION_SCREEN)
                }
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ButtonInformation
                label={"Agentes Extintores"}
                backgroundColor={COLORS.tertiary}
                colorLabel={COLORS.primary}
                icon={
                  <FontAwesome
                    name="fire-extinguisher"
                    size={24}
                    color={COLORS.primary}
                  />
                }
                descirption={
                  "Conoce los diferentes agentes extintores y sus características"
                }
                onPress={() =>
                  handleNavigation(navigation, EXTINGUISHERS_INFORMATION_SCREEN)
                }
              />
              <ButtonInformation
                label={"Materiales Combustibles"}
                backgroundColor={COLORS.tertiary}
                colorLabel={COLORS.primary}
                icon={
                  <MaterialCommunityIcons
                    name="pine-tree-fire"
                    size={24}
                    color={COLORS.primary}
                  />
                }
                descirption={
                  "Conoce los diferentes materiales combustibles y valores segun la Normativa Boliviana 58005"
                }
                onPress={() =>
                  handleNavigation(navigation, MATERIALS_INFORMATION_SCREEN)
                }
              />
            </View>
          </View>
        </View>
      </View>
    </LayoutScroll>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: SIZES.padding * 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: SIZES.large + 2,
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
    textAlign: "center",
  },
  text: {
    fontSize: SIZES.medium - 3,
    fontFamily: FONTS.InterRegular,
    color: COLORS.textGray,
    textAlign: "center",
  },
  containerContent: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  titleContent: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
  },
});

export default InformationScreen;
