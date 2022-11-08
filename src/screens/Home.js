import React from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  FocusedStatusBar,
  HomeHeader,
  BannerImage,
  RectButtonArrow,
} from "../components";
import { COLORS, assets } from "../constants";
import {
  INSTITUTIONS_SCREEN,
  INFORMATION_SCREEN,
  REPORTS_SCREEN,
} from "../constants/routes/names";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <BannerImage
          image={assets.invoice}
          title="Bienvenido a Firelaod NB App"
          subtitle="Aplicación base la Normativa Bolviana 58005 y 58002"
        />
        <View style={styles.containerButtons}>
          <RectButtonArrow
            title="Tus Estudios"
            minWidth={100}
            fontSize={16}
            handlePress={() => navigation.navigate(INSTITUTIONS_SCREEN)}
          />
          <RectButtonArrow
            title="Informacion General"
            handlePress={() => navigation.navigate(INFORMATION_SCREEN)}
          />
          <RectButtonArrow
            title="Elaborar Reporte"
            handlePress={() => navigation.navigate(REPORTS_SCREEN)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default Home;
