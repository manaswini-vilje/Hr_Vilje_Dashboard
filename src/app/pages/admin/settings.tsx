import { Settings as SettingsIcon, Bell, Lock, Globe, Mail, Database, Save } from 'lucide-react';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';
import { Separator } from '@/app/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

export default function AdminSettings() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName="Admin" userRole="HR Portal" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Dashboard / System Settings</p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">System Settings</h1>
              <p className="text-gray-500 mt-1">Configure your HR portal settings</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Navigation */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-4">
                  <nav className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg">
                      <SettingsIcon className="w-4 h-4" />
                      General
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                      <Bell className="w-4 h-4" />
                      Notifications
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                      <Lock className="w-4 h-4" />
                      Security
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                      <Mail className="w-4 h-4" />
                      Email
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                      <Database className="w-4 h-4" />
                      Data & Backup
                    </button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* General Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SettingsIcon className="w-5 h-5" />
                    General Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Nexus HR" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="companyEmail">Company Email</Label>
                    <Input id="companyEmail" type="email" defaultValue="hr@nexushr.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger id="timezone" className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                        <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select defaultValue="mm-dd-yyyy">
                      <SelectTrigger id="dateFormat" className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">Email Notifications</p>
                      <p className="text-xs text-gray-500">Receive email alerts for important events</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">New Employee Notifications</p>
                      <p className="text-xs text-gray-500">Alert when a new employee joins</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">Approval Reminders</p>
                      <p className="text-xs text-gray-500">Remind about pending approvals</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">Document Upload Alerts</p>
                      <p className="text-xs text-gray-500">Notify when documents are uploaded</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">Two-Factor Authentication</p>
                      <p className="text-xs text-gray-500">Require 2FA for all admin users</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">Session Timeout</p>
                      <p className="text-xs text-gray-500">Auto logout after inactivity</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div>
                    <Label htmlFor="sessionDuration">Session Duration (minutes)</Label>
                    <Input
                      id="sessionDuration"
                      type="number"
                      defaultValue="30"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="passwordPolicy">Password Policy</Label>
                    <Select defaultValue="strong">
                      <SelectTrigger id="passwordPolicy" className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic (8 characters)</SelectItem>
                        <SelectItem value="medium">Medium (10 characters + special)</SelectItem>
                        <SelectItem value="strong">Strong (12 characters + mixed case + special)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Email Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="smtpHost">SMTP Host</Label>
                    <Input id="smtpHost" defaultValue="smtp.gmail.com" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="smtpPort">SMTP Port</Label>
                      <Input id="smtpPort" defaultValue="587" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="encryption">Encryption</Label>
                      <Select defaultValue="tls">
                        <SelectTrigger id="encryption" className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="tls">TLS</SelectItem>
                          <SelectItem value="ssl">SSL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="fromEmail">From Email Address</Label>
                    <Input id="fromEmail" type="email" defaultValue="noreply@nexushr.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="fromName">From Name</Label>
                    <Input id="fromName" defaultValue="Nexus HR System" className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              {/* Data & Backup */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Data & Backup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">Automatic Backups</p>
                      <p className="text-xs text-gray-500">Daily automated database backups</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div>
                    <Label htmlFor="backupTime">Backup Time</Label>
                    <Input id="backupTime" type="time" defaultValue="02:00" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="retentionDays">Backup Retention (days)</Label>
                    <Input id="retentionDays" type="number" defaultValue="30" className="mt-1" />
                  </div>
                  <Separator />
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Database className="w-4 h-4 mr-2" />
                      Backup Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
