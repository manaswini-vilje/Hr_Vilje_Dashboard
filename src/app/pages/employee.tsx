import { Hand, ArrowRight, FileText, CheckCircle2, Calendar, GraduationCap, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Progress } from '@/app/components/ui/progress';
import { Badge } from '@/app/components/ui/badge';

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const onboardingProgress = 65;
  const currentStep = 'Documents';

  const tasks = [
    {
      id: 1,
      title: 'Upload ID Documents',
      description: 'Passport or Driving License required for verification.',
      status: 'in-progress',
      icon: FileText,
      image: 'passport-doc',
    },
    {
      id: 2,
      title: 'Complete Profile',
      description: 'Add your emergency contacts and bank details.',
      status: 'pending',
      icon: FileText,
      image: 'profile-avatar',
    },
    {
      id: 3,
      title: 'Sign Policy Documents',
      description: 'Code of Conduct and NDA signed.',
      status: 'done',
      icon: CheckCircle2,
      image: 'check-badge',
    },
  ];

  const quickActions = [
    { title: 'Request Time Off', subtitle: 'Plan your holidays', icon: Calendar, color: 'blue', path: '/employee/time-off' },
    { title: 'View Payslip', subtitle: 'Latest: Oct 2023', icon: FileText, color: 'green', path: '/employee/payslip' },
    { title: 'Learning Hub', subtitle: '2 courses pending', icon: GraduationCap, color: 'purple', path: '/employee/tasks' },
  ];

  const upcomingEvents = [
    { date: 'OCT 24', title: 'Team Lunch', time: '12:00 PM • Cafeteria' },
  ];

  const hrContact = {
    name: 'Sarah Miller',
    role: 'People Operations',
    avatar: 'SM',
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Alex Johnson" userRole="Product Designer" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-2">
              Welcome, Alex! <Hand className="w-7 h-7 text-yellow-500" />
            </h1>
            <p className="text-gray-500 mt-1">Here is what you need to do today to complete your onboarding.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Onboarding Progress */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Onboarding Progress</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">Step 2 of 3: {currentStep}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-blue-600">{onboardingProgress}%</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={onboardingProgress} className="h-2" />
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>Profile Setup</span>
                    <span>Documents</span>
                    <span>Team Intro</span>
                  </div>
                </CardContent>
              </Card>

              {/* Your Tasks */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Your Tasks</h2>
                  <button 
                    onClick={() => navigate('/employee/tasks')}
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  {tasks.map((task) => {
                    const Icon = task.icon;
                    const getStatusBadge = (status: string) => {
                      if (status === 'done') return <Badge className="bg-green-100 text-green-700 border-green-200">Done</Badge>;
                      if (status === 'in-progress') return <Badge className="bg-blue-100 text-blue-700 border-blue-200">In Progress</Badge>;
                      return <Badge variant="outline" className="bg-gray-100 text-gray-700">Pending</Badge>;
                    };

                    const getImageBg = (image: string) => {
                      if (image === 'passport-doc') return 'bg-gradient-to-br from-orange-100 to-orange-200';
                      if (image === 'profile-avatar') return 'bg-gradient-to-br from-gray-200 to-gray-300';
                      return 'bg-gradient-to-br from-green-100 to-green-200';
                    };

                    const getImageIcon = (image: string) => {
                      if (image === 'passport-doc') return <FileText className="w-12 h-12 text-orange-600" />;
                      if (image === 'profile-avatar') return <div className="w-16 h-16 bg-gray-400 rounded-full" />;
                      return <CheckCircle2 className="w-12 h-12 text-green-600" />;
                    };

                    return (
                      <Card key={task.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-32 h-24 ${getImageBg(task.image)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              {getImageIcon(task.image)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                  {getStatusBadge(task.status)}
                                  <h3 className="font-semibold text-gray-900">{task.title}</h3>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-4">{task.description}</p>
                              <Button
                                variant={task.status === 'done' ? 'outline' : 'default'}
                                size="sm"
                                className={task.status === 'done' ? '' : 'bg-blue-600 hover:bg-blue-700'}
                              >
                                {task.status === 'done' ? (
                                  <>
                                    View Document <ExternalLink className="w-4 h-4 ml-2" />
                                  </>
                                ) : task.status === 'in-progress' ? (
                                  <>
                                    Resume <ArrowRight className="w-4 h-4 ml-2" />
                                  </>
                                ) : (
                                  'Start Task'
                                )}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    const colorMap: Record<string, string> = {
                      blue: 'bg-blue-100 text-blue-600',
                      green: 'bg-green-100 text-green-600',
                      purple: 'bg-purple-100 text-purple-600',
                    };

                    return (
                      <button
                        key={index}
                        onClick={() => navigate(action.path)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorMap[action.color]}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{action.title}</p>
                          <p className="text-xs text-gray-500">{action.subtitle}</p>
                        </div>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>

              {/* HR Contact */}
              <Card className="bg-blue-50 border-blue-100">
                <CardHeader>
                  <p className="text-sm font-medium text-blue-900">YOUR HR CONTACT</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
                      {hrContact.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{hrContact.name}</p>
                      <p className="text-sm text-gray-600">{hrContact.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => navigate('/employee/messages')}
                      className="flex-1 bg-white text-blue-700 hover:bg-blue-100 border border-blue-200"
                    >
                      Message
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Upcoming Events</CardTitle>
                    <button className="text-sm text-blue-600 hover:text-blue-700">See all</button>
                  </div>
                </CardHeader>
                <CardContent>
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="text-center">
                        <p className="text-xs font-semibold text-blue-600">{event.date}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <p className="text-xs text-gray-500">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}