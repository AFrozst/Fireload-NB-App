import { View, StyleSheet, StatusBar } from "react-native";
import { CircleButton } from "../common/Button";
import { COLORS, assets } from "../../constants";
import React from "react";

const DetailHeader = ({ institution, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerBackground} />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 200,
  },
  headerBackground: {
    resizeMode: "cover",
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "100%",
  },
});

export default DetailHeader;
