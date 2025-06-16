import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { getAllMahasiswa } from "../services/mahasiswaService";

export const useMahasiswa = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedRef = useRef(false); // supaya cache tidak fetch 2x

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllMahasiswa();
      setUsers(data);
      console.log("Fetched mahasiswa:", data);
    } catch (err) {
      console.error("Error fetching mahasiswa:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!fetchedRef.current) {
      fetchData();
      fetchedRef.current = true; // tandain sudah fetch
    }
  }, []);

  const retry = () => {
    fetchedRef.current = false; // reset cache, agar bisa fetch ulang
    fetchData();
  };

  return { users, loading, error, retry };
};
