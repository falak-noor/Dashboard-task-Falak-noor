import {
  Briefcase,
  Settings,
  KeyRound,
  Lock,
  FileCheck2,
  Users,
} from 'lucide-react';
import { NavigationProvider } from './context/NavigationContext';
import { useNavigation } from './context/useNavigation';
import DashboardLayout from './components/Layout/DashboardLayout';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import PlaceholderView from './pages/admin/PlaceholderView';

const AppContent = () => {
  const { currentPage } = useNavigation();

  if (currentPage === 'login') {
    return <Login />;
  }

  if (currentPage === 'signup') {
    return <Signup />;
  }

  // Dashboard & Module Pages inside standard DashboardLayout
  const renderCurrentModule = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'workspace':
        return (
          <PlaceholderView
            title="Workspace Management"
            description="Manage organizational units, division settings, and program domains."
            icon={Briefcase}
          />
        );
      case 'user-management':
        return (
          <PlaceholderView
            title="User Management"
            description="Directory of team members, accounts, and profile administration."
            icon={Users}
          />
        );
      case 'role-config':
        return (
          <PlaceholderView
            title="Role Configuration"
            description="Configure enterprise roles, authority levels, and team hierarchy."
            icon={Settings}
          />
        );
      case 'role-permission':
        return (
          <PlaceholderView
            title="Role Permission Matrix"
            description="Fine-grained policy controls and read/write security assertions."
            icon={KeyRound}
          />
        );
      case 'security-settings':
        return (
          <PlaceholderView
            title="Security Settings"
            description="Audit policies, authentication methods, and cryptographic controls."
            icon={Lock}
          />
        );
      case 'audit':
        return (
          <PlaceholderView
            title="User Activity Audit"
            description="Continuous tamper-evident telemetry logs and compliance records."
            icon={FileCheck2}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return <DashboardLayout>{renderCurrentModule()}</DashboardLayout>;
};

export const App = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};

export default App;
