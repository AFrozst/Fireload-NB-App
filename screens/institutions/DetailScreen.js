import React, { useEffect } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  FocusedStatusBar,
  RectButton,
  FireSectorsList,
} from "../../components";
import { COLORS, SIZES, SHADOWS } from "../../constants";

const DetailScreen = ({ route, navigation }) => {
  const isLoading = true;
  const { institution } = route.params;

  const loadData = () => {
    navigation.setOptions({ headerShown: false });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      <View style={styles.containerAbsolute}>
        <RectButton
          label="Añadir Sector"
          minWidth={170}
          fontSize={SIZES.large}
          color={COLORS.primary}
          handlePress={() => navigation.navigate("Fire Sector Form Screen")}
          {...SHADOWS.dark}
        />
      </View>

      <FireSectorsList
        data={institution}
        //fireSectors={institution.sectors}
        //fireSectors={institution.firesectors}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerAbsolute: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.25)",
    zIndex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
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
});

export default DetailScreen;
