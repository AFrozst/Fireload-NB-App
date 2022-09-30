import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

import Institutions from "../../screens/Institutions/Institutions";
import Detail from "../../screens/Institutions/Detail";

const StackInstitution = createStackNavigator();

const InstitutionsStackScreen = () => {
  return (
    <StackInstitution.Navigator>
      <StackInstitution.Screen
        name="Institutions Screen"
        component={Institutions}
        options={({ navigation }) => ({
          title: "Instituciones",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="plus"
              size={24}
              color={COLORS.white}
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate("Institution Details Screen")}
            />
          ),
        })}
      />
      <StackInstitution.Screen
        name="Institution Details Screen"
        component={Detail}
        options={{ title: "Detail" }}
      />
    </StackInstitution.Navigator>
  );
};

export default InstitutionsStackScreen;
