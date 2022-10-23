import React, { useState, useEffect, useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { LoginComponet } from "../../components";
import { GlobalContext } from "../../context/Provider";
import loginUser from "../../context/actions/auth/loginUser";

import { clearAuthState } from "../../context/actions/auth/register";
import { useFocusEffect } from "@react-navigation/native";

const LoginScreen = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const { params } = useRoute();
  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [error])
  );

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({ ...form, email: params.data.user.email, password: null });
    }
  }, [params]);

  const onSubmit = () => {
    if (form.email && form.password) {
      loginUser(form)(authDispatch);
    }

    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: "Ingrese su email" };
      });
    }

    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: "Ingrese su contraseña" };
      });
    }
  };

  const onChange = ({ name, value }) => {
    setJustSignedUp(false);
    setForm({ ...form, [name]: value });

    if (value !== "") {
      setErrors((prev) => {
        return { ...prev, [name]: null };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: "Este campo es requerido" };
      });
    }
  };

  return (
    <LoginComponet
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default LoginScreen;
