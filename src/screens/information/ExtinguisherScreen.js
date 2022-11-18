import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Layout } from "../../layouts";
import { FocusedStatusBar, FireExtinguisherCard } from "../../components";
import {
  COLORS,
  FONTS,
  SIZES,
  fireExtinguishersInformation,
} from "../../constants";

const ExtinguisherScreen = () => {
  const [fireExtinguishers, setFireExtinguishers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadFireExtinguishers = async () => {
    try {
      setLoading(true);
      setFireExtinguishers(fireExtinguishersInformation.fireExtinguisherTypes);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFireExtinguishers();
  }, []);

  const renderItem = ({ item }) => (
    <FireExtinguisherCard FireExtinguisher={item} />
  );

  const headerItem = () => {
    return (
      <>
        <Text style={styles.title}>Agentes extintores</Text>
        <View style={styles.message}>
          <Text style={styles.messageText}>
            En esta sección conocerás las especificaciones de los diferentes
            tipos de agentes extintores portátiles contra incendios que se
            utilizan en los centros de trabajo y viviendas particulares
          </Text>
        </View>
      </>
    );
  };

  return (
    <Layout>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.quaternary} />
        ) : (
          <FlatList
            data={fireExtinguishers}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={headerItem}
          />
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    textAlign: "center",
    marginTop: SIZES.padding,
  },
  message: {
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
    padding: SIZES.padding,
    backgroundColor: COLORS.quaternary,
    borderRadius: SIZES.base,
  },
  messageText: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.font - 1,
    color: COLORS.black,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default ExtinguisherScreen;
