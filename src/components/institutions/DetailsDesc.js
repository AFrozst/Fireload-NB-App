import React from "react";
import { View, Text } from "react-native";
import { TitleItem, IconLabelItem } from "../common/SubInfo";
import { COLORS, SIZES, FONTS } from "../../constants";

const DetailsDesc = ({ data }) => {
  const dateUpdate = new Date(data.updatedAt).toLocaleDateString("es-ES");
  const dateTime = new Date(data.updatedAt).toLocaleTimeString("es-ES");
  const date = `${dateUpdate} ${dateTime}`;

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleItem
          title={data.fullName}
          subtitle={data.location}
          titleSize={SIZES.extralarge}
          subtitleSize={SIZES.font}
        />
      </View>

      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: SIZES.small,
              fontFamily: FONTS.InterSemiBold,
            }}
          >
            Ultima modificación:{" "}
          </Text>
          <Text
            style={{
              color: COLORS.darkGray,
              fontSize: SIZES.small,
              fontFamily: FONTS.InterRegular,
            }}
          >
            {date}
          </Text>
        </View>
        <IconLabelItem icon="📍" label={data.numberFireSectors} />
      </View>
    </>
  );
};

export default DetailsDesc;
