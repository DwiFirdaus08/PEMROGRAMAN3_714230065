import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TypographyAtom } from "../components/atoms/TypographyAtom";
import { MahasiswaForm } from "../components/organisms/MahasiswaForm";
import {
  getMahasiswaByNpm,
  updateMahasiswa,
} from "../services/mahasiswaService";
import Swal from "sweetalert2";

export function EditMahasiswaPage() {
  const { npm } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMahasiswaByNpm(npm);
        setInitialData(data);
      } catch (err) {
        const errorMessage =
          err.response?.data?.error || "Gagal mengambil data mahasiswa.";
        Swal.fire("Error", errorMessage, "error");
      }
    }
    fetchData();
  }, [npm]);

  const handleSubmit = async (data) => {
    try {
      await updateMahasiswa(npm, data);
      await Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Data mahasiswa berhasil diperbarui.",
        confirmButtonColor: "#22c55e",
      });
      navigate("/mahasiswa");
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Gagal memperbarui data mahasiswa.";
      Swal.fire("Error", errorMessage, "error");
    }
  };

  const handleCancel = () => {
    navigate("/mahasiswa");
  };

  if (!initialData) return <div>Loading...</div>;

  return (
    <div className="py-6 px-4">
      <TypographyAtom variant="h5" className="mb-4">
        Edit Data Mahasiswa
      </TypographyAtom>
      <MahasiswaForm
        onSubmit={handleSubmit}
        initialValues={initialData}
        isEditing
        onCancel={handleCancel}
      />
    </div>
  );
}
