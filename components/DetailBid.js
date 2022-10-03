import React from "react";
import { View, Text, Image } from "react-native";
import { IconLabelItem } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.InterSemiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Sector de Incendio by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.InterRegular,
            fontSize: SIZES.small - 2,
            color: "#4D626C",
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <IconLabelItem icon="🔥" label={bid.price} />
    </View>
  );
};

export default DetailBid;
