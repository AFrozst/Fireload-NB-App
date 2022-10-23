import React, { useState, useContext } from "react";
import { RegisterComponent } from "../../components";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { LOGIN } from "../../constants/routes/names";

const RegisterScreen = () => {
  const { navigate } = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  // This is a hook that will run when the screen is focused
  // It will clear the authState
  // This is to prevent the user from seeing the error message
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error])
  );

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      if (name === "password") {
        if (value.length < 6) {
          setErrors((prev) => {
            return {
              ...prev,
              [name]: "La contraseña debe tener al menos 6 caracteres",
            };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: "Este campo es requerido" };
      });
    }
  };

  const onSubmit = () => {
    // validation

    if (form.name === undefined) {
      setErrors((prev) => {
        return { ...prev, name: "Por favor ingrese un nombre" };
      });
    }

    if (form.email === undefined) {
      setErrors((prev) => {
        return { ...prev, email: "Por favor ingrese un email" };
      });
    }

    if (form.password === undefined) {
      setErrors((prev) => {
        return { ...prev, password: "Por favor ingrese una contraseña" };
      });
    }

    if (
      Object.values(form).length === 3 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN, { data: response });
      });
    }
  };

  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default RegisterScreen;
