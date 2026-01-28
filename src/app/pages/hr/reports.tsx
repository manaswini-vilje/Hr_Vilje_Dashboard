import { Users, TrendingUp, UserCheck, UserPlus, Download, Calendar } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export default function HRReports() {
  const departmentData = [
    { name: 'Engineering', count: 45 },
    { name: 'Sales', count: 28 },
    { name: 'Marketing', count: 18 },
    { name: 'Product', count: 15 },
    { name: 'Design', count: 12 },
    { name: 'HR', count: 6 },
  ];

  const onboardingData = [
    { name: 'Complete', value: 85, color: '#10b981' },
    { name: 'In Progress', value: 12, color: '#3b82f6' },
    { name: 'At Risk', value: 3, color: '#ef4444' },
  ];

  const monthlyHires = [
    { month: 'Jun', hires: 8 },
    { month: 'Jul', hires: 12 },
    { month: 'Aug', hires: 15 },
    { month: 'Sep', hires: 10 },
    { month: 'Oct', hires: 18 },
    { month: 'Nov', hires: 14 },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="HR Manager" userRole="Admin View" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Reports</p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Reports & Analytics</h1>
              <p className="text-gray-500 mt-1">Track workforce metrics and insights</p>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all-time">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-time">All Time</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                  <SelectItem value="this-quarter">This Quarter</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Employees</p>
                    <p className="text-3xl font-bold text-gray-900">124</p>
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +8% vs last month
                    </p>
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
                    <p className="text-sm font-medium text-gray-600 mb-1">New Hires (MTD)</p>
                    <p className="text-3xl font-bold text-gray-900">18</p>
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +45% vs last month
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Active Onboarding</p>
                    <p className="text-3xl font-bold text-gray-900">12</p>
                    <p className="text-xs text-gray-500 mt-1">In progress</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Avg. Onboarding Time</p>
                    <p className="text-3xl font-bold text-gray-900">12</p>
                    <p className="text-xs text-gray-500 mt-1">Days</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Department Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Employees by Department</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Total headcount distribution</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={departmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Onboarding Status */}
            <Card>
              <CardHeader>
                <CardTitle>Onboarding Status</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Current onboarding completion</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={onboardingData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {onboardingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                  {onboardingData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-gray-600">{item.name}: {item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hiring Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Hiring Trend</CardTitle>
              <p className="text-sm text-gray-500 mt-1">New employee hires over time</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyHires}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="hires" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
