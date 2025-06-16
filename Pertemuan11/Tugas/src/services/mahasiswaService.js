import axiosInstance from "../utils/axiosInstance";

export const getAllMahasiswa = async () => {
  const response = await axiosInstance.get("/mahasiswa");
  return response.data.data || [];
};

export const getMahasiswaByNpm = async (npm) => {
  const response = await axiosInstance.get(`/mahasiswa/${npm}`);
  return response.data.data;
};

export const postMahasiswa = async (payload) => {
  const response = await axiosInstance.post("/mahasiswa", payload);
  return response.data;
};

export const updateMahasiswa = async (npm, payload) => {
  const response = await axiosInstance.put(`/mahasiswa/${npm}`, payload);
  return response.data;
};

export const deleteMahasiswa = async (npm) => {
  const response = await axiosInstance.delete(`/mahasiswa/${npm}`);
  return response.data;
};