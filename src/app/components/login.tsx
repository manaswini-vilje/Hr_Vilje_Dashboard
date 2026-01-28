import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const ADMIN_EMAIL = "admin@company.com";
const ADMIN_PASSWORD = "Admin@123";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Save auth state (POC)
  const authenticate = (role: "employee" | "hr" | "admin") => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);
    navigate(`/${role}`);
  };

  // 🔐 Admin login (hidden logic)
  const handleAdminCheck = () => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      authenticate("admin");
      return true;
    }
    return false;
  };

  // Employee / HR login handlers
  const handleEmployeeLogin = () => {
    setError("");
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    if (handleAdminCheck()) return;

    authenticate("employee");
  };

  const handleHrLogin = () => {
    setError("");
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    if (handleAdminCheck()) return;

    authenticate("hr");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f3a] via-[#2d1f52] to-[#1a1f3a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-[#1e2642] rounded-2xl shadow-2xl p-8 border border-white/10">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl text-white mb-2">
              Welcome back
            </h1>
            <p className="text-sm text-gray-400">
              Sign in to your Enterprise HR portal
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 text-sm text-red-400 bg-red-500/10 p-2 rounded-md">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2">
              Work Email
            </label>
            <Input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#131829] border-gray-700 text-white"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#131829] border-gray-700 text-white pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* LOGIN BUTTONS */}
          <div className="space-y-3">
            <Button
              onClick={handleEmployeeLogin}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              Login as Employee
            </Button>

            <Button
              onClick={handleHrLogin}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              Login as HR
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2024 Enterprise HR Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}