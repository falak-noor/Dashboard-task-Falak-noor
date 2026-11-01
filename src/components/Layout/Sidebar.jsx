import {
  LayoutDashboard,
  Briefcase,
  Users,
  Settings,
  KeyRound,
  Lock,
  FileCheck2,
  X,
  LogIn,
  UserPlus,
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { useNavigation } from '../../context/useNavigation';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'workspace', label: 'Workspace', icon: Briefcase },
  { id: 'user-management', label: 'User Management', icon: Users },
  { id: 'role-config', label: 'Role Configuration', icon: Settings },
  { id: 'role-permission', label: 'Role Permission', icon: KeyRound },
  { id: 'security-settings', label: 'Security Settings', icon: Lock },
  { id: 'audit', label: 'User Activity Audit', icon: FileCheck2 },
];

export const Sidebar = ({ isOpen, onClose }) => {
  const { currentPage, setCurrentPage } = useNavigation();

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    if (onClose) onClose();
  };

  return (
    <>
     
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/40 z-40 lg:hidden backdrop-blur-2xs"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-white border-r border-gray-100 flex flex-col justify-between transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
         
          <div className="h-18 px-6 flex items-center justify-between border-b border-gray-100/60">
            <BrandLogo size="md" />
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

    
          <nav className="p-4 space-y-1.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-lg text-sm font-semibold transition-all duration-150 text-left ${
                    isActive
                      ? 'bg-[#1E5128]/10 text-[#1E5128]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      isActive ? 'text-[#1E5128]' : 'text-gray-600'
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

  
        <div className="p-4 border-t border-gray-100 space-y-1">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-1">
            Auth Views
          </div>
          <button
            type="button"
            onClick={() => handleNavClick('login')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors text-left ${
              currentPage === 'login'
                ? 'bg-[#1E5128]/10 text-[#1E5128]'
                : 'text-gray-600 hover:text-[#1E5128] hover:bg-gray-50'
            }`}
          >
            <LogIn className="w-4 h-4 text-current" />
            <span>Login Page View</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('signup')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors text-left ${
              currentPage === 'signup'
                ? 'bg-[#1E5128]/10 text-[#1E5128]'
                : 'text-gray-600 hover:text-[#1E5128] hover:bg-gray-50'
            }`}
          >
            <UserPlus className="w-4 h-4 text-current" />
            <span>Signup Page View</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
