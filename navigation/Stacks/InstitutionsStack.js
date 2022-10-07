import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
            <Ionicons
              name="add-circle-outline"
              size={30}
              color={COLORS.white}
              style={{ marginRight: 10 }}
              onPress={() => console.log("Add Institution")}
            />
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
    </StackInstitution.Navigator>
  );
};

export default InstitutionsStackScreen;
