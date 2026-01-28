import { useState } from 'react';
import { Users, Shield, Activity, Plus, MoreVertical } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'hr' | 'employee';
  status: 'Active' | 'Inactive';
  lastActive: string;
  avatar: string;
}

export default function AdminDashboard() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [newRole, setNewRole] = useState('');
  const [selectedRole, setSelectedRole] = useState('all-roles');
  const [selectedStatus, setSelectedStatus] = useState('all-statuses');

  const stats = [
    { title: 'Total Users', value: '1,243', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { title: 'Active Sessions', value: '892', icon: Activity, color: 'bg-green-100 text-green-600' },
    { title: 'Admins', value: '12', icon: Shield, color: 'bg-purple-100 text-purple-600' },
  ];

  const [users, setUsers] = useState<User[]>([
    {
      id: 'USR-001',
      name: 'Sarah Jenkins',
      email: 'sarah.j@company.com',
      role: 'admin',
      status: 'Active',
      lastActive: '2 mins ago',
      avatar: 'SJ',
    },
    {
      id: 'USR-002',
      name: 'Michael Chen',
      email: 'michael.c@company.com',
      role: 'hr',
      status: 'Active',
      lastActive: '1 hour ago',
      avatar: 'MC',
    },
    {
      id: 'USR-003',
      name: 'Emma Wilson',
      email: 'emma.w@company.com',
      role: 'employee',
      status: 'Active',
      lastActive: '5 hours ago',
      avatar: 'EW',
    },
    {
      id: 'USR-004',
      name: 'David Kim',
      email: 'david.k@company.com',
      role: 'employee',
      status: 'Inactive',
      lastActive: '2 days ago',
      avatar: 'DK',
    },
    {
      id: 'USR-005',
      name: 'Lisa Anderson',
      email: 'lisa.a@company.com',
      role: 'hr',
      status: 'Active',
      lastActive: '3 mins ago',
      avatar: 'LA',
    },
  ]);

  const handleEditRole = (user: User) => {
    setSelectedUser(user);
    setNewRole(user.role);
    setIsRoleModalOpen(true);
  };

  const handleSaveRole = () => {
    if (selectedUser && newRole) {
      setUsers(users.map(u =>
        u.id === selectedUser.id
          ? { ...u, role: newRole as User['role'] }
          : u
      ));
      setIsRoleModalOpen(false);
      setSelectedUser(null);
    }
  };

  const getRoleBadge = (role: string) => {
    const roleConfig: Record<string, { label: string; className: string }> = {
      'admin': { label: 'Admin', className: 'bg-purple-100 text-purple-700 border-purple-200' },
      'hr': { label: 'HR Manager', className: 'bg-blue-100 text-blue-700 border-blue-200' },
      'employee': { label: 'Employee', className: 'bg-gray-100 text-gray-700 border-gray-200' },
    };

    const config = roleConfig[role] || roleConfig['employee'];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    return status === 'Active' ? (
      <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
    ) : (
      <Badge variant="outline" className="bg-gray-100 text-gray-700">Inactive</Badge>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Admin" userRole="HR Portal" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / User Management</p>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900">User Management</h1>
            <p className="text-gray-500 mt-1">Create, edit, and manage user roles and permissions for all employees.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* User Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Users</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">Manage user access and permissions</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Roles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-roles">All Roles</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="hr-manager">HR Manager</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-statuses">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Table */}
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>USER</TableHead>
                      <TableHead>ROLE</TableHead>
                      <TableHead>STATUS</TableHead>
                      <TableHead>LAST ACTIVE</TableHead>
                      <TableHead className="text-right">ACTIONS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm">
                              {user.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="text-gray-600">{user.lastActive}</TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="ghost">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleEditRole(user)}>
                                  Edit Role
                                </DropdownMenuItem>
                                <DropdownMenuItem>View Profile</DropdownMenuItem>
                                <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                <DropdownMenuItem>
                                  {user.status === 'Active' ? 'Deactivate' : 'Activate'} User
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  Delete User
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-600">Showing 1 to 5 of 1,243 entries</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Edit Role Modal */}
      <Dialog open={isRoleModalOpen} onOpenChange={setIsRoleModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit User Role</DialogTitle>
            <DialogDescription>
              Update user permissions by changing their role
            </DialogDescription>
          </DialogHeader>

          {selectedUser && (
            <div className="space-y-4 py-4">
              {/* User Info */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
                  {selectedUser.avatar}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{selectedUser.name}</p>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assign Role
                </label>
                <Select value={newRole} onValueChange={setNewRole}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="hr">HR Manager</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-blue-600 mt-2">
                  Changing this role will update user permissions immediately.
                </p>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setIsRoleModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveRole}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
