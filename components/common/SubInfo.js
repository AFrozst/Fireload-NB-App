import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants";

export const TitleItem = ({ title, subtitle, titleSize, subtitleSize }) => {
  return (
    <View>
      <Text style={[styles.title, { fontSize: titleSize }]}>{title}</Text>
      <Text style={[styles.subtitle, { fontSize: subtitleSize }]}>
        {subtitle}
      </Text>
    </View>
  );
};

export const IconLabelItem = ({ icon, label }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ marginRight: 2 }}>{icon}</Text>
      <Text
        style={{
          color: COLORS.primary,
          fontFamily: FONTS.InterMedium,
          fontSize: SIZES.font,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
  },
  subtitle: {
    fontFamily: FONTS.InterRegular,
    color: COLORS.primary,
  },
});
