import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const Input = ({
  label,
  icon,
  iconPosition,
  onChangeText,
  placeholder,
  value,
  error,
  style,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") return "row";
      else if (iconPosition === "right") return "row-reverse";
    }
  };

  const getBorderColor = () => {
    if (error) return COLORS.danger;

    if (focused) return COLORS.focusText;
    else return COLORS.textGray;
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          //{alignItems: icon ? 'center' : 'baseline'},
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        
        <TextInput
          style={[styles.input, style]}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingVertical: 5,
  },
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 2,
  },
  label: {
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
    color: COLORS.textGray,
  },
  input: {
    flex: 1,
    width: "100%",
    fontFamily: FONTS.InterRegular,
  },
  error: {
    color: COLORS.danger,
    fontSize: SIZES.small,
    marginTop: 2,
    fontFamily: FONTS.InterRegular,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
});

export default Input;
