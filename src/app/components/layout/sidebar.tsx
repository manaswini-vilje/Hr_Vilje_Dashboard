import { useNavigate, useLocation } from 'react-router-dom';
import { Building2, LayoutDashboard, FileText, Users, Settings, LogOut, UserCog, Briefcase, HelpCircle } from 'lucide-react';
import { cn } from '@/app/components/ui/utils';

interface SidebarProps {
  role: 'employee' | 'hr' | 'admin';
}

export default function Sidebar({ role }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const employeeMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/employee', active: true },
    { icon: FileText, label: 'My Profile', path: '/employee/profile' },
    { icon: FileText, label: 'Documents', path: '/employee/documents' },
    { icon: Users, label: 'Team', path: '/employee/team' },
    { icon: Settings, label: 'Settings', path: '/employee/settings' },
  ];

  const hrMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/hr', active: true },
    { icon: Users, label: 'Employees', path: '/hr/employees' },
    { icon: UserCog, label: 'Recruitment', path: '/hr/recruitment' },
    { icon: Briefcase, label: 'Payroll', path: '/hr/payroll' },
    { icon: Settings, label: 'Settings', path: '/hr/settings' },
  ];

  const adminMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin', active: true },
    { icon: Users, label: 'People', path: '/admin/people' },
    { icon: UserCog, label: 'User Management', path: '/admin' },
    { icon: Briefcase, label: 'Payroll', path: '/admin/payroll' },
    { icon: Settings, label: 'Reports', path: '/admin/reports' },
  ];

  const menuItems = role === 'employee' ? employeeMenuItems : role === 'hr' ? hrMenuItems : adminMenuItems;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-gray-900">Nexus HR</h1>
            <p className="text-xs text-gray-500 capitalize">{role} Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200 space-y-1">
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span>Support</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
