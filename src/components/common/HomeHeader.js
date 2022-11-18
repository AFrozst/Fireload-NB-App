import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeHeader = () => {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    const user = await AsyncStorage.getItem("@user");
    setUser(JSON.parse(user));
  };

  useEffect(() => {
    loadUser();
  }, []);

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
          Hola, {user?.name} {user?.lastName} 👋
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
