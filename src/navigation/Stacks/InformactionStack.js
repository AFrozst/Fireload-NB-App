import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { COLORS } from "../../constants";
import {
  INFORMATION_MENU,
  EXTINGUISHERS_INFORMATION_SCREEN,
  FIRELAOD_INFORMATION_SCREEN,
  FIRES_INFORMATION_SCREEN,
  MATERIALS_INFORMATION_SCREEN,
} from "../../constants/routes/names";

// TODO: Screens
import InformationScreen from "../../screens/information/InformationScreen";
import FireloadScreen from "../../screens/information/FireloadScreen";
import FiresScreen from "../../screens/information/FiresScreen";
import ExtinguisherScreen from "../../screens/information/ExtinguisherScreen";
import MaterialsScreen from "../../screens/information/MaterialsScreen";

const StackInformation = createStackNavigator();

const InformactionStack = () => {
  return (
    <StackInformation.Navigator
      //initialRouteName={INFORMATION_MENU}
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <StackInformation.Screen
        name={INFORMATION_MENU}
        component={InformationScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackInformation.Screen
        name={FIRELAOD_INFORMATION_SCREEN}
        component={FireloadScreen}
        options={{
          title: "Carga de fuego",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <StackInformation.Screen
        name={FIRES_INFORMATION_SCREEN}
        component={FiresScreen}
        options={{
          title: "Tipo de fuegos",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <StackInformation.Screen
        name={EXTINGUISHERS_INFORMATION_SCREEN}
        component={ExtinguisherScreen}
        options={{
          title: "Agentes extintores",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <StackInformation.Screen
        name={MATERIALS_INFORMATION_SCREEN}
        component={MaterialsScreen}
        options={{
          title: "Materiales Combustibles",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </StackInformation.Navigator>
  );
};

export default InformactionStack;
