import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  ActivityIndicator,
} from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extralarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  label,
  minWidth,
  fontSize,
  color,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        minWidth: minWidth,
        padding: SIZES.small,
        borderRadius: SIZES.extralarge,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: fontSize,
          textAlign: "center",
          fontFamily: FONTS.InterSemiBold,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export const RectButtonArrow = ({
  title,
  minWidth,
  fontSize,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        width: "100%",
        padding: SIZES.small,
        borderRadius: SIZES.font,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: SIZES.base,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: fontSize,
          textAlign: "center",
          fontFamily: FONTS.InterSemiBold,
        }}
      >
        {title}
      </Text>
      <MaterialCommunityIcons
        name="arrow-right"
        size={24}
        color={COLORS.white}
        style={{ marginLeft: SIZES.small }}
      />
    </TouchableOpacity>
  );
};

export const AddButton = ({ handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: COLORS.quaternary,
        position: "absolute",
        borderRadius: SIZES.extralarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <MaterialCommunityIcons name="plus" size={24} color={COLORS.white} />
    </TouchableOpacity>
  );
};

export const CustomButton = ({
  title,
  disabled,
  loading,
  onPress,
  secondary,
  primary,
  danger,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return COLORS.gray;
    }

    if (primary) {
      return COLORS.primary;
    }
    if (danger) {
      return COLORS.danger;
    }
    if (secondary) {
      return COLORS.secondary;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getBgColor() }, style]}
    >
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? COLORS.secondary : COLORS.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? "black" : COLORS.white,
              paddingLeft: loading ? 5 : 0,
            }}
          >
            {loading ? "Espere por favor..." : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  RecButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.extralarge,
  },
  textRectButton: {
    color: COLORS.white,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
  },

  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  loaderSection: {
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    width: "100%",
  },
  error: {
    color: COLORS.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
