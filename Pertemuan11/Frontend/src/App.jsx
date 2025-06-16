import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../routes/PrivateRoute";
import { LayoutDashboard } from "./components/layouts/LayoutDashboard";

import { Dashboard } from "./pages/Dashboard";
import { MahasiswaPage } from "./pages/MahasiswaPage";
import { TambahMahasiswaPage } from "./pages/TambahMahasiswaPage";
import { EditMahasiswaPage } from "./pages/EditMahasiswaPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes with Dashboard Layout */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LayoutDashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="mahasiswa" element={<MahasiswaPage />} />
          <Route path="mahasiswa/tambah" element={<TambahMahasiswaPage />} />
          <Route path="mahasiswa/edit/:npm" element={<EditMahasiswaPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;