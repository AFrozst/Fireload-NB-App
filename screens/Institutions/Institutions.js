import { View, Text, Button } from "react-native";
import React from "react";

const Institutions = ({navigation}) => {
  return (
    <View>
      <Text>Institutions Frozst</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Institution Details Screen")}
      />
    </View>
  );
};

export default Institutions;
