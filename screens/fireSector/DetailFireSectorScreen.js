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

const FireSectorScreen = ({ navigation, route }) => {
  console.log("================= FIRE SECTOR SCREEN ===================");
  const [fireSector, setFireSector] = useState(null);
  const [materials, setMaterials] = useState([
    {
      id: "M-71",
      name: "Cristal",
      heatValue: 100,
      heatValue2: 10.0,
      Sector_Material: {
        createdAt: "2022-09-22",
        updatedAt: "2022-09-22",
        weight: 80.5,
        totalCalorificValue: 55.5,
      },
    },
    {
      id: "M-72",
      name: "Madera",
      heatValue: 100,
      heatValue2: 10.0,
      Sector_Material: {
        createdAt: "2022-09-22",
        updatedAt: "2022-09-22",
        weight: 80.5,
        totalCalorificValue: 55.5,
      },
    },
    {
      id: "M-73",
      name: "Metal",
      heatValue: 100,
      heatValue2: 10.0,
      Sector_Material: {
        createdAt: "2022-09-22",
        updatedAt: "2022-09-22",
        weight: 80.5,
        totalCalorificValue: 55.5,
      },
    },
    {
      id: "M-74",
      name: "Aceite",
      heatValue: 100,
      heatValue2: 10.0,
      Sector_Material: {
        createdAt: "2022-09-22",
        updatedAt: "2022-09-22",
        weight: 80.5,
        totalCalorificValue: 55.5,
      },
    },
    {
      id: "M-75",
      name: "Papel",
      heatValue: 100,
      heatValue2: 10.0,
      Sector_Material: {
        createdAt: "2022-09-22",
        updatedAt: "2022-09-22",
        weight: 80.5,
        totalCalorificValue: 55.5,
      },
    },
    {
      id: "M-76",
      name: "Plástico",
      heatValue: 100,
      heatValue2: 10.0,
      Sector_Material: {
        createdAt: "2022-09-22",
        updatedAt: "2022-09-22",
        weight: 80.5,
        totalCalorificValue: 55.5,
      },
    },
    {
      id: "M-77",
      name: "Textil",
      heatValue: 100,
      heatValue2: 10.0,
      Sector_Material: {
        createdAt: "2022-09-22",
        updatedAt: "2022-09-22",
        weight: 80.5,
        totalCalorificValue: 55.5,
      },
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (route.params) {
      const { data } = route.params;
      setFireSector(data);
      //setMaterials(data.materials);
      setIsLoading(false);
      navigation.setOptions({ headerTitle: data.name });
      console.log("====================Use Effect: Screen====================");
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      {fireSector && <HeaderFireSector sector={fireSector} />}
      <Layout>
        <MaterialsList combustibles={materials} />
      </Layout>

      <AddButton
        handlePress={() => console.log("Add combustible")}
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
