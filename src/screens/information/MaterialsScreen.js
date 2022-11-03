import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  FocusedStatusBar,
  Input,
  MaterialCardPureComponent,
} from "../../components";
import { Layout } from "../../layouts";
import { Ionicons } from "@expo/vector-icons";
import { assets, COLORS, SIZES, FONTS } from "../../constants";
import { getAndSearchMaterials } from "../../services/material";

const MaterialsScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [materialsList, setMaterialsList] = useState([]);
  const [totalMaterials, setTotalMaterials] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMaterials = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await getAndSearchMaterials(searchTerm);
      setMaterialsList(response.data);
      setTotalMaterials(response.data.length);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMaterials();
  }, []);

  const handleSearch = async () => {
    loadMaterials(searchTerm);
  };

  const renderItem = ({ item }) => {
    return <MaterialCardPureComponent material={item} />;
  };

  return (
    <Layout>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Input
            label="Buscar"
            placeholder="Ej. Madera, Carton, etc."
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => handleSearch()}
          >
            <Ionicons name="search" size={15} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {totalMaterials > 0 && (
          <Text style={styles.totalResulText}>
            Hay un total de {totalMaterials} materiales
          </Text>
        )}

        {totalMaterials === 0 && searchTerm !== "" && (
          <Text style={styles.totalResulText}>
            No se encontraron resultados
          </Text>
        )}

        {loading ? (
          <ActivityIndicator size="large" color={COLORS.quaternary} />
        ) : (
          <FlatList
            data={materialsList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            style={{
              width: "100%",
            }}
          />
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  totalResulText: {
    color: COLORS.primary,
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small,
    textAlign: "right",
    width: "100%",
    padding: SIZES.padding - 5,
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default MaterialsScreen;
