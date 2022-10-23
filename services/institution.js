import AsyncStorage from "@react-native-async-storage/async-storage";
import envs from "../config/env";

const API_URL = envs.BACKEND_URL;
const API = `${API_URL}/institutions`;

export const getInstitutions = async () => {
  const token = await AsyncStorage.getItem("@token");
  const response = await fetch(API, {
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

export const getInstitution = async (id) => {
  const token = await AsyncStorage.getItem("@token");
  const response = await fetch(`${API}/${id}`, {
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

export const saveInstitution = async (newInstitution) => {
  const token = await AsyncStorage.getItem("@token");
  const response = await fetch(API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newInstitution),
  });
  const data = await response.json();
  return data;
};

export const updateInstitution = async (id, institution) => {
  const token = await AsyncStorage.getItem("@token");
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(institution),
  });
  const data = await response.json();
  return data;
};

export const deleteInstitution = async (id) => {
  const token = await AsyncStorage.getItem("@token");
  const response = await fetch(`${API}/${id}`, {
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
