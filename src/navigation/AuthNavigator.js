import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LOGIN, REGISTER } from "../constants/routes/names";

import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
