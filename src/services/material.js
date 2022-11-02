import AsyncStorage from "@react-native-async-storage/async-storage";
import envs from "../config/env";

const API = envs.BACKEND_URL;
const route_MATERIAL = "/materials";
const route_INSTITUTION = "/institutions";
const route_FIRE_SECTOR = "/fireSectors";

export const getMaterials = async () => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${route_MATERIAL}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const addMaterial = async (institutionId, fireSectorId, data) => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${route_INSTITUTION}/${institutionId}${route_FIRE_SECTOR}/${fireSectorId}${route_MATERIAL}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return { response: result, status: response.status };
};

export const deleteMaterial = async (
  institutionId,
  fireSectorId,
  materialId
) => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${route_INSTITUTION}/${institutionId}${route_FIRE_SECTOR}/${fireSectorId}${route_MATERIAL}/${materialId}`;
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getAndSearchMaterials = async (search = "") => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${route_MATERIAL}/search?query=${search}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
