import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

// Screens
import Home from "../screens/Home";
import InformationScreen from "../screens/information/InformationScreen";
import ReportsScreen from "../screens/reports/ReportsScreen";
import InstitutionsScreen from "../screens/institutions/InstitutionsScreen";

// Stacks
import InstitutionsStackScreen from "./Stacks/InstitutionsStack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLORS.quaternary,
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
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
        name="Institutions"
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
        name="Information"
        component={InformationScreen}
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
        name="Reports"
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
