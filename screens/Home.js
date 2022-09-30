import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FocusedStatusBar, HomeHeader, InstitutionCard } from "../components";
import { COLORS, SIZES, InstitutionsData } from "../constants";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Estudio de Carga de Fuego</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Institutions")}
          style={styles.buttom}
        >
          <Text style={styles.subtitleText}>Instituciones</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Information")}
          style={styles.buttom}
        >
          <Text style={styles.subtitleText}>Informacion General</Text>
        </TouchableOpacity>
      </View>
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
