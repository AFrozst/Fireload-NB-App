import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { assets, SIZES, FONTS } from "../../constants";

const NotFound = ({
  title = "¡Hubo un error al cargar los datos!",
  subtitle = "Intente de nuevo",
  image = assets.notfound,
  onPress,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Reintentar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: SIZES.extralarge - 2,
    fontFamily: FONTS.InterSemiBold,
    textAlign: "center",
  },
  subtitle: {
    fontSize: SIZES.large,
    fontFamily: FONTS.InterRegular,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: SIZES.medium,
    fontFamily: FONTS.InterSemiBold,
  },
});

export default NotFound;
