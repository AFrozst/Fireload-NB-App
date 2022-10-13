import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

//Others
import InstitutionScreen from "../../screens/InstitutionScreen";
import InstitutionDetailScreen from "../../screens/InstitutionDetailScreen";
import FireSectorScreen from "../../screens/FireSectorScreen";

//True Screens
import InstitutionsScreen from "../../screens/institutions/InstitutionsScreen";
import DetailScreen from "../../screens/institutions/DetailScreen";
import FireSectorScreen2 from "../../screens/fireSector/FireSectorScreen";
import InstitutionFormScreen from "../../screens/institutions/InstitutionFormScreen";

const StackInstitution = createNativeStackNavigator();

const InstitutionsStackScreen = () => {
  return (
    <StackInstitution.Navigator>
      <StackInstitution.Screen
        name="Institutions Screen"
        component={InstitutionsScreen}
        options={({ navigation }) => ({
          title: "Tus Estudios",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate("Institution Form Screen")}
            >
              <Ionicons name="add-circle-sharp" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
        })}
      />

      <StackInstitution.Screen
        name="Institution Detail Screen"
        component={DetailScreen}
        options={{
          title: "Detalle de la Institución",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerTintColor: COLORS.white,
        }}
      />

      <StackInstitution.Screen
        name="Fire Sector Screen"
        component={FireSectorScreen}
        options={{
          title: "Detalle Sector de Fuego",
          headerStyle: { backgroundColor: "#021D34" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#ffffff",
        }}
      />

      <StackInstitution.Screen
        name="Institution Form Screen"
        component={InstitutionFormScreen}
        options={{
          title: "Registrar nueva Institución",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleStyle: { color: COLORS.white },
          headerTintColor: COLORS.white,
        }}
      />
    </StackInstitution.Navigator>
  );
};

export default InstitutionsStackScreen;
