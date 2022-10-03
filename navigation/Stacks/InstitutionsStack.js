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
          headerShown: false,
        })}
      />
      <StackInstitution.Screen
        name="Institution Details Screen"
        component={Detail}
        options={{ title: "Detail", headerShown: false }}
      />
    </StackInstitution.Navigator>
  );
};

export default InstitutionsStackScreen;
