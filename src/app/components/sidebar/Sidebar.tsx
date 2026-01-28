import { NavLink, useNavigate } from "react-router-dom";
import { sidebarConfig, Role } from "./sidebarConfig";

export default function Sidebar() {
  const role = localStorage.getItem("userRole") as Role;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-[#1e2642] text-white p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-6">Nexus HR</h2>

        <nav className="space-y-2">
          {sidebarConfig[role]?.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-indigo-600"
                    : "hover:bg-white/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <button
        onClick={logout}
        className="text-sm text-red-400 hover:text-red-300 mt-6"
      >
        Log out
      </button>
    </aside>
  );
}