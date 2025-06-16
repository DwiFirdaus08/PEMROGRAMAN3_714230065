import { TypographyAtom } from "../atoms/TypographyAtom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function Navbar({ onMenuClick, sidebarOpen, isDesktop }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Yakin Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Logout",
      cancelButtonText: "Batal",
      confirmButtonColor: "#ef4444",
    });

    if (result.isConfirmed) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white shadow-md flex items-center transition-all duration-300">
      {/* Tombol hamburger di mobile */}
      {!isDesktop && (
        <button onClick={onMenuClick} className="ml-4 md:hidden">
          <Bars3Icon className="h-6 w-6 text-blue-gray-900" />
        </button>
      )}

      {/* Container Welcome */}
      <div
        className={`flex items-center h-full transition-all duration-300 ${
          isDesktop && sidebarOpen ? "ml-64 pl-6" : "ml-4"
        }`}
      >
        <TypographyAtom variant="h6" className="text-blue-gray-900">
          Welcome to Dashboard
        </TypographyAtom>
      </div>
      <div className="mr-2 flex items-center justify-end flex-1">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-00 text-white px-4 py-2 rounded-md text-sm transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
