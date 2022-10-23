import axiosInstance from "../../../helpers/axiosInstace";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
} from "../../../constants/actionTypes";

export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({ name, email, password }) =>
  (dispatch) =>
  (onSuccess) => {
    dispatch({
      type: REGISTER_LOADING,
    });

    axiosInstance
      .post("/auth/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        
        onSuccess(res.data);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : { error: "Sucedio un error, intenta de nuevo" },
        });
      });
  };
