import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LayoutContainer } from "../../layouts";
import { CustomButton } from "../common/Button";
import Input from "../common/Input";
import { COLORS, assets, SIZES, FONTS } from "../../constants";
import { REGISTER } from "../../constants/routes/names";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Message from "../common/Message";
import FocusedStatusBar from "../common/FocusedStatusBar";

const LoginComponet = ({
  form,
  onChange,
  onSubmit,
  justSignedUp,
  error,
  loading,
  errors,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <LayoutContainer>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Image
        height={100}
        width={100}
        source={assets.login}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Bienvenido a Fireload NB App</Text>
        <Text style={styles.subTitle}>
          Inicia sesión para seguir trabajando
        </Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              success
              message="Cuenta creada exitosamente"
              onDismiss={() => {}}
            />
          )}
          {error && !error.error && (
            <Message
              danger
              message="Credenciales incorrectas"
              onDismiss={() => {}}
            />
          )}

          {error?.error && <Message danger onDismiss message={error?.error} />}
          {error?.errors && (
            <Message danger onDismiss message={error?.errors[0].msg} />
          )}

          <Input
            label={"Email"}
            placeholder={"Ingresa tu email"}
            value={form.email || null}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
            error={errors.email}
          />

          <Input
            label={"Password"}
            placeholder={"Ingresa tu contraseña"}
            secureTextEntry={isSecureEntry}
            value={form.password || null}
            error={errors.password}
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
          />

          <CustomButton
            disabled={loading}
            loading={loading}
            primary
            title="INICIAR SESION"
            onPress={onSubmit}
          />
        </View>

        <View style={styles.createSection}>
          <Text style={styles.infoText}>No tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}
          >
            <Text style={styles.linkBtn}>Registrate</Text>
          </TouchableOpacity>
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
    fontSize: 15,
    paddingBottom: 20,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FONTS.InterRegular,
  },
  form: {
    paddingTop: 20,
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

export default LoginComponet;
