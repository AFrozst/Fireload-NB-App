import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  INSTITUTIONS,
  INSTITUTION_DETAIL,
  CREATE_INSTITUTION,
  SETTINGS,
} from "../constants/routes/names";
import { MaterialCommunityIcons } from "@expo/vector-icons";

///
const { useNavigation } = require("@react-navigation/native");

const HomeStack = createStackNavigator();

const InstitutionScreen = () => {
  const { setOptions, toggleDrawer } = useNavigation();

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}
        >
          <MaterialCommunityIcons
            name="menu"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const InstitutionDetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
};

const CreateInstitutionScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Create Institution Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={INSTITUTIONS}>
      <HomeStack.Screen name={INSTITUTIONS} component={InstitutionScreen} />
      <HomeStack.Screen
        name={INSTITUTION_DETAIL}
        component={InstitutionDetailsScreen}
      />
      <HomeStack.Screen
        name={CREATE_INSTITUTION}
        component={CreateInstitutionScreen}
      />
      <HomeStack.Screen name={SETTINGS} component={SettingsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
