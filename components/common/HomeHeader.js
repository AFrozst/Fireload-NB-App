import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.InterRegular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hola, Allen 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.InterBold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Aquí puedes ver tus instituciones
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
});
