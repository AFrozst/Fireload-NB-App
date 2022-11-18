import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS, assets } from "../../constants";
import { generateReport } from "../../services/report";
import { ModalMessageDownloading } from "../common/MyModals";

import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const ReportCardPureComponent = ({ institution }) => {
  const messageGenerate = "Estamos generando su reporte del estudio";
  const messageDownload = "Estamos descargando su reporte del estudio";
  const [isDownloading, setIsDownloading] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  const downloadFile = async (urlFilename, filename) => {
    setMessageModal(messageDownload);
    let url = urlFilename;
    let fileUri = FileSystem.documentDirectory + filename;

    const downloadResumable = FileSystem.createDownloadResumable(url, fileUri);
    try {
      const { uri } = await downloadResumable.downloadAsync();
      setMessageModal("");
      setIsDownloading(false);
      await Sharing.shareAsync(uri);
    } catch (e) {
      console.error(e);
    }
  };

  const handleGeneratePDF = async (id) => {
    try {
      setMessageModal(messageGenerate);
      setIsDownloading(true);
      const response = await generateReport(id);
      if (response.status === 200) {
        await downloadFile(
          response.data.url_filename,
          response.data.filename
        );
      }
    } catch (error) {
      console.log(error);
      setIsDownloading(false);
      setMessageModal("");
      alert("Ha ocurrido un error al generar el reporte. Intentelo más tarde");
    }
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
          <Text style={styles.titleText}>{institution.fullName}</Text>
          <Text style={styles.secondaryText}>
            Sectores de Incendio: {institution.numberFireSectors}
          </Text>
        </View>
        <View style={styles.bodyActions}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              isDownloading ? null : () => handleGeneratePDF(institution.id)
            }
          >
            <Text style={styles.buttonText}>Generar PDF</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ModalMessageDownloading
        title={"Espere un momemto..."}
        message={messageModal}
        isModalOpen={isDownloading}
        setIsModalOpen={setIsDownloading}
      />
    </View>
  );
};

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
    marginBottom: 3,
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
