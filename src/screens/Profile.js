import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FocusedStatusBar } from "../components";
import { SIZES, FONTS, COLORS } from "../constants";
import { getUser } from "../services/user";

const ProfileScreen = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      setLoading(true);
      const response = await getUser();
      if (response.status === 200) {
        setUser(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Error al cargar el usuario");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const getFirstLetter = (name) => {
    return name.charAt(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.containerImage}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{getFirstLetter(user.name)}</Text>
            </View>
            <Text style={styles.nameUser}>
              {user.name + " " + user.lastName}
            </Text>
          </View>

          <View style={styles.separator} />
          <View style={styles.containerInformation}>
            <Text style={styles.titleInformation}>
              {"INFORMACIÓN PERSONAL"}
            </Text>
            <View style={styles.containerData}>
              <Text style={styles.labelData}>{"Nombre"}</Text>
              <Text style={styles.valueData}>{user.name}</Text>
            </View>
            <View style={styles.separatorData} />
            <View style={styles.containerData}>
              <Text style={styles.labelData}>{"Apellido"}</Text>
              <Text style={styles.valueData}>{user.lastName}</Text>
            </View>
            <View style={styles.separatorData} />
            <View style={styles.separatorData} />
            <View style={styles.containerData}>
              <Text style={styles.labelData}>{"Email"}</Text>
              <Text style={styles.valueData}>{user.email}</Text>
            </View>
            <View style={styles.separatorData} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.padding,
    backgroundColor: COLORS.secondary,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: SIZES.padding,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: COLORS.white,
    fontSize: 45,
    fontFamily: FONTS.InterSemiBold,
  },
  nameUser: {
    color: COLORS.primary,
    fontSize: SIZES.large,
    fontFamily: FONTS.InterSemiBold,
  },
  separator: {
    height: 2,
    backgroundColor: COLORS.primary,
  },
  containerInformation: {
    padding: SIZES.padding * 2,
  },
  titleInformation: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
  },
  containerData: {
    marginTop: SIZES.padding,
    flexDirection: "row",
    marginVertical: SIZES.padding - 5,
    paddingVertical: SIZES.padding,
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelData: {
    color: COLORS.textGray,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
  },
  valueData: {
    color: COLORS.black,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
  },
  separatorData: {
    height: 1,
    backgroundColor: COLORS.primary,
    width: "100%",
  },
});

export default ProfileScreen;
