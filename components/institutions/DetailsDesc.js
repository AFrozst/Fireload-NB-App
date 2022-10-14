import React, { useState } from "react";
import { View, Text } from "react-native";
import { TitleItem, IconLabelItem } from "../common/SubInfo";
import { COLORS, SIZES, FONTS } from "../../constants";

const DetailsDesc = ({ data }) => {
  const description =
    "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.";
  const [text, setText] = useState(description.slice(0, 100));
  const [redMore, setRedMore] = useState(false);

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
          subtitle={data.createdAt}
          titleSize={SIZES.extralarge}
          subtitleSize={SIZES.font}
        />
      </View>
      <IconLabelItem icon="🔥" label={data.numberFireSectors} />
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
                  setText(description);
                  setRedMore(true);
                } else {
                  setText(description.slice(0, 100));
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
