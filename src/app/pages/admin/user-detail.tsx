import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Calendar, Shield, Key, Trash2 } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Separator } from '@/app/components/ui/separator';
import { Switch } from '@/app/components/ui/switch';

export default function AdminUserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = {
    id: id || 'USR-002',
    name: 'Michael Chen',
    email: 'michael.c@company.com',
    role: 'hr',
    status: 'Active',
    lastActive: '1 hour ago',
    createdDate: '2023-05-15',
    avatar: 'MC',
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Admin" userRole="HR Portal" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-4 flex items-center gap-2">
            <button
              onClick={() => navigate('/admin/users')}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Users
            </button>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">User Details</h1>
              <p className="text-gray-500 mt-1">View and manage user information</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete User
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Save Changes
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-medium mb-4">
                      {user.avatar}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{user.id}</p>

                    <Badge className="mt-3 bg-green-100 text-green-700 border-green-200">
                      {user.status}
                    </Badge>

                    <Separator className="my-6" />

                    <div className="w-full space-y-3 text-left">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{user.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Joined {user.createdDate}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Shield className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Last active {user.lastActive}</span>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="w-full space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Key className="w-4 h-4 mr-2" />
                        Reset Password
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Deactivate Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Michael" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Chen" className="mt-1" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue={user.email} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="userId">User ID</Label>
                      <Input id="userId" defaultValue={user.id} disabled className="mt-1 bg-gray-100" />
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select defaultValue="active">
                        <SelectTrigger id="status" className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Role & Permissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="role">User Role</Label>
                      <Select defaultValue={user.role}>
                        <SelectTrigger id="role" className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employee">Employee</SelectItem>
                          <SelectItem value="hr">HR Manager</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500 mt-2">
                        Changing this role will update user permissions immediately.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Permissions</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm text-gray-900">Manage Employees</p>
                            <p className="text-xs text-gray-500">View and edit employee data</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm text-gray-900">Approve Requests</p>
                            <p className="text-xs text-gray-500">Approve time off and documents</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm text-gray-900">View Reports</p>
                            <p className="text-xs text-gray-500">Access analytics and reports</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm text-gray-900">Manage Users</p>
                            <p className="text-xs text-gray-500">Create and edit user accounts</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-gray-900">Logged in to the system</p>
                        <p className="text-gray-500 text-xs">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-gray-900">Approved document for EMP-1025</p>
                        <p className="text-gray-500 text-xs">3 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-gray-900">Updated employee profile</p>
                        <p className="text-gray-500 text-xs">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
