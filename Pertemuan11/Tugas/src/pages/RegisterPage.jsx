import { useState } from "react";
import { register } from "../services/authService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const [form, setForm] = useState({ username: "", password: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.username, form.password, form.role);
      Swal.fire("Berhasil", "Registrasi berhasil! Silakan login.", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("Gagal", err.response?.data?.error || "Registrasi gagal", "error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-6 text-center">Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role (misal: admin, user)"
          value={form.role}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
        <p className="mt-4 text-center text-sm">
          Sudah punya akun?{' '}
          <a href="/" className="text-blue-500 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}
