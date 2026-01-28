import { useState } from 'react';
import { CheckCircle2, Circle, Clock, Calendar, ArrowRight, Filter } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Progress } from '@/app/components/ui/progress';

export default function EmployeeTasks() {
  const [activeTab, setActiveTab] = useState('all');

  const tasks = [
    {
      id: 1,
      title: 'Complete Employee Profile',
      description: 'Add your emergency contacts, bank details, and personal information.',
      dueDate: '2023-10-25',
      priority: 'high',
      status: 'in-progress',
      category: 'Onboarding',
      progress: 60,
    },
    {
      id: 2,
      title: 'Upload ID Documents',
      description: 'Passport or Driving License required for verification.',
      dueDate: '2023-10-24',
      priority: 'high',
      status: 'in-progress',
      category: 'Documents',
      progress: 40,
    },
    {
      id: 3,
      title: 'Sign Policy Documents',
      description: 'Review and sign the Code of Conduct and NDA.',
      dueDate: '2023-10-20',
      priority: 'medium',
      status: 'completed',
      category: 'Legal',
      progress: 100,
    },
    {
      id: 4,
      title: 'Complete IT Security Training',
      description: 'Mandatory security training for all employees.',
      dueDate: '2023-10-28',
      priority: 'medium',
      status: 'pending',
      category: 'Training',
      progress: 0,
    },
    {
      id: 5,
      title: 'Set Up Direct Deposit',
      description: 'Provide bank account information for payroll.',
      dueDate: '2023-10-26',
      priority: 'high',
      status: 'pending',
      category: 'Payroll',
      progress: 0,
    },
    {
      id: 6,
      title: 'Schedule 1:1 with Manager',
      description: 'Book your first one-on-one meeting with your direct manager.',
      dueDate: '2023-10-23',
      priority: 'medium',
      status: 'completed',
      category: 'Onboarding',
      progress: 100,
    },
    {
      id: 7,
      title: 'Review Company Benefits',
      description: 'Learn about health insurance, 401k, and other benefits.',
      dueDate: '2023-10-30',
      priority: 'low',
      status: 'pending',
      category: 'Benefits',
      progress: 0,
    },
    {
      id: 8,
      title: 'Complete W-4 Tax Form',
      description: 'Fill out federal tax withholding form.',
      dueDate: '2023-10-27',
      priority: 'high',
      status: 'in-progress',
      category: 'Tax',
      progress: 50,
    },
  ];

  const getPriorityBadge = (priority: string) => {
    const config: Record<string, { className: string }> = {
      high: { className: 'bg-red-100 text-red-700 border-red-200' },
      medium: { className: 'bg-orange-100 text-orange-700 border-orange-200' },
      low: { className: 'bg-gray-100 text-gray-700 border-gray-200' },
    };
    return <Badge className={config[priority].className}>{priority.toUpperCase()}</Badge>;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (status === 'in-progress') return <Clock className="w-5 h-5 text-blue-600" />;
    return <Circle className="w-5 h-5 text-gray-400" />;
  };

  const filterTasks = (status: string) => {
    if (status === 'all') return tasks;
    return tasks.filter(task => task.status === status);
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    pending: tasks.filter(t => t.status === 'pending').length,
  };

  const completionRate = Math.round((stats.completed / stats.total) * 100);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Alex Johnson" userRole="Product Designer" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Tasks</p>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900">My Tasks</h1>
            <p className="text-gray-500 mt-1">Track and complete your onboarding and work tasks</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Stats */}
            <div className="lg:col-span-1 space-y-6">
              {/* Overall Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Overall Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{completionRate}%</div>
                    <p className="text-sm text-gray-600">Tasks Completed</p>
                  </div>
                  <Progress value={completionRate} className="h-2" />
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Completed</span>
                      <span className="font-semibold text-green-600">{stats.completed}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">In Progress</span>
                      <span className="font-semibold text-blue-600">{stats.inProgress}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Pending</span>
                      <span className="font-semibold text-gray-600">{stats.pending}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    High Priority
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Due This Week
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Onboarding Tasks
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>All Tasks</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                      <TabsTrigger value="all">
                        All ({stats.total})
                      </TabsTrigger>
                      <TabsTrigger value="pending">
                        Pending ({stats.pending})
                      </TabsTrigger>
                      <TabsTrigger value="in-progress">
                        In Progress ({stats.inProgress})
                      </TabsTrigger>
                      <TabsTrigger value="completed">
                        Completed ({stats.completed})
                      </TabsTrigger>
                    </TabsList>

                    {['all', 'pending', 'in-progress', 'completed'].map(status => (
                      <TabsContent key={status} value={status} className="space-y-4">
                        {filterTasks(status).map(task => (
                          <Card key={task.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-4">
                                <div className="mt-1">
                                  {getStatusIcon(task.status)}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <h4 className="font-semibold text-gray-900 mb-1">
                                        {task.title}
                                      </h4>
                                      <p className="text-sm text-gray-600 mb-2">
                                        {task.description}
                                      </p>
                                    </div>
                                    {getPriorityBadge(task.priority)}
                                  </div>

                                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-4 h-4" />
                                      Due: {task.dueDate}
                                    </div>
                                    <Badge variant="outline" className="bg-gray-50">
                                      {task.category}
                                    </Badge>
                                  </div>

                                  {task.status === 'in-progress' && (
                                    <div className="mb-3">
                                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                                        <span>Progress</span>
                                        <span>{task.progress}%</span>
                                      </div>
                                      <Progress value={task.progress} className="h-1.5" />
                                    </div>
                                  )}

                                  <div className="flex items-center gap-2">
                                    {task.status === 'completed' ? (
                                      <Button variant="outline" size="sm">
                                        View Details
                                      </Button>
                                    ) : task.status === 'in-progress' ? (
                                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                        Continue
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                      </Button>
                                    ) : (
                                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                        Start Task
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
