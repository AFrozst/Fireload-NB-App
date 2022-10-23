import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import FireSectorItem from "../components/others/FireSectorItem";
import { Layout } from "../layouts";

const InstitutionDetailScreen = ({ navigation, route }) => {
  const [institution, setInstitution] = useState(null);
  const [fireSectors, setFireSectors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadInstitution = () => {
    const { data } = route.params;
    setInstitution(data);
    setFireSectors(data.sectors);
    setIsLoading(false);
    navigation.setOptions({ headerTitle: data.name });
  };

  useEffect(() => {
    loadInstitution();
  }, []);

  const renderItem = ({ item }) => {
    return <FireSectorItem fireSector={item} />;
  };

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text style={styles.textBold}>Descripcion:</Text>
        <Text style={styles.textSecundary}>
          Descripcion de la Institucion A ubicado en la ciudad A, y es un
          fabrica para elaborar el producto A. {institution.description}
        </Text>
        <View style={styles.headerRow}>
          <Text style={styles.textBold}>Sectores de Incendios: </Text>
          <Text style={styles.textBold}>{institution.numberFireSectors}</Text>
        </View>
      </View>
      
      <Layout>
        <FlatList
          style={{ width: "100%" }}
          data={fireSectors}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Layout>
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

export default InstitutionDetailScreen;
