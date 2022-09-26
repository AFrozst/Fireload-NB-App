import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Home from "../screens/Home";
import Information from "../screens/Information";

// Stacks
import InstitutionsStackScreen from "./Stacks/InstitutionsStack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Institutions"
        component={InstitutionsStackScreen}
        options={{
          tabBarLabel: "Instituciones",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarLabel: "Información",
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
