import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DetailHeader from "../institutions/DetailHeader";
import DetailsDesc from "../institutions/DetailsDesc";
import FireSectorItem from "./FireSectorItem";
import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../../constants";

const FireSectorsList = ({ data, fireSectors, navigation }) => {
  const [institution, setInstitution] = useState(data);
  const [sectors, setSectors] = useState(fireSectors);

  const renderItem = ({ item }) => {
    return <FireSectorItem sector={item} navigation={navigation} />;
  };

  return (
    <FlatList
      data={sectors}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: SIZES.extralarge * 3,
      }}
      ListHeaderComponent={() => (
        <React.Fragment>
          <DetailHeader institution={institution} navigation={navigation} />
          <View style={{ padding: SIZES.font }}>
            <DetailsDesc data={institution} />
            {institution.sectors.length > 0 && (
              <Text style={styles.title}>Sectores de Incendio</Text>
            )}
          </View>
        </React.Fragment>
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
  },
});

export default FireSectorsList;
