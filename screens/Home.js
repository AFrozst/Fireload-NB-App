import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import {
  FocusedStatusBar,
  HomeHeader,
  NotFound,
} from "../components";
import { COLORS } from "../constants";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <HomeHeader />
      <NotFound />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    color: COLORS.black,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  buttom: {
    backgroundColor: "#021D34",
    padding: 10,
    marginTop: 20,
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  subtitleText: {
    fontSize: 15,
    textAlign: "center",
    color: COLORS.white,
  },
});

export default Home;
