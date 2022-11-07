import React, { PureComponent } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS, assets } from "../../constants";

export class ReportCardPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.institution = props.institution;
  }

  render() {
    const handlePressGeneratePDF = (id) => {
      console.log("Generar PDF", id);
    };

    return (
      <View style={styles.itemContainer}>
        <View style={styles.headerImage}>
          <Image
            source={assets.report_icon}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <View style={styles.bodyContainer}>
          <View style={styles.bodyInformation}>
            <Text style={styles.titleText}>{this.institution.fullName}</Text>
            <Text style={styles.secondaryText}>
              Sectores de Incendio: {this.institution.numberFireSectors}
            </Text>
          </View>
          <View style={styles.bodyActions}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePressGeneratePDF(this.institution.id)}
            >
              <Text style={styles.buttonText}>Generar PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    marginVertical: SIZES.padding - 3,
    padding: SIZES.padding,
  },
  titleText: {
    color: COLORS.white,
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.font - 1,
    marginBottom: 3
  },
  headerImage: {
    width: 50,
    height: 50,
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
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  bodyInformation: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 5,
  },
  secondaryText: {
    color: COLORS.white,
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.font - 3,
    fontStyle: "italic",
    marginLeft: 10,
  },
  bodyActions: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  button: {
    backgroundColor: COLORS.quaternary,
    borderRadius: 5,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.font - 2,
  },
});

export default ReportCardPureComponent;
