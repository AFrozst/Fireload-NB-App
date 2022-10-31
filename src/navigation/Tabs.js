import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import {
  HOME_FIRELOAD,
  INSTITUTIONS_SCREEN,
  INFORMATION_SCREEN,
  REPORTS_SCREEN,
} from "../constants/routes/names";

// Screens
import Home from "../screens/Home";
import InformationScreen from "../screens/information/InformationScreen";
import ReportsScreen from "../screens/reports/ReportsScreen";
import InstitutionsScreen from "../screens/institutions/InstitutionsScreen";

// Stacks
import InstitutionsStackScreen from "./Stacks/InstitutionsStack";
import InformactionStackScreen from "./Stacks/InformactionStack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_FIRELOAD}
      screenOptions={{
        tabBarActiveTintColor: COLORS.quaternary,
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Tab.Screen
        name={HOME_FIRELOAD}
        component={Home}
        options={{
          title: "Fireoad NB",
          headerTintColor: COLORS.white,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={INSTITUTIONS_SCREEN}
        component={InstitutionsStackScreen}
        options={{
          tabBarLabel: "Estudios",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="office-building-marker"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={INFORMATION_SCREEN}
        component={InformactionStackScreen}
        options={{
          tabBarLabel: "Información",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={REPORTS_SCREEN}
        component={ReportsScreen}
        options={{
          tabBarLabel: "Reportes",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-document-attach" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
