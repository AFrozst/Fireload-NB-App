import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ABOUT, HOME, PROFILE } from "../../constants/routes/names";
import { COLORS, assets, FONTS, SIZES } from "../../constants";
import logoutUser from "../../context/actions/auth/logoutUser";

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

  const MENU = [
    {
      icon: (
        <MaterialCommunityIcons
          name="folder-home-outline"
          size={24}
          color={COLORS.primary}
        />
      ),
      label: "Tus Estudios",
      onPress: () => {
        navigation.navigate(HOME);
      },
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="account-hard-hat"
          size={24}
          color={COLORS.primary}
        />
      ),
      label: "Perfil",
      onPress: () => {
        navigation.navigate(PROFILE);
      },
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="book-information-variant"
          size={24}
          color={COLORS.primary}
        />
      ),
      label: "Acerca de Fireload NB",
      onPress: () => {
        navigation.navigate(ABOUT);
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={assets.logo}
          height={70}
          width={70}
          style={styles.logoImage}
        />
      </View>
      <DrawerContentScrollView>
        <Drawer.Section style={styles.drawerSection}>
          {MENU.map((menu, index) => {
            return (
              <DrawerItem
                key={index}
                label={() => <Text style={styles.labelMenu}>{menu.label}</Text>}
                icon={() => menu.icon}
                onPress={menu.onPress}
              />
            );
          })}
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label={() => <Text style={styles.labelMenu}>Cerrar Sesión</Text>}
          icon={() => (
            <MaterialCommunityIcons
              name="exit-to-app"
              size={24}
              color={COLORS.primary}
            />
          )}
          onPress={logout}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  logoImage: {
    height: 125,
    width: 125,
    marginTop: 20,
    backgroundColor: COLORS.primary,
  },
  header: {
    height: 150,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  labelMenu: {
    textAlign: "left",
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
    fontWeight: "bold",
  },
});
