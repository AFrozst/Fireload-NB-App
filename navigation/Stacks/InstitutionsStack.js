import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import {
  INSTITUTION_LIST,
  INSTITUTION_DETAIL_SCREEN,
  FIRE_SECTOR_SCREEN,
  FIRE_SECTOR_DETAIL_SCREEN,
  INSTITUTION_FORM_SCREEN,
  FIRE_SECTOR_FORM_SCREEN,
  MATERIAL_FORM_SCREEN,
} from "../../constants/routes/names";

//Others
import InstitutionScreen from "../../screens/InstitutionScreen";
import InstitutionDetailScreen from "../../screens/InstitutionDetailScreen";
import FireSectorScreen from "../../screens/FireSectorScreen";

//True Screens
import InstitutionsScreen from "../../screens/institutions/InstitutionsScreen";
import DetailScreen from "../../screens/institutions/DetailScreen";
import InstitutionFormScreen from "../../screens/institutions/InstitutionFormScreen";
import FireSectorFormScreen from "../../screens/fireSector/FireSectorFormScreen";
import DetailFireSectorScreen from "../../screens/fireSector/DetailFireSectorScreen";
import MaterialFormScreen from "../../screens/materials/MaterialFormScreen";

const StackInstitution = createNativeStackNavigator();

const InstitutionsStackScreen = () => {
  return (
    <StackInstitution.Navigator>
      <StackInstitution.Screen
        name={INSTITUTION_LIST}
        component={InstitutionsScreen}
        //component={InstitutionScreen}
        options={({ navigation }) => ({
          title: "Tus Estudios",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate(INSTITUTION_FORM_SCREEN)}
            >
              <Ionicons
                name="add-circle-sharp"
                size={30}
                color={COLORS.white}
              />
            </TouchableOpacity>
          ),
        })}
      />

      <StackInstitution.Screen
        name={INSTITUTION_DETAIL_SCREEN}
        component={DetailScreen}
        //component={InstitutionDetailScreen}
        options={{
          title: "Detalle de la Institución",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerTintColor: COLORS.white,
        }}
      />

      <StackInstitution.Screen
        name={FIRE_SECTOR_SCREEN}
        component={FireSectorScreen}
        options={{
          title: "Detalle Sector de Fuego",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerTintColor: COLORS.white,
        }}
      />

      <StackInstitution.Screen
        name={FIRE_SECTOR_DETAIL_SCREEN}
        component={DetailFireSectorScreen}
        options={{
          title: "Detalle Sector de Fuego",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerTintColor: COLORS.white,
        }}
      />

      <StackInstitution.Screen
        name={INSTITUTION_FORM_SCREEN}
        component={InstitutionFormScreen}
        options={{
          title: "Registrar nueva Institución",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerTintColor: COLORS.white,
        }}
      />

      <StackInstitution.Screen
        name={FIRE_SECTOR_FORM_SCREEN}
        component={FireSectorFormScreen}
        options={{
          title: "Nuevo Sector de Fuego",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerTintColor: COLORS.white,
        }}
      />

      <StackInstitution.Screen
        name={MATERIAL_FORM_SCREEN}
        component={MaterialFormScreen}
        options={{
          title: "Añadir Material",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerTintColor: COLORS.white,
        }}
      />
    </StackInstitution.Navigator>
  );
};

export default InstitutionsStackScreen;
