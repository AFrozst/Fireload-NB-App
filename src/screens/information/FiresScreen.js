import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { FocusedStatusBar } from "../../components";
import { Layout } from "../../layouts";
import { assets, COLORS, SIZES, FONTS, fires } from "../../constants";

const FiresScreen = () => {
  const [firesList, setFiresList] = useState([]);

  useEffect(() => {
    setFiresList(fires.firesTypes);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemHeaderImage}>
          <Image
            source={{
              uri: item.uriImage
                ? item.uriImage
                : "https://cdn.iconscout.com/icon/free/png-512/no-image-1771002-1505134.png",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemBodyTitle}>{item.name}</Text>
          <Text style={styles.itemBodyDescription}>{item.description}</Text>
          {item.examples && (
            <Text style={styles.itemBodyExample}>Ejemplos: ({item.examples})</Text>
          )}
        </View>
      </View>
    );
  };

  if (firesList.length === 0) {
    return <Text>Cargando...</Text>;
  }

  return (
    <Layout>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <View style={styles.container}>
        <FlatList
          data={firesList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    margin: SIZES.padding,
    padding: SIZES.padding,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.font,
  },
  itemHeaderImage: {
    width: 85,
    height: 85,
    backgroundColor: "#2C292C",
    borderRadius: SIZES.padding * 2,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: SIZES.padding - 5,
  },
  image: {
    width: 90,
    height: 90,
    renzieMode: "cover",
  },
  itemBody: {
    flex: 1,
    flexDirection: "column",
    padding: SIZES.padding,
  },
  itemBodyTitle: {
    color: COLORS.primary,
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.large,
    textAlign: "center",
  },
  itemBodyDescription: {
    color: COLORS.black,
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.small,
    textAlign: "justify",
    fontWeight: "700",
  },
  itemBodyExample: {
    color: COLORS.black,
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.small,
    textAlign: "justify",
    fontStyle: "italic",
    marginTop: 5,
    paddingHorizontal: SIZES.padding,
  },
});
export default FiresScreen;
