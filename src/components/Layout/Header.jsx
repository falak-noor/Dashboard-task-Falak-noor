import { useState, useRef, useEffect } from 'react';
import {
  Menu,
  Search,
  Briefcase,
  ChevronDown,
  User as UserIcon,
  Building,
  Check,
  LayoutDashboard,
} from 'lucide-react';
import { useNavigation } from '../../context/useNavigation';
import { AVAILABLE_PROGRAMS } from '../../data/mockData';

export const Header = ({ onOpenSidebar }) => {
  const { user, activeWorkspace, setActiveWorkspace, setCurrentPage } = useNavigation();
  const [profileOpen, setProfileOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const profileRef = useRef(null);
  const workspaceRef = useRef(null);

  
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (workspaceRef.current && !workspaceRef.current.contains(e.target)) {
        setWorkspaceOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 h-18 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 md:px-8">
      
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

       
        <div className="relative" ref={workspaceRef}>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setWorkspaceOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-semibold text-gray-800 hover:bg-gray-50 transition-colors shadow-2xs"
            >
              <Briefcase className="w-3.5 h-3.5 text-gray-600" />
              <span>{activeWorkspace}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

      
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#bbf7d0] text-[#14532d]">
              Current Workspace
            </span>
          </div>

          
          {workspaceOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1.5 z-50">
              <div className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Select Workspace
              </div>
              {AVAILABLE_PROGRAMS.map((prog) => (
                <button
                  key={prog}
                  type="button"
                  onClick={() => {
                    setActiveWorkspace(prog);
                    setWorkspaceOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 text-left"
                >
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-gray-400" />
                    <span>{prog}</span>
                  </div>
                  {activeWorkspace === prog && (
                    <Check className="w-3.5 h-3.5 text-[#1E5128]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search users,roles,permission or anything"
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-gray-200 rounded-md text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128]/20 transition-all shadow-2xs"
          />
        </div>
      </div>

      <div className="relative" ref={profileRef}>
        <button
          type="button"
          onClick={() => setProfileOpen((prev) => !prev)}
          className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none"
        >
          
          <div className="w-8 h-8 rounded-full border border-[#1E5128]/30 bg-emerald-50 text-[#1E5128] flex items-center justify-center">
            <UserIcon className="w-4 h-4" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-sm font-bold text-gray-900 leading-tight">
              {user?.name || 'Falak Noor'}
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

     
        {profileOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1.5 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-900">{user?.name || 'Falak Noor'}</p>
              <p className="text-[11px] text-gray-500 truncate">{user?.email || 'falak.noor@org.com'}</p>
            </div>

            <button
              type="button"
              onClick={() => {
                setCurrentPage('dashboard');
                setProfileOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 text-left"
            >
              <LayoutDashboard className="w-4 h-4 text-[#1E5128]" />
              <span>Dashboard Home</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setCurrentPage('workspace');
                setProfileOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 text-left"
            >
              <Briefcase className="w-4 h-4 text-gray-400" />
              <span>Workspace Details</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
