import React, { useState } from "react";
import { View, Text } from "react-native";
import { TitleItem, IconLabelItem } from "../common/SubInfo";
import { COLORS, SIZES, FONTS } from "../../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [redMore, setRedMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
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
        <IconLabelItem icon="🔥" label={data.numberFireSectors} />
      </View>
      <View
        style={{
          marginVertical: SIZES.extralarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.InterSemiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.InterRegular,
              color: COLORS.black,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!redMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.InterSemiBold,
                color: COLORS.primary,
              }}
              onPress={() => {
                if (!redMore) {
                  setText(data.description);
                  setRedMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setRedMore(false);
                }
              }}
            >
              {redMore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
