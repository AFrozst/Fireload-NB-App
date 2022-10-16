const API = "http://10.0.2.2:5000/api";
const API_INSTITUTION = "/institutions";
const API_FIRE_SECTOR = "/fireSectors";

export const getFireSector = async (institutionId, id) => {
  const endpoint = `${API}${API_INSTITUTION}/${institutionId}${API_FIRE_SECTOR}/${id}`;
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

export const saveFireSector = async (institutionId, newFireSector) => {
  const endpoint = `${API}${API_INSTITUTION}/${institutionId}${API_FIRE_SECTOR}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
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
  const endpoint = `${API}${API_INSTITUTION}/${institutionId}${API_FIRE_SECTOR}/${fireSectorId}`;
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fireSector),
  });
  const data = await response.json();
  return data;
};

export const deleteFireSector = async (institutionId, fireSectorId) => {
  const endpoint = `${API}${API_INSTITUTION}/${institutionId}${API_FIRE_SECTOR}/${fireSectorId}`;
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
