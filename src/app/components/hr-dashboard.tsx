import { useState } from 'react';
import { Users, UserPlus, Clock, AlertCircle, TrendingUp, Eye, MoreVertical, Plus } from 'lucide-react';
import Sidebar from '@/app/components/layout/sidebar';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

export default function HRDashboard() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const stats = [
    {
      title: 'Total Employees',
      value: '124',
      change: '+4% from last month',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Pending Onboarding',
      value: '12',
      change: 'Requires documentation check',
      trend: 'neutral',
      icon: UserPlus,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Pending Approvals',
      value: '5',
      change: 'Action required today',
      trend: 'warning',
      icon: Clock,
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const employees = [
    {
      id: 'EMP-1024',
      name: 'Alice Johnson',
      role: 'Senior Engineer',
      department: 'Engineering',
      status: 'complete',
      avatar: 'AJ',
    },
    {
      id: 'EMP-1025',
      name: 'Mark Smith',
      role: 'Sales Associate',
      department: 'Sales',
      status: 'pending',
      avatar: 'MS',
    },
    {
      id: 'EMP-1022',
      name: 'Sarah Lee',
      role: 'Marketing Lead',
      department: 'Marketing',
      status: 'at-risk',
      avatar: 'SL',
    },
    {
      id: 'EMP-1026',
      name: 'David Kim',
      role: 'QA Engineer',
      department: 'Engineering',
      status: 'complete',
      avatar: 'DK',
    },
    {
      id: 'EMP-1027',
      name: 'Emma Wilson',
      role: 'Product Manager',
      department: 'Product',
      status: 'pending',
      avatar: 'EW',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; className: string }> = {
      complete: { label: 'Complete', className: 'bg-green-100 text-green-700 border-green-200' },
      pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
      'at-risk': { label: 'At Risk', className: 'bg-red-100 text-red-700 border-red-200' },
    };

    const config = statusConfig[status] || statusConfig.pending;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const handleApprove = (employeeId: string) => {
    console.log('Approve:', employeeId);
  };

  const handleReject = (employeeId: string) => {
    console.log('Reject:', employeeId);
  };

  const handleView = (employeeId: string) => {
    console.log('View:', employeeId);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="hr" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="HR Manager" userRole="Admin View" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900">Overview</h1>
            <p className="text-gray-500 mt-1">Welcome back, Manager. Here's what's happening today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <div className="flex items-center gap-1">
                        {stat.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                        {stat.trend === 'warning' && <AlertCircle className="w-4 h-4 text-orange-600" />}
                        <p className={`text-sm ${
                          stat.trend === 'up' ? 'text-green-600' :
                          stat.trend === 'warning' ? 'text-orange-600' :
                          'text-gray-500'
                        }`}>
                          {stat.change}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Employee Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Employees</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">Manage and monitor employee onboarding status</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Employee
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search employees..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  </SelectContent>
                </Select>
                <Select defaultValue="all-statuses">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-statuses">All Statuses</SelectItem>
                    <SelectItem value="complete">Complete</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="at-risk">At Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Table */}
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>EMPLOYEE</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>DEPARTMENT</TableHead>
                      <TableHead>STATUS</TableHead>
                      <TableHead>ACTIONS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id}>
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
                        <TableCell>{getStatusBadge(employee.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {employee.status === 'pending' && (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleView(employee.id)}
                                  className="text-gray-700"
                                >
                                  Review
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => handleApprove(employee.id)}
                                  className="bg-blue-600 hover:bg-blue-700"
                                >
                                  Approve
                                </Button>
                              </>
                            )}
                            {employee.status === 'at-risk' && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-200 hover:bg-red-50"
                                onClick={() => handleView(employee.id)}
                              >
                                Contact
                              </Button>
                            )}
                            {employee.status === 'complete' && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleView(employee.id)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="ghost">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleView(employee.id)}>
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                                <DropdownMenuItem>Send Message</DropdownMenuItem>
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
                <p className="text-sm text-gray-600">Showing 1 to 5 of 124 entries</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
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
