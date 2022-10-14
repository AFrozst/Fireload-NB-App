const API = "http://10.0.2.2:5000/api/institutions";

export const getInstitutions = async () => {
  const response = await fetch(API, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getInstitution = async (id) => {
  const response = await fetch(`${API}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const saveInstitution = async (newInstitution) => {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newInstitution),
  });
  const data = await response.json();
  return data;
};

export const updateInstitution = async (id, institution) => {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(institution),
  });
  const data = await response.json();
  return data;
};

export const deleteInstitution = async (id) => {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
