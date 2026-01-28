import { Shield, Users, Plus, Edit2 } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';

export default function AdminRoles() {
  const roles = [
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access with all permissions',
      userCount: 12,
      color: 'purple',
      permissions: {
        manageUsers: true,
        manageEmployees: true,
        approveRequests: true,
        viewReports: true,
        systemSettings: true,
        manageRoles: true,
      },
    },
    {
      id: 2,
      name: 'HR Manager',
      description: 'Manage employees, approvals, and HR functions',
      userCount: 24,
      color: 'blue',
      permissions: {
        manageUsers: false,
        manageEmployees: true,
        approveRequests: true,
        viewReports: true,
        systemSettings: false,
        manageRoles: false,
      },
    },
    {
      id: 3,
      name: 'Employee',
      description: 'Basic access to personal information and requests',
      userCount: 1207,
      color: 'gray',
      permissions: {
        manageUsers: false,
        manageEmployees: false,
        approveRequests: false,
        viewReports: false,
        systemSettings: false,
        manageRoles: false,
      },
    },
  ];

  const permissionLabels: Record<string, { title: string; description: string }> = {
    manageUsers: { title: 'Manage Users', description: 'Create, edit, and delete user accounts' },
    manageEmployees: { title: 'Manage Employees', description: 'View and edit employee data' },
    approveRequests: { title: 'Approve Requests', description: 'Approve time off and documents' },
    viewReports: { title: 'View Reports', description: 'Access analytics and reports' },
    systemSettings: { title: 'System Settings', description: 'Modify system configuration' },
    manageRoles: { title: 'Manage Roles', description: 'Create and edit user roles' },
  };

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      gray: 'bg-gray-100 text-gray-700 border-gray-200',
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Admin" userRole="HR Portal" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Role Management</p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Role Management</h1>
              <p className="text-gray-500 mt-1">Define and manage user roles and permissions</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create New Role
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {roles.map((role) => (
              <Card key={role.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getColorClass(role.color)}`}>
                        <Shield className="w-7 h-7" />
                      </div>
                      <div>
                        <CardTitle>{role.name}</CardTitle>
                        <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{role.userCount} users</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit2 className="w-4 h-4 mr-2" />
                      Edit Role
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Permissions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(role.permissions).map(([key, enabled]) => {
                        const permission = permissionLabels[key];
                        return (
                          <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-sm text-gray-900">{permission.title}</p>
                              <p className="text-xs text-gray-500">{permission.description}</p>
                            </div>
                            <Switch checked={enabled} disabled />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
