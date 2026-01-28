import { useState } from 'react';
import { FileText, Download, Eye, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import { Separator } from '@/app/components/ui/separator';

export default function EmployeePayslip() {
  const [selectedPayslip, setSelectedPayslip] = useState<any>(null);

  const payslips = [
    {
      id: 1,
      month: 'October 2023',
      payDate: '2023-10-31',
      grossPay: 8500,
      netPay: 6545,
      deductions: 1955,
      status: 'paid',
    },
    {
      id: 2,
      month: 'September 2023',
      payDate: '2023-09-30',
      grossPay: 8500,
      netPay: 6545,
      deductions: 1955,
      status: 'paid',
    },
    {
      id: 3,
      month: 'August 2023',
      payDate: '2023-08-31',
      grossPay: 8500,
      netPay: 6545,
      deductions: 1955,
      status: 'paid',
    },
    {
      id: 4,
      month: 'July 2023',
      payDate: '2023-07-31',
      grossPay: 8500,
      netPay: 6545,
      deductions: 1955,
      status: 'paid',
    },
  ];

  const ytdSummary = {
    totalGross: 34000,
    totalNet: 26180,
    totalDeductions: 7820,
    totalTax: 5200,
  };

  const handleViewPayslip = (payslip: any) => {
    setSelectedPayslip(payslip);
  };

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Alex Johnson" userRole="Product Designer" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Payslip</p>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900">Payslip</h1>
            <p className="text-gray-500 mt-1">View and download your payment history</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* YTD Summary Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium text-gray-600">YTD Gross Pay</p>
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(ytdSummary.totalGross)}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <p className="text-xs text-green-600">On track</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium text-gray-600">YTD Net Pay</p>
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(ytdSummary.totalNet)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Take-home pay
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium text-gray-600">YTD Deductions</p>
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(ytdSummary.totalDeductions)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Total withheld
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium text-gray-600">YTD Tax</p>
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(ytdSummary.totalTax)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Federal & State
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Payslip List */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">All your payslips</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {payslips.map((payslip) => (
                      <div
                        key={payslip.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{payslip.month}</h4>
                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                              <Calendar className="w-3 h-3" />
                              Paid on {payslip.payDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">
                              {formatCurrency(payslip.netPay)}
                            </p>
                            <p className="text-xs text-gray-500">Net Pay</p>
                          </div>
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            Paid
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewPayslip(payslip)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Payment Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Payment Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-blue-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Monthly</p>
                        <p className="text-xs text-gray-500">Last day of each month</p>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Next Payment</p>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                        <p className="text-sm font-semibold text-blue-900">November 30, 2023</p>
                        <p className="text-xs text-blue-700 mt-1">Estimated: {formatCurrency(8500)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Download W-2 Form
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Update Tax Withholding
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Pay Calendar
                  </Button>
                </CardContent>
              </Card>

              {/* Need Help */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-base text-blue-900">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-900 mb-3">
                    Questions about your payslip? Contact the payroll department.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-blue-300 text-blue-900">
                    Contact Payroll
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Payslip Detail Dialog */}
      <Dialog open={!!selectedPayslip} onOpenChange={() => setSelectedPayslip(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Payslip Detail - {selectedPayslip?.month}</DialogTitle>
            <DialogDescription>
              Payment date: {selectedPayslip?.payDate}
            </DialogDescription>
          </DialogHeader>

          {selectedPayslip && (
            <div className="space-y-4 py-4">
              {/* Employee Info */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-xs text-gray-500">Employee Name</p>
                  <p className="font-medium text-gray-900">Alex Johnson</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Employee ID</p>
                  <p className="font-medium text-gray-900">EMP-1024</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Department</p>
                  <p className="font-medium text-gray-900">Product & Design</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Position</p>
                  <p className="font-medium text-gray-900">Product Designer</p>
                </div>
              </div>

              <Separator />

              {/* Earnings */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Earnings</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base Salary</span>
                    <span className="font-medium text-gray-900">{formatCurrency(8000)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Performance Bonus</span>
                    <span className="font-medium text-gray-900">{formatCurrency(500)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-900">Gross Pay</span>
                    <span className="text-gray-900">{formatCurrency(selectedPayslip.grossPay)}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Deductions */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Deductions</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Federal Tax</span>
                    <span className="font-medium text-gray-900">{formatCurrency(1200)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">State Tax</span>
                    <span className="font-medium text-gray-900">{formatCurrency(500)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Social Security</span>
                    <span className="font-medium text-gray-900">{formatCurrency(155)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Medicare</span>
                    <span className="font-medium text-gray-900">{formatCurrency(100)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-900">Total Deductions</span>
                    <span className="text-red-600">-{formatCurrency(selectedPayslip.deductions)}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Net Pay */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Net Pay</span>
                  <span className="text-2xl font-bold text-green-600">
                    {formatCurrency(selectedPayslip.netPay)}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Amount deposited to your account</p>
              </div>
            </div>
          )}

          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setSelectedPayslip(null)}>
              Close
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
