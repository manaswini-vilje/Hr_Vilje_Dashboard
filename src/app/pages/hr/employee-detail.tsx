import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, FileText, CheckCircle2, Clock, Download, MessageSquare } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import { Separator } from '@/app/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export default function HREmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock employee data
  const employee = {
    id: id || 'EMP-1025',
    name: 'Mark Smith',
    email: 'mark.s@company.com',
    phone: '+1 (555) 234-5678',
    role: 'Sales Associate',
    department: 'Sales',
    joinDate: '2023-10-01',
    status: 'pending',
    onboardingProgress: 65,
    avatar: 'MS',
    address: '456 Oak Avenue, Apt 12, San Francisco, CA 94103',
    manager: 'Jennifer Wilson',
    emergencyContact: 'Jane Smith (+1 555-987-6543)',
  };

  const onboardingTasks = [
    { id: 1, title: 'Complete Profile', status: 'completed', dueDate: '2023-10-05' },
    { id: 2, title: 'Upload ID Documents', status: 'in-progress', dueDate: '2023-10-08' },
    { id: 3, title: 'Sign Policy Documents', status: 'completed', dueDate: '2023-10-03' },
    { id: 4, title: 'IT Setup', status: 'pending', dueDate: '2023-10-10' },
    { id: 5, title: 'Benefits Enrollment', status: 'pending', dueDate: '2023-10-12' },
  ];

  const documents = [
    { id: 1, name: 'Employment Contract', status: 'approved', uploadDate: '2023-10-01' },
    { id: 2, name: 'ID Document', status: 'pending', uploadDate: '2023-10-05' },
    { id: 3, name: 'NDA Agreement', status: 'approved', uploadDate: '2023-10-02' },
  ];

  const getStatusBadge = (status: string) => {
    const config: Record<string, { className: string; icon: any }> = {
      completed: { className: 'bg-green-100 text-green-700 border-green-200', icon: CheckCircle2 },
      'in-progress': { className: 'bg-blue-100 text-blue-700 border-blue-200', icon: Clock },
      pending: { className: 'bg-yellow-100 text-yellow-700 border-yellow-200', icon: Clock },
      approved: { className: 'bg-green-100 text-green-700 border-green-200', icon: CheckCircle2 },
    };
    const statusConfig = config[status] || config.pending;
    const Icon = statusConfig.icon;
    return (
      <Badge className={statusConfig.className}>
        <Icon className="w-3 h-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="HR Manager" userRole="Admin View" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2">
            <button
              onClick={() => navigate('/hr/employees')}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Employees
            </button>
          </div>

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Employee Details</h1>
              <p className="text-gray-500 mt-1">View and manage employee information</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Edit Profile
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
                      {employee.avatar}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{employee.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{employee.role}</p>
                    <p className="text-sm text-gray-500">{employee.id}</p>

                    <Badge className="mt-3 bg-yellow-100 text-yellow-700 border-yellow-200">
                      Onboarding
                    </Badge>

                    <Separator className="my-6" />

                    <div className="w-full space-y-3 text-left">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{employee.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{employee.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{employee.department}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Joined {employee.joinDate}</span>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="w-full">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Onboarding Progress</h4>
                      <div className="mb-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-2xl font-bold text-blue-600">{employee.onboardingProgress}%</span>
                        </div>
                        <Progress value={employee.onboardingProgress} className="h-2" />
                      </div>
                      <p className="text-xs text-gray-500">3 of 5 tasks completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-medium text-gray-900">{employee.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Employee ID</p>
                          <p className="font-medium text-gray-900">{employee.id}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium text-gray-900">{employee.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium text-gray-900">{employee.phone}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500">Address</p>
                          <p className="font-medium text-gray-900">{employee.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Employment Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Position</p>
                          <p className="font-medium text-gray-900">{employee.role}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Department</p>
                          <p className="font-medium text-gray-900">{employee.department}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Start Date</p>
                          <p className="font-medium text-gray-900">{employee.joinDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Manager</p>
                          <p className="font-medium text-gray-900">{employee.manager}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Emergency Contact</p>
                          <p className="font-medium text-gray-900">{employee.emergencyContact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="onboarding" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Onboarding Tasks</CardTitle>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          {onboardingTasks.filter(t => t.status === 'completed').length} / {onboardingTasks.length}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {onboardingTasks.map((task) => (
                          <div key={task.id} className="p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="font-medium text-gray-900">{task.title}</h4>
                                  {getStatusBadge(task.status)}
                                </div>
                                <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                              </div>
                              {task.status === 'pending' && (
                                <Button size="sm" variant="outline">
                                  Remind
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Uploaded Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {documents.map((doc) => (
                          <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{doc.name}</h4>
                                <p className="text-sm text-gray-500">Uploaded {doc.uploadDate}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {getStatusBadge(doc.status)}
                              {doc.status === 'pending' && (
                                <>
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    Approve
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-red-600 border-red-200">
                                    Reject
                                  </Button>
                                </>
                              )}
                              <Button size="sm" variant="ghost">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
