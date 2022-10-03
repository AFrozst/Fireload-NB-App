import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  StyleSheet,
} from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../../constants";
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  DetailsDesc,
  DetailBid,
} from "../../components";

const DetailHeader = ({ institution, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 373,
      }}
    >
      <View style={styles.imageContainer} />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const IntitutionDetail = ({ route, navigation }) => {
  const { institution } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.25)",
          zIndex: 1,
        }}
      >
        <RectButton
          label="Back"
          minWidth={170}
          fontSize={SIZES.large}
          color={COLORS.primary}
          handlePress={() => navigation.goBack()}
          {...SHADOWS.dark}
        />
      </View>

      <FlatList
        data={institution.bids}
        renderItem={({ item }) => <DetailBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extralarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailHeader institution={institution} navigation={navigation} />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={institution} />

              {institution.bids.length > 0 && (
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: SIZES.font,
                    fontFamily: FONTS.InterSemiBold,
                  }}
                >
                  Sectores de Incendio
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    resizeMode: "cover",
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "100%",
  },
});

export default IntitutionDetail;
