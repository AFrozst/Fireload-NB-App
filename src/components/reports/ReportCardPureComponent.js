import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

export class ReportCardPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.institution = props.institution;
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>{this.institution.fullName}</Text>
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
    fontSize: SIZES.font,
  },
});

export default ReportCardPureComponent;
