import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CombustibleItem = ({ combustible }) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={[styles.text, styles.textTitle]}>Madera</Text>
        <View style={styles.containerSecundary}>
          <Text style={styles.text}>Poder Calorifico: </Text>
          <Text style={styles.text}>4,000</Text>
          <Text style={styles.text}> kcal/kg</Text>
        </View>
        <View style={styles.containerSecundary}>
          <Text style={styles.text}>Peso: </Text>
          <Text style={styles.text}>55</Text>
          <Text style={styles.text}> kg</Text>
        </View>
      </View>
      <View style={styles.containerFireloadData}>
        <View style={styles.containerFireloadNumber}>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "white" }}>
            Total:{" "}
          </Text>
          <MaterialCommunityIcons name="fire" size={25} color="white" />
          <Text style={[styles.text, styles.textNumberFireload]}>220,000</Text>
          <Text style={[styles.text, styles.textNumberFireload]}> kcal</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#021D34",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  containerSecundary: {
    marginLeft: 10,
    flexDirection: "row",
  },
  containerFireloadData: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerFireloadNumber: {
    backgroundColor: "#C53101",
    flexDirection: "row",
    padding: 5,
    borderRadius: 10,
  },
  textNumberFireload: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default CombustibleItem;
