import AsyncStorage from "@react-native-async-storage/async-storage";
import envs from "../config/env";

const API = envs.BACKEND_URL;
const API_INSTITUTION = "/institutions";
const API_FIRE_SECTOR = "/fireSectors";

export const getFireSector = async (institutionId, id) => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${API_INSTITUTION}/${institutionId}${API_FIRE_SECTOR}/${id}`;
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

export const saveFireSector = async (institutionId, newFireSector) => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${API_INSTITUTION}/${institutionId}${API_FIRE_SECTOR}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFireSector),
  });
  const data = await response.json();
  return data;
};

export const updateFireSector = async (
  institutionId,
  fireSectorId,
  fireSector
) => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${API_INSTITUTION}/${institutionId}${API_FIRE_SECTOR}/${fireSectorId}`;
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fireSector),
  });
  const data = await response.json();
  return data;
};

export const deleteFireSector = async (institutionId, fireSectorId) => {
  const token = await AsyncStorage.getItem("@token");
  const endpoint = `${API}${API_INSTITUTION}/${institutionId}${API_FIRE_SECTOR}/${fireSectorId}`;
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
