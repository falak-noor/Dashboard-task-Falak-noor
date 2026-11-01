import { ShieldCheck, HelpCircle, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white/80 backdrop-blur-2xs py-4 px-4 sm:px-6 md:px-8 text-xs text-gray-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E5128]"></span>
          </span>
          <span className="font-medium text-gray-700">All Systems Operational</span>
          <span className="text-gray-300">•</span>
          <span>v2.4.0</span>
        </div>

       
        <div className="text-gray-500 text-center">
          &copy; {new Date().getFullYear()} INTRAPRENEUR Platform. All rights reserved.
        </div>

      
        <div className="flex items-center gap-4">
          <a
            href="#docs"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-1 hover:text-[#1E5128] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Docs</span>
          </a>
          <a
            href="#security"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-1 hover:text-[#1E5128] transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Security</span>
          </a>
          <a
            href="#support"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-1 hover:text-[#1E5128] transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
