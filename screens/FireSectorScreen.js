import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { LayoutScreen } from "../layouts";
import CombustibleItem from "../components/others/CombustibleItem";

const FireSectorScreen = ({ navigation, route }) => {
  const [fireSector, setFireSector] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [combustibles, setCombustibles] = useState([
    { id: 1, name: "combustibles", value: "true" },
    { id: 2, name: "combustibles", value: "false" },
  ]);

  const loadFireSector = () => {
    //const { data } = route.params;
    //setFireSector(data);
    setIsLoading(false);
    //navigation.setOptions({ headerTitle: data.name });
  };

  useEffect(() => {
    loadFireSector();
  }, []);

  const renderItem = ({ item }) => {
    return <CombustibleItem combustible={item} />;
  };

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text style={styles.textBold}>Ocupacion:</Text>
        <Text style={styles.textSecundary}>
          Descripcion de la Institucion A ubicado en la ciudad A, y es un
          fabrica para elaborar el producto A
        </Text>
        <Text style={styles.textBold}>Observaciones:</Text>
        <Text style={styles.textSecundary}>
          Descripcion de la Institucion A ubicado en la ciudad A, y es un
          fabrica para elaborar el producto A
        </Text>
        <View style={styles.headerRow}>
          <Text style={styles.textBold}>Area: </Text>
          <Text style={styles.textBold}>500</Text>
          <Text style={styles.textBold}> m2</Text>
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.textBold}>Materiales o combustibles: </Text>
          <Text style={styles.textBold}>5</Text>
        </View>
      </View>
      <LayoutScreen>
        <FlatList
          style={{ width: "100%" }}
          data={combustibles}
          renderItem={renderItem}
        />
      </LayoutScreen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  itemHeader: {
    backgroundColor: "#153F59",
    padding: 15,
  },
  headerRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  textBold: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 16,
  },
  textSecundary: {
    color: "#E2F1F0",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default FireSectorScreen;
