import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LayoutContainer } from "../../layouts";
import { CustomButton } from "../common/Button";
import Input from "../common/Input";
import { COLORS, assets, FONTS, SIZES } from "../../constants";
import { LOGIN } from "../../constants/routes/names";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Message from "../common/Message";
import FocusedStatusBar from "../common/FocusedStatusBar";

const RegisterComponent = ({
  form,
  errors,
  onChange,
  onSubmit,
  error,
  loading,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <LayoutContainer>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Image
        height={100}
        width={100}
        source={assets.register}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Bienvenido a Fireload NB App</Text>
        <Text style={styles.subTitle}>
          Create una cuenta para tener todas las funcionalidades
        </Text>

        <View style={styles.form}>
          {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )}

          {error?.errors && <Message danger message={error?.errors[0].msg} />}

          <Input
            label={"Nombre"}
            placeholder={"Ingresa tu nombre"}
            onChangeText={(value) => {
              onChange({ name: "name", value });
            }}
            error={errors.name || error?.name?.[0]}
            required
          />

          <Input
            label={"Apellido"}
            placeholder={"Ingresa tu apellido"}
            onChangeText={(value) => {
              onChange({ name: "lastName", value });
            }}
            error={errors.lastName || error?.lastName?.[0]}
            required
          />

          <Input
            label={"Email"}
            placeholder={"Ingresa tu email"}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
            error={errors.email || error?.email?.[0]}
            required
          />

          <Input
            label={"Contraseña"}
            placeholder={"Ingresa tu contraseña"}
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry((prev) => !prev);
                }}
              >
                <View style={styles.icon}>
                  {isSecureEntry ? (
                    <MaterialCommunityIcons
                      name="eye-off-outline"
                      size={20}
                      color={COLORS.black}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="eye-outline"
                      size={20}
                      color={COLORS.black}
                    />
                  )}
                </View>
              </TouchableOpacity>
            }
            iconPosition={"right"}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
            error={errors.password || error?.password?.[0]}
            required
          />

          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            primary
            title={"CREAR"}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Ya tienes una cuenta?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}
            >
              <Text style={styles.linkBtn}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LayoutContainer>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "500",
    fontFamily: FONTS.InterBold,
  },
  subTitle: {
    fontSize: 12,
    textAlign: "center",
    paddingTop: 30,
    fontWeight: "500",
    fontFamily: FONTS.InterRegular,
    textAlign: "left",
    color: COLORS.textGray,
  },
  form: {
    paddingTop: 5,
  },
  createSection: {
    flexDirection: "row",
  },
  linkBtn: {
    paddingLeft: 17,
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
  },
  infoText: {
    fontSize: SIZES.font,
    color: COLORS.darkGray,
    fontFamily: FONTS.InterRegular,
  },
  icon: {
    padding: 7,
  },
});

export default RegisterComponent;
