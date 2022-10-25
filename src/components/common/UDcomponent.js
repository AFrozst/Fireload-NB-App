import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants";

const UDcomponent = ({
  onPressUpdtae,
  onPressDelete,
  labelUpdate,
  labelDelete,
  title,
  description,
  onClose,
}) => {
  const { width } = useWindowDimensions();

  const handleUpdate = () => {
    onPressUpdtae();
    onClose();
  };

  const handleDelete = () => {
    onPressDelete();
    onClose();
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={[styles.title, { marginBottom: 20 }]}>
        {title ? title : "Opciones"}
      </Text>

      <Text style={styles.description}>
        {description
          ? description
          : "En esta sección puedes elegir entre editar o eliminar."}
      </Text>
      <View
        style={{
          width: width,
          height: 1,
          backgroundColor: COLORS.primary,
          marginTop: 20,
        }}
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={handleUpdate}
        >
          <Text style={styles.subtitle}>
            {labelUpdate ? labelUpdate : "Editar"}
          </Text>
          <MaterialCommunityIcons
            name="pencil"
            size={24}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={handleDelete}
        >
          <Text style={styles.subtitle}>
            {labelDelete ? labelDelete : "Eliminar"}
          </Text>
          <MaterialCommunityIcons
            name="trash-can"
            size={24}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 15,
  },
  optionsContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
    fontFamily: FONTS.InterSemiBold,
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
    paddingHorizontal: 20,
    fontFamily: FONTS.InterRegular,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: FONTS.InterSemiBold,
  },
});

export default UDcomponent;
