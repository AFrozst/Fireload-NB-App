import AsyncStorage from "@react-native-async-storage/async-storage";
import envs from "../config/env";

const API_URL = envs.BACKEND_URL;
const API = `${API_URL}/reports`;
const typeReport = "/pdf";

export const generateReport = async (id) => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${typeReport}/${id}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return { data: data.data, status: response.status };
};
