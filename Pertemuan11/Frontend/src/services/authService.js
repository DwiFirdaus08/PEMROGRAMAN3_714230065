import axios from "axios";

const API_URL =
  "https://deploymentpemrogramaniii-production.up.railway.app/login";

export const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  return response.data;
};

export const register = async (username, password, role) => {
  const response = await axios.post(
    "https://deploymentpemrogramaniii-production.up.railway.app/register",
    {
      username,
      password,
      role,
    }
  );
  return response.data;
};
