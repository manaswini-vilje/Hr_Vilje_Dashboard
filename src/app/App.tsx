import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "@/app/routes/PrivateRoute";

import Login from "@/app/pages/login";
import EmployeeDashboard from "@/app/pages/employee";
import EmployeeProfile from "@/app/pages/employee/profile";
import EmployeeDocuments from "@/app/pages/employee/documents";
import EmployeeTasks from "@/app/pages/employee/tasks";
import EmployeeMessages from "@/app/pages/employee/messages";
import EmployeeTimeOff from "@/app/pages/employee/time-off";
import EmployeePayslip from "@/app/pages/employee/payslip";

import HrDashboard from "@/app/pages/hr";
import HREmployees from "@/app/pages/hr/employees";
import HREmployeeDetail from "@/app/pages/hr/employee-detail";
import HRApprovals from "@/app/pages/hr/approvals";
import HRMessages from "@/app/pages/hr/messages";
import HRReports from "@/app/pages/hr/reports";

import AdminDashboard from "@/app/pages/admin";
import AdminUsers from "@/app/pages/admin/users";
import AdminUserDetail from "@/app/pages/admin/user-detail";
import AdminRoles from "@/app/pages/admin/roles";
import AdminSettings from "@/app/pages/admin/settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Employee Routes */}
        <Route
          path="/employee"
          element={
            <PrivateRoute allowedRoles={["employee"]}>
              <EmployeeDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/profile"
          element={
            <PrivateRoute allowedRoles={["employee"]}>
              <EmployeeProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/documents"
          element={
            <PrivateRoute allowedRoles={["employee"]}>
              <EmployeeDocuments />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/tasks"
          element={
            <PrivateRoute allowedRoles={["employee"]}>
              <EmployeeTasks />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/messages"
          element={
            <PrivateRoute allowedRoles={["employee"]}>
              <EmployeeMessages />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/time-off"
          element={
            <PrivateRoute allowedRoles={["employee"]}>
              <EmployeeTimeOff />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/payslip"
          element={
            <PrivateRoute allowedRoles={["employee"]}>
              <EmployeePayslip />
            </PrivateRoute>
          }
        />

        {/* HR Routes */}
        <Route
          path="/hr"
          element={
            <PrivateRoute allowedRoles={["hr"]}>
              <HrDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/employees"
          element={
            <PrivateRoute allowedRoles={["hr"]}>
              <HREmployees />
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/employees/:id"
          element={
            <PrivateRoute allowedRoles={["hr"]}>
              <HREmployeeDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/approvals"
          element={
            <PrivateRoute allowedRoles={["hr"]}>
              <HRApprovals />
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/messages"
          element={
            <PrivateRoute allowedRoles={["hr"]}>
              <HRMessages />
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/reports"
          element={
            <PrivateRoute allowedRoles={["hr"]}>
              <HRReports />
            </PrivateRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminUsers />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users/:id"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminUserDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/roles"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminRoles />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminSettings />
            </PrivateRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}