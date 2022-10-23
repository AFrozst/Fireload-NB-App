import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { SETTINGS } from "../../constants/routes/names";
import { COLORS, FONTS, assets } from "../../constants";
import { LayoutContainer } from "../../layouts";
import logoutUser from "../../context/actions/auth/logoutUser";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SideMenu = ({ navigation, authDispatch }) => {
  const logout = () => {
    navigation.toggleDrawer();
    Alert.alert("Cerrar Sesion", "¿Estas seguro que quieres cerrar sesion?", [
      {
        text: "Cancelar",
        onPress: () => {},
      },
      {
        text: "Confirmar",
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: (
        <MaterialCommunityIcons name="cog" size={17} color={COLORS.black} />
      ),
      name: "Configuracion",
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="logout-variant"
          size={17}
          color={COLORS.black}
        />
      ),
      name: "Cerrar Sesion",
      onPress: logout,
    },
  ];

  return (
    <SafeAreaView>
      <LayoutContainer>
        <Image
          source={assets.logo}
          height={70}
          width={70}
          style={styles.logoImage}
        />

        <View style={styles.menuItemsContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <View>{item.icon}</View>
              <Text style={styles.menuItemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </LayoutContainer>
    </SafeAreaView>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    marginTop: 50,
    alignSelf: "center",
  },
  menuItemsContainer: {
    paddingHorizontal: 30,
    justifyContent: "flex-start",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 17,
    paddingVertical: 7,
    paddingLeft: 20,
  },
});
