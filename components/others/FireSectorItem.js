import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FireSectorItem = ({ fireSector }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        //onPress={() => console.log(fireSector.id)}
        onPress={() =>
          navigation.navigate("Fire Sector Screen", {
            data: fireSector,
          })
        }
      >
        <View>
          <Text style={[styles.text, styles.textTitle]}>{fireSector.name}</Text>
          <View style={styles.containerSecundary}>
            <Text style={styles.text}>Area: </Text>
            <Text style={styles.text}>{fireSector.area}</Text>
            <Text style={styles.text}> m2</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.containerFireloadData}>
        <MaterialCommunityIcons name="fire" size={30} color="white" />
        <View style={styles.containerFireloadNumber}>
          <Text style={[styles.text, styles.textNumberFireload]}>
            {fireSector.totalFireload}
          </Text>
          <Text style={[styles.text, styles.textNumberFireload]}> kgMT/m2</Text>
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
    backgroundColor: "#557996",
    flexDirection: "row",
    padding: 5,
    borderRadius: 10,
  },
  textNumberFireload: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default FireSectorItem;
