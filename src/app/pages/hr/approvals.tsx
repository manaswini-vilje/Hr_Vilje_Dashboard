import { useState } from 'react';
import { CheckCircle, XCircle, Clock, FileText, Calendar, User } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export default function HRApprovals() {
  const [activeTab, setActiveTab] = useState('pending');

  const approvals = [
    {
      id: 1,
      type: 'document',
      title: 'ID Document Verification',
      employee: 'Mark Smith',
      employeeId: 'EMP-1025',
      submitDate: '2023-10-22',
      status: 'pending',
      description: 'Passport copy submitted for verification',
      avatar: 'MS',
    },
    {
      id: 2,
      type: 'timeoff',
      title: 'Vacation Request',
      employee: 'Alice Johnson',
      employeeId: 'EMP-1024',
      submitDate: '2023-10-20',
      status: 'pending',
      description: 'Nov 15-19, 2023 (5 days)',
      avatar: 'AJ',
    },
    {
      id: 3,
      type: 'document',
      title: 'Bank Details Form',
      employee: 'Emma Wilson',
      employeeId: 'EMP-1027',
      submitDate: '2023-10-21',
      status: 'pending',
      description: 'Direct deposit setup form',
      avatar: 'EW',
    },
    {
      id: 4,
      type: 'timeoff',
      title: 'Sick Leave Request',
      employee: 'David Kim',
      employeeId: 'EMP-1026',
      submitDate: '2023-10-18',
      status: 'approved',
      description: 'Oct 25, 2023 (1 day)',
      avatar: 'DK',
    },
    {
      id: 5,
      type: 'document',
      title: 'Tax Form W-4',
      employee: 'Sarah Lee',
      employeeId: 'EMP-1022',
      submitDate: '2023-10-17',
      status: 'rejected',
      description: 'Missing signature',
      avatar: 'SL',
    },
  ];

  const stats = {
    pending: approvals.filter(a => a.status === 'pending').length,
    approved: approvals.filter(a => a.status === 'approved').length,
    rejected: approvals.filter(a => a.status === 'rejected').length,
  };

  const getTypeIcon = (type: string) => {
    return type === 'document' ? FileText : Calendar;
  };

  const getTypeColor = (type: string) => {
    return type === 'document' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700';
  };

  const filterApprovals = (status: string) => {
    if (status === 'all') return approvals;
    return approvals.filter(a => a.status === status);
  };

  const handleApprove = (id: number) => {
    console.log('Approve:', id);
  };

  const handleReject = (id: number) => {
    console.log('Reject:', id);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="HR Manager" userRole="Admin View" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Approvals</p>
          </div>

          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900">Pending Approvals</h1>
            <p className="text-gray-500 mt-1">Review and approve employee requests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
                    <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Approved</p>
                    <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Rejected</p>
                    <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="pending">
                    Pending ({stats.pending})
                  </TabsTrigger>
                  <TabsTrigger value="approved">
                    Approved ({stats.approved})
                  </TabsTrigger>
                  <TabsTrigger value="rejected">
                    Rejected ({stats.rejected})
                  </TabsTrigger>
                  <TabsTrigger value="all">
                    All
                  </TabsTrigger>
                </TabsList>

                {['pending', 'approved', 'rejected', 'all'].map(status => (
                  <TabsContent key={status} value={status} className="space-y-3">
                    {filterApprovals(status).map(approval => {
                      const Icon = getTypeIcon(approval.type);
                      return (
                        <div key={approval.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4 flex-1">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
                                {approval.avatar}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge className={getTypeColor(approval.type)} variant="outline">
                                    <Icon className="w-3 h-3 mr-1" />
                                    {approval.type === 'document' ? 'Document' : 'Time Off'}
                                  </Badge>
                                  <h4 className="font-semibold text-gray-900">{approval.title}</h4>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                  <User className="w-4 h-4" />
                                  <span>{approval.employee}</span>
                                  <span className="text-gray-400">•</span>
                                  <span>{approval.employeeId}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{approval.description}</p>
                                <p className="text-xs text-gray-500">Submitted on {approval.submitDate}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 ml-4">
                              {approval.status === 'pending' ? (
                                <>
                                  <Button
                                    size="sm"
                                    className="bg-green-600 hover:bg-green-700"
                                    onClick={() => handleApprove(approval.id)}
                                  >
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Approve
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-red-600 border-red-200 hover:bg-red-50"
                                    onClick={() => handleReject(approval.id)}
                                  >
                                    <XCircle className="w-4 h-4 mr-1" />
                                    Reject
                                  </Button>
                                </>
                              ) : (
                                <Badge className={
                                  approval.status === 'approved'
                                    ? 'bg-green-100 text-green-700 border-green-200'
                                    : 'bg-red-100 text-red-700 border-red-200'
                                }>
                                  {approval.status === 'approved' ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
                                  {approval.status.charAt(0).toUpperCase() + approval.status.slice(1)}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
