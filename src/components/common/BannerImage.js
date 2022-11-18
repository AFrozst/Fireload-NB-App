import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const BannerImage = ({ image, title, subtitle, width, height }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={[
          styles.image,
          {
            width: width || 200,
            height: height || 200,
          },
        ]}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    //borderRadius: 100,
  },
  title: {
    fontFamily: FONTS.InterSemiBold,
    color: COLORS.black,
    fontSize: SIZES.large,
  },
  subtitle: {
    fontFamily: FONTS.InterRegular,
    color: COLORS.textGray,
    fontSize: SIZES.small - 2,
  },
});

export default BannerImage;
