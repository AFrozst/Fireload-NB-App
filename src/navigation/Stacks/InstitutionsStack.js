import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import {
  INSTITUTION_LIST,
  INSTITUTION_DETAIL_SCREEN,
  FIRE_SECTOR_DETAIL_SCREEN,
  INSTITUTION_FORM_SCREEN,
  FIRE_SECTOR_FORM_SCREEN,
  MATERIAL_FORM_SCREEN,
} from "../../constants/routes/names";

// TODO: Screens
import InstitutionsScreen from "../../screens/institutions/InstitutionsScreen";
import DetailScreen from "../../screens/institutions/DetailScreen";
import InstitutionFormScreen from "../../screens/institutions/InstitutionFormScreen";
import FireSectorFormScreen from "../../screens/fireSector/FireSectorFormScreen";
import DetailFireSectorScreen from "../../screens/fireSector/DetailFireSectorScreen";
import MaterialFormScreen from "../../screens/materials/MaterialFormScreen";

const StackInstitution = createStackNavigator();

const InstitutionsStackScreen = () => {
  return (
    <StackInstitution.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <StackInstitution.Screen
        name={INSTITUTION_LIST}
        component={InstitutionsScreen}
        options={({ navigation }) => ({
          title: "Tus Estudios",
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
        options={{
          title: "Detalle de la Institución",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      <StackInstitution.Screen
        name={FIRE_SECTOR_DETAIL_SCREEN}
        component={DetailFireSectorScreen}
        options={{
          title: "Detalle Sector de Incendio",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      <StackInstitution.Screen
        name={INSTITUTION_FORM_SCREEN}
        component={InstitutionFormScreen}
        options={{
          title: "Registrar nueva Institución",
          presentation: "modal",
        }}
      />

      <StackInstitution.Screen
        name={FIRE_SECTOR_FORM_SCREEN}
        component={FireSectorFormScreen}
        options={{
          title: "Nuevo Sector de Incendio",
          presentation: "modal",
        }}
      />

      <StackInstitution.Screen
        name={MATERIAL_FORM_SCREEN}
        component={MaterialFormScreen}
        options={{
          title: "Añadir Material",
          presentation: "transparentModal",
        }}
      />
    </StackInstitution.Navigator>
  );
};

export default InstitutionsStackScreen;
