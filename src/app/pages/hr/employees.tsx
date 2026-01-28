import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Search, Filter, Plus, Download, Eye, Mail, MoreVertical } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';

export default function HREmployees() {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const employees = [
    {
      id: 'EMP-1024',
      name: 'Alice Johnson',
      email: 'alice.j@company.com',
      role: 'Senior Engineer',
      department: 'Engineering',
      status: 'complete',
      onboardingProgress: 100,
      joinDate: '2023-08-15',
      avatar: 'AJ',
    },
    {
      id: 'EMP-1025',
      name: 'Mark Smith',
      email: 'mark.s@company.com',
      role: 'Sales Associate',
      department: 'Sales',
      status: 'pending',
      onboardingProgress: 65,
      joinDate: '2023-10-01',
      avatar: 'MS',
    },
    {
      id: 'EMP-1022',
      name: 'Sarah Lee',
      email: 'sarah.l@company.com',
      role: 'Marketing Lead',
      department: 'Marketing',
      status: 'at-risk',
      onboardingProgress: 30,
      joinDate: '2023-10-15',
      avatar: 'SL',
    },
    {
      id: 'EMP-1026',
      name: 'David Kim',
      email: 'david.k@company.com',
      role: 'QA Engineer',
      department: 'Engineering',
      status: 'complete',
      onboardingProgress: 100,
      joinDate: '2023-07-20',
      avatar: 'DK',
    },
    {
      id: 'EMP-1027',
      name: 'Emma Wilson',
      email: 'emma.w@company.com',
      role: 'Product Manager',
      department: 'Product',
      status: 'pending',
      onboardingProgress: 75,
      joinDate: '2023-09-10',
      avatar: 'EW',
    },
    {
      id: 'EMP-1028',
      name: 'James Brown',
      email: 'james.b@company.com',
      role: 'UI Designer',
      department: 'Design',
      status: 'complete',
      onboardingProgress: 100,
      joinDate: '2023-06-05',
      avatar: 'JB',
    },
    {
      id: 'EMP-1029',
      name: 'Lisa Chen',
      email: 'lisa.c@company.com',
      role: 'DevOps Engineer',
      department: 'Engineering',
      status: 'complete',
      onboardingProgress: 100,
      joinDate: '2023-05-12',
      avatar: 'LC',
    },
    {
      id: 'EMP-1030',
      name: 'Michael Davis',
      email: 'michael.d@company.com',
      role: 'Sales Manager',
      department: 'Sales',
      status: 'pending',
      onboardingProgress: 45,
      joinDate: '2023-10-20',
      avatar: 'MD',
    },
  ];

  const stats = {
    total: employees.length,
    complete: employees.filter(e => e.status === 'complete').length,
    pending: employees.filter(e => e.status === 'pending').length,
    atRisk: employees.filter(e => e.status === 'at-risk').length,
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; className: string }> = {
      complete: { label: 'Complete', className: 'bg-green-100 text-green-700 border-green-200' },
      pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
      'at-risk': { label: 'At Risk', className: 'bg-red-100 text-red-700 border-red-200' },
    };

    const config = statusConfig[status] || statusConfig.pending;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const handleViewEmployee = (employeeId: string) => {
    navigate(`/hr/employees/${employeeId}`);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="HR Manager" userRole="Admin View" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Employees</p>
          </div>

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Employee Management</h1>
              <p className="text-gray-500 mt-1">Manage employee profiles and onboarding status</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Employee
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Employees</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Complete</p>
                    <p className="text-3xl font-bold text-green-600">{stats.complete}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
                    <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">At Risk</p>
                    <p className="text-3xl font-bold text-red-600">{stats.atRisk}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Employee Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Employees</CardTitle>
              <p className="text-sm text-gray-500 mt-1">View and manage employee records</p>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search employees..."
                    className="pl-10"
                  />
                </div>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="complete">Complete</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="at-risk">At Risk</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              {/* Table */}
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>EMPLOYEE</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>DEPARTMENT</TableHead>
                      <TableHead>JOIN DATE</TableHead>
                      <TableHead>ONBOARDING</TableHead>
                      <TableHead>STATUS</TableHead>
                      <TableHead>ACTIONS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id} className="cursor-pointer hover:bg-gray-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm">
                              {employee.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{employee.name}</p>
                              <p className="text-sm text-gray-500">{employee.role}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600">{employee.id}</TableCell>
                        <TableCell className="text-gray-600">{employee.department}</TableCell>
                        <TableCell className="text-gray-600">{employee.joinDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                              <div
                                className={`h-2 rounded-full ${
                                  employee.onboardingProgress === 100
                                    ? 'bg-green-600'
                                    : employee.onboardingProgress >= 50
                                    ? 'bg-blue-600'
                                    : 'bg-yellow-600'
                                }`}
                                style={{ width: `${employee.onboardingProgress}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 min-w-[40px]">
                              {employee.onboardingProgress}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(employee.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewEmployee(employee.id)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="w-4 h-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleViewEmployee(employee.id)}>
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                                <DropdownMenuItem>Send Message</DropdownMenuItem>
                                <DropdownMenuItem>View Documents</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  Remove Employee
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
                <p className="text-sm text-gray-600">Showing 1 to 8 of 124 entries</p>
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
                    3
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
    </div>
  );
}
