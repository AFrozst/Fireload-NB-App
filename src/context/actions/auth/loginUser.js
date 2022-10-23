import axiosInstance from "../../../helpers/axiosInstace";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../../../constants/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ email, password }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    axiosInstance
      .post("/auth/login", {
        email,
        password,
      })
      .then((res) => {
        AsyncStorage.setItem("@token", res.data.data.token);
        AsyncStorage.setItem("@user", JSON.stringify(res.data.data.user));

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : { error: "Sucedio un error, intenta de nuevo" },
        });
      });
  };
