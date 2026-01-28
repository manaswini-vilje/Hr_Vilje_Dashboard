import { useState } from 'react';
import { Calendar, Clock, CheckCircle2, XCircle, AlertCircle, Plus } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';

export default function EmployeeTimeOff() {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [requestType, setRequestType] = useState('');

  const balances = [
    { type: 'Vacation', available: 15, used: 5, total: 20, color: 'blue' },
    { type: 'Sick Leave', available: 8, used: 2, total: 10, color: 'green' },
    { type: 'Personal', available: 3, used: 2, total: 5, color: 'purple' },
  ];

  const requests = [
    {
      id: 1,
      type: 'Vacation',
      startDate: '2023-11-15',
      endDate: '2023-11-19',
      days: 5,
      status: 'approved',
      requestedDate: '2023-10-20',
      approver: 'Sarah Miller',
      reason: 'Family vacation',
    },
    {
      id: 2,
      type: 'Sick Leave',
      startDate: '2023-10-18',
      endDate: '2023-10-18',
      days: 1,
      status: 'approved',
      requestedDate: '2023-10-18',
      approver: 'Sarah Miller',
      reason: 'Medical appointment',
    },
    {
      id: 3,
      type: 'Personal',
      startDate: '2023-10-25',
      endDate: '2023-10-25',
      days: 1,
      status: 'pending',
      requestedDate: '2023-10-22',
      approver: 'Sarah Miller',
      reason: 'Personal matters',
    },
    {
      id: 4,
      type: 'Vacation',
      startDate: '2023-09-10',
      endDate: '2023-09-12',
      days: 3,
      status: 'approved',
      requestedDate: '2023-08-25',
      approver: 'Sarah Miller',
      reason: 'Weekend getaway',
    },
    {
      id: 5,
      type: 'Sick Leave',
      startDate: '2023-08-15',
      endDate: '2023-08-15',
      days: 1,
      status: 'rejected',
      requestedDate: '2023-08-15',
      approver: 'Sarah Miller',
      reason: 'Not feeling well',
      rejectionReason: 'Insufficient notice provided',
    },
  ];

  const upcomingTimeOff = requests.filter(
    r => r.status === 'approved' && new Date(r.startDate) > new Date()
  );

  const getStatusBadge = (status: string) => {
    const config: Record<string, { className: string; icon: any }> = {
      approved: {
        className: 'bg-green-100 text-green-700 border-green-200',
        icon: CheckCircle2,
      },
      pending: {
        className: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        icon: Clock,
      },
      rejected: {
        className: 'bg-red-100 text-red-700 border-red-200',
        icon: XCircle,
      },
    };

    const statusConfig = config[status];
    const Icon = statusConfig.icon;

    return (
      <Badge className={statusConfig.className}>
        <Icon className="w-3 h-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      Vacation: 'bg-blue-100 text-blue-700',
      'Sick Leave': 'bg-green-100 text-green-700',
      Personal: 'bg-purple-100 text-purple-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Alex Johnson" userRole="Product Designer" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Time Off</p>
          </div>

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Time Off</h1>
              <p className="text-gray-500 mt-1">Request and manage your time off</p>
            </div>
            <Button
              onClick={() => setIsRequestOpen(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Request Time Off
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Time Off Balances */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {balances.map((balance, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{balance.type}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">
                              {balance.available}
                            </span>
                            <span className="text-sm text-gray-500">/ {balance.total} days</span>
                          </div>
                        </div>
                        <div className={`w-12 h-12 rounded-lg bg-${balance.color}-100 flex items-center justify-center`}>
                          <Calendar className={`w-6 h-6 text-${balance.color}-600`} />
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{balance.used}</span> days used
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Request History */}
              <Card>
                <CardHeader>
                  <CardTitle>Request History</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">View all your time off requests</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {requests.map((request) => (
                      <div
                        key={request.id}
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Badge className={getTypeColor(request.type)} variant="outline">
                              {request.type}
                            </Badge>
                            {getStatusBadge(request.status)}
                          </div>
                          <span className="text-sm text-gray-500">{request.days} {request.days === 1 ? 'day' : 'days'}</span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-900 font-medium">
                              {request.startDate}
                              {request.startDate !== request.endDate && ` - ${request.endDate}`}
                            </span>
                          </div>

                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Reason:</span> {request.reason}
                          </p>

                          {request.status === 'rejected' && request.rejectionReason && (
                            <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                              <span className="font-medium">Rejection reason:</span> {request.rejectionReason}
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <p className="text-xs text-gray-500">
                              Requested on {request.requestedDate}
                            </p>
                            <p className="text-xs text-gray-500">
                              Approver: {request.approver}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Upcoming Time Off */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Upcoming Time Off</CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingTimeOff.length > 0 ? (
                    <div className="space-y-3">
                      {upcomingTimeOff.map((request) => (
                        <div key={request.id} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-gray-900 text-sm">
                              {request.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">
                            {request.startDate}
                            {request.startDate !== request.endDate && ` - ${request.endDate}`}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            {request.days} {request.days === 1 ? 'day' : 'days'}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-sm text-gray-500">No upcoming time off</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Company Holidays */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Company Holidays</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-sm text-gray-900">Thanksgiving</p>
                        <p className="text-xs text-gray-500">Nov 23-24, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-sm text-gray-900">Christmas</p>
                        <p className="text-xs text-gray-500">Dec 25, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium text-sm text-gray-900">New Year</p>
                        <p className="text-xs text-gray-500">Jan 1, 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Policy Info */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-base text-blue-900">Time Off Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-900">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Submit requests at least 2 weeks in advance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Manager approval required for all requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Unused vacation days roll over to next year</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Request Time Off Dialog */}
      <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Time Off</DialogTitle>
            <DialogDescription>
              Submit a new time off request for approval
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="timeOffType">Time Off Type</Label>
              <Select value={requestType} onValueChange={setRequestType}>
                <SelectTrigger id="timeOffType" className="mt-1">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vacation">Vacation</SelectItem>
                  <SelectItem value="sick">Sick Leave</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input type="date" id="startDate" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input type="date" id="endDate" className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="reason">Reason</Label>
              <Textarea
                id="reason"
                placeholder="Briefly explain your request..."
                className="mt-1"
                rows={3}
              />
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900">
              <AlertCircle className="w-4 h-4 inline mr-2" />
              Your request will be sent to your manager for approval.
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setIsRequestOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Submit Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
