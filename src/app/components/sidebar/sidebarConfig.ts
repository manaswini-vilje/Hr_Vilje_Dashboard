export type Role = 'employee' | 'hr' | 'admin';

export const sidebarConfig: Record<Role, { label: string; path: string }[]> = {
  employee: [
    { label: 'Dashboard', path: '/employee' },
    { label: 'My Profile', path: '/employee/profile' },
    { label: 'Documents', path: '/employee/documents' },
    { label: 'Tasks', path: '/employee/tasks' },
    { label: 'Time Off', path: '/employee/time-off' },
    { label: 'Payslip', path: '/employee/payslip' },
    { label: 'Messages', path: '/employee/messages' },
  ],
  hr: [
    { label: 'Dashboard', path: '/hr' },
    { label: 'Employees', path: '/hr/employees' },
    { label: 'Approvals', path: '/hr/approvals' },
    { label: 'Messages', path: '/hr/messages' },
    { label: 'Reports', path: '/hr/reports' },
  ],
  admin: [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Users', path: '/admin/users' },
    { label: 'Roles', path: '/admin/roles' },
    { label: 'Settings', path: '/admin/settings' },
  ],
};