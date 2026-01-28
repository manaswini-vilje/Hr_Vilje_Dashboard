import { useState } from 'react';
import { FileText, Upload, Download, Eye, CheckCircle2, Clock, XCircle, Search, Filter } from 'lucide-react';
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';

export default function EmployeeDocuments() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [previewDoc, setPreviewDoc] = useState<any>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const documents = [
    {
      id: 1,
      name: 'Employment Contract',
      type: 'Contract',
      uploadedDate: '2023-10-01',
      status: 'approved',
      size: '2.4 MB',
      format: 'PDF',
    },
    {
      id: 2,
      name: 'Passport Copy',
      type: 'Identity',
      uploadedDate: '2023-10-05',
      status: 'approved',
      size: '1.8 MB',
      format: 'PDF',
    },
    {
      id: 3,
      name: 'NDA Agreement',
      type: 'Legal',
      uploadedDate: '2023-10-10',
      status: 'pending',
      size: '890 KB',
      format: 'PDF',
    },
    {
      id: 4,
      name: 'Tax Form W-4',
      type: 'Tax',
      uploadedDate: '2023-10-12',
      status: 'approved',
      size: '450 KB',
      format: 'PDF',
    },
    {
      id: 5,
      name: 'Bank Details Form',
      type: 'Banking',
      uploadedDate: '2023-10-15',
      status: 'rejected',
      size: '320 KB',
      format: 'PDF',
    },
    {
      id: 6,
      name: 'Emergency Contact Form',
      type: 'Personal',
      uploadedDate: '2023-10-18',
      status: 'approved',
      size: '280 KB',
      format: 'PDF',
    },
  ];

  const requiredDocuments = [
    { name: 'Proof of Address', uploaded: false },
    { name: 'Professional Certificate', uploaded: false },
  ];

  const getStatusBadge = (status: string) => {
    const config: Record<string, { label: string; className: string; icon: any }> = {
      approved: {
        label: 'Approved',
        className: 'bg-green-100 text-green-700 border-green-200',
        icon: CheckCircle2,
      },
      pending: {
        label: 'Pending Review',
        className: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        icon: Clock,
      },
      rejected: {
        label: 'Rejected',
        className: 'bg-red-100 text-red-700 border-red-200',
        icon: XCircle,
      },
    };

    const statusConfig = config[status] || config.pending;
    const Icon = statusConfig.icon;

    return (
      <Badge className={statusConfig.className}>
        <Icon className="w-3 h-3 mr-1" />
        {statusConfig.label}
      </Badge>
    );
  };

  const handlePreview = (doc: any) => {
    setPreviewDoc(doc);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Alex Johnson" userRole="Product Designer" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / Documents</p>
          </div>

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Documents</h1>
              <p className="text-gray-500 mt-1">Manage and upload your employment documents</p>
            </div>
            <Button
              onClick={() => setIsUploadOpen(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Search and Filters */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search documents..."
                        className="pl-10"
                      />
                    </div>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Documents List */}
              <Card>
                <CardHeader>
                  <CardTitle>My Documents</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">All your uploaded documents</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{doc.name}</h4>
                            <p className="text-sm text-gray-500">
                              {doc.type} • {doc.size} • Uploaded {doc.uploadedDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusBadge(doc.status)}
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handlePreview(doc)}
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

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Total Documents</span>
                        <span className="text-lg font-semibold text-gray-900">{documents.length}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Approved</span>
                        <span className="text-lg font-semibold text-green-600">
                          {documents.filter(d => d.status === 'approved').length}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Pending</span>
                        <span className="text-lg font-semibold text-yellow-600">
                          {documents.filter(d => d.status === 'pending').length}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Rejected</span>
                        <span className="text-lg font-semibold text-red-600">
                          {documents.filter(d => d.status === 'rejected').length}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-base text-orange-900">Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-orange-900">{doc.name}</p>
                          <Button
                            variant="link"
                            className="h-auto p-0 text-xs text-orange-700 hover:text-orange-800"
                            onClick={() => setIsUploadOpen(true)}
                          >
                            Upload Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Help */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Contact HR if you have questions about document requirements.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact HR
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Upload Dialog */}
      <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Document</DialogTitle>
            <DialogDescription>
              Select the document type and upload your file
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Document Type
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="identity">Identity Document</SelectItem>
                  <SelectItem value="address">Proof of Address</SelectItem>
                  <SelectItem value="certificate">Certificate</SelectItem>
                  <SelectItem value="tax">Tax Document</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, PNG, JPG up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setIsUploadOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Upload
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={!!previewDoc} onOpenChange={() => setPreviewDoc(null)}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{previewDoc?.name}</DialogTitle>
            <DialogDescription>
              {previewDoc?.type} • {previewDoc?.size}
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600">Document Preview</p>
              <p className="text-xs text-gray-500 mt-1">
                {previewDoc?.format} file
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setPreviewDoc(null)}>
              Close
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
