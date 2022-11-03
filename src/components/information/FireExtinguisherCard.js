import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../../constants";

const FireExtinguisherCard = ({ FireExtinguisher }) => {
  const getColor = (type) => {
    switch (type) {
      case "A":
        return "#00933d";
      case "B":
        return "#ff1f21";
      case "C":
        return "#007dc3";
      case "D":
        return "#ffb22a";
      case "K":
        return "#262626";
      default:
        return "grey";
    }
  };

  const renderFire = (fire, index) => {
    return (
      <View
        key={`fire-${index}`}
        style={[
          styles.fireContainer,
          {
            backgroundColor: getColor(fire.id),
          },
        ]}
      >
        <Text style={styles.fireNameText}>{fire.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerImage}>
        <Image
          source={assets.extinguisher}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>{FireExtinguisher.name}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            {FireExtinguisher.description}
          </Text>

          <View style={styles.firesContainer}>
            <Text style={styles.firesText}>Contra fuegos:</Text>
            {FireExtinguisher.fires.map((fire, index) =>
              renderFire(fire, index)
            )}
          </View>

          <Text style={styles.noteText}>Nota: {FireExtinguisher.note}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.tertiary,
    borderRadius: 5,
    margin: SIZES.padding - 5,
    padding: SIZES.padding,
  },
  headerImage: {
    width: 60,
    height: 60,
    backgroundColor: "#2C292C",
    borderRadius: SIZES.padding,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.padding,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.padding,
  },
  body: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: SIZES.padding - 5,
  },
  title: {
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.font,
    color: COLORS.primary,
    textAlign: "left",
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  descriptionText: {
    fontFamily: FONTS.InterMedium,
    fontSize: SIZES.small,
    color: COLORS.black,
    textAlign: "justify",
  },
  noteText: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.base + 2,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 10,
    fontStyle: "italic",
  },
  firesContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  firesText: {
    fontFamily: FONTS.InterMedium,
    fontSize: SIZES.small,
    color: COLORS.black,
    fontWeight: "bold",
    textAlign: "left",
  },
  fireContainer: {
    flexDirection: "row",
    marginHorizontal: 3,
    padding: 3,
    borderRadius: 5,
  },
  fireNameText: {
    fontFamily: FONTS.InterMedium,
    fontSize: SIZES.small - 2,
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default FireExtinguisherCard;
