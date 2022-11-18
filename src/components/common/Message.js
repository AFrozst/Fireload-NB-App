import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

const Message = ({
  message,
  danger,
  success,
  info,
  primary,
  retry,
  retryFn,
  onDismiss,
}) => {
  const [isDimissed, setIsDimissed] = useState(false);

  const getBgColor = () => {
    if (primary) {
      return COLORS.primary;
    }
    if (danger) {
      return COLORS.danger;
    }
    if (success) {
      return COLORS.quaternary;
    }

    if (info) {
      return COLORS.tertiary;
    }
  };

  return (
    <>
      {isDimissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: getBgColor() }]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: SIZES.padding - 5,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontFamily: FONTS.InterRegular,
                fontSize: SIZES.small,
              }}
            >
              {message}
            </Text>

            {retry && typeof onDismiss !== "function" && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: FONTS.InterRegular,
                    fontSize: SIZES.small,
                  }}
                >
                  Reintentar
                </Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === "function" && (
              <TouchableOpacity
                onPress={() => {
                  setIsDimissed(true);
                  onDismiss();
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: FONTS.InterRegular,
                    fontSize: SIZES.small,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    paddingVertical: 13,
    marginVertical: 5,
    borderRadius: 4,
  },
});

export default Message;
