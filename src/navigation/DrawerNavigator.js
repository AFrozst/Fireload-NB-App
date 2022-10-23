import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME } from "../constants/routes/names";
import SideMenu from "./Drawer/SideMenu";
import { GlobalContext } from "../context/Provider";
import Tabs from "./Tabs";

const Drawer = createDrawerNavigator();

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const { authDispatch } = React.useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }
    >
      <Drawer.Screen name={HOME} component={Tabs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
