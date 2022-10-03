import React from "react";
import Tabs from "./Tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tabs />
    </NavigationContainer>
  );
};

export default Navigation;
