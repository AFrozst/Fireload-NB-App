const API = "http://10.0.2.2:5000/api";
//const API = "http://192.168.1.85:5000/api";
const route_MATERIAL = "/materials";
const route_INSTITUTION = "/institutions";
const route_FIRE_SECTOR = "/fireSectors";

export const getMaterials = async () => {
  const endpoint = `${API}${route_MATERIAL}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const addMaterial = async (institutionId, fireSectorId, data) => {
  const endpoint = `${API}${route_INSTITUTION}/${institutionId}${route_FIRE_SECTOR}/${fireSectorId}${route_MATERIAL}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
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
  const endpoint = `${API}${route_INSTITUTION}/${institutionId}${route_FIRE_SECTOR}/${fireSectorId}${route_MATERIAL}/${materialId}`;
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
