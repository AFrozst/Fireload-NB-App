import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {
  FocusedStatusBar,
  HeaderInformation,
  ReportCard,
  HeaderReports,
  BannerReport,
} from "../../components";
import { assets } from "../../constants";
import { COLORS, SIZES, FONTS } from "../../constants";
import { getInstitutions } from "../../services/institution";

const Reports = ({ navigation }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadReports = async () => {
    try {
      setLoading(true);
      const response = await getInstitutions();
      setReports(response.data);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  const renderItem = ({ item }) => {
    return <ReportCard institution={item} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 150,
          backgroundColor: COLORS.primary,
          zIndex: -100,
        }}
      />
      <HeaderInformation
        title={"Generador de reportes"}
        subtitle={"Elabora un informa de estudio de carga de fuego"}
      />
      <View style={styles.container}>
        {loading ? (
          <View style={{ marginTop: 20 }}>
            <ActivityIndicator size="large" color={COLORS.quaternary} />
          </View>
        ) : (
          <FlatList
            data={reports}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            onRefresh={loadReports}
            refreshing={false}
            ListHeaderComponent={
              <>
                <HeaderReports />
                <BannerReport />
                <Text style={styles.titleText}>Seleccione un estudio:</Text>
              </>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: SIZES.padding + 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  titleText: {
    fontSize: SIZES.font,
    fontWeight: "bold",
    fontFamily: FONTS.InterSemiBold,
  },
});

export default Reports;
