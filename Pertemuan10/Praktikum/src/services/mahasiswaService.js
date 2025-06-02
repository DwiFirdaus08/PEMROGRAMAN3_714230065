import axios from "axios";

// Konfigurasi base url
const API_BASE_URL = "http://127.0.0.1:8088/api/mahasiswa";

// GET: Ambil semua data mahasiswa
export const getAllMahasiswa = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data.data || [];
};

// POST: Tambah mahasiswa
export const postMahasiswa = async (payload) => {
  const response = await axios.post(API_BASE_URL, payload);
  return response.data;
};

// GET by ID
export const getMahasiswaByNpm = async (npm) => {
  const response = await axios.get(
    `http://127.0.0.1:8088/api/mahasiswa/${npm}`
  );
  return response.data.data;
};

// PUT: Update Mahasiswa
export const updateMahasiswa = async (npm, payload) => {
  const response = await axios.put(
    `http://127.0.0.1:8088/api/mahasiswa/${npm}`,
    payload
  );
  return response.data;
};

// DELETE Mahasiswa
export const deleteMahasiswa = async (npm) => {
  const response = await axios.delete(
    `http://127.0.0.1:8088/api/mahasiswa/${npm}`
  );

  if (response.status !== 200) {
    throw new Error("Gagal menghapus mahasiswa");
  }
  return response.data;
};
