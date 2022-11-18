import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ViewBlockedPressable } from "./ViewBlocked";
import { COLORS, FONTS, SIZES } from "../../constants";

export const ModalMessageDownloading = ({
  title,
  message,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
          </View>
          <View style={styles.separatorLine} />
          <View style={styles.modalBody}>
            <Text style={styles.modalMessage}>{message}</Text>
            <ActivityIndicator size="large" color={COLORS.quaternary} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const ModalOptions = ({
  isModalOpen,
  setIsModalOpen,
  onPressDelete,
  onPressEdit,
  title,
  description,
  titleDelete,
  titleEdit,
}) => {
  const modalOptions = [
    {
      title: titleEdit,
      icon: (
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={25}
          color="black"
        />
      ),
      onPress: onPressEdit,
    },
    {
      title: titleDelete,
      icon: (
        <MaterialCommunityIcons name="delete-outline" size={25} color="black" />
      ),
      onPress: onPressDelete,
    },
  ];

  return (
    <>
      <Modal
        visible={isModalOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
        statusBarTranslucent={true}
      >
        <ViewBlockedPressable
          enableBackdropDismiss={true}
          onDismiss={() => setIsModalOpen(false)}
        />
        <View style={styles.modalContainerStyle}>
          <View style={styles.modalContainer}>
            <View style={styles.line} />
            <Text style={styles.titleStyle}>{title}</Text>
            {description && (
              <Text style={styles.descriptionStyle}>{description}</Text>
            )}

            {modalOptions.map((option, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.modalOption}
                  onPress={() => {
                    setIsModalOpen(false);
                    option.onPress();
                  }}
                >
                  <View style={styles.optionContainer} key={index}>
                    <Text style={styles.optiontText}>{option.title}</Text>
                    <View>{option.icon}</View>
                  </View>
                </TouchableOpacity>
              );
            })}

            <View>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsModalOpen(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  modalView: {
    width: "80%",
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  modalTitle: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  modalBody: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  modalMessage: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.font,
    textAlign: "center",
    color: COLORS.primary,
    marginBottom: 20,
  },
  separatorLine: {
    width: "100%",
    height: 3,
    backgroundColor: COLORS.primary,
    marginBottom: 10,
    borderRadius: 10
  },

  modalContainerStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  line: {
    width: 100,
    height: 5,
    backgroundColor: COLORS.black,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  titleStyle: {
    color: COLORS.primary,
    fontSize: SIZES.large,
    fontFamily: FONTS.InterBold,
  },
  descriptionStyle: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterRegular,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  optiontText: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontFamily: FONTS.InterSemiBold,
  },
  modalOption: {
    width: "100%",
  },
  cancelButton: {
    width: 200,
    height: 50,
    backgroundColor: COLORS.quaternary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.InterSemiBold,
  },
});
