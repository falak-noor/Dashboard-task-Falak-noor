import { useState } from 'react';
import { Mail, Lock, User as UserIcon, ArrowRight, ArrowLeft, Building } from 'lucide-react';
import { BrandLogo } from '../../components/common/BrandLogo';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { useNavigation } from '../../context/useNavigation';
import { AVAILABLE_PROGRAMS } from '../../data/mockData';

export const Signup = () => {
  const { setCurrentPage } = useNavigation();
  const [formData, setFormData] = useState({
    name: 'Sara Khan',
    email: 'sara.khan@org.com',
    program: 'School Education',
    password: 'password123',
    confirmPassword: 'password123',
  });
  const [termsAccepted, setTermsAccepted] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normal frontend navigation without authentication blockers
    setCurrentPage('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Return to Dashboard header trigger */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4 flex justify-start">
        <button
          type="button"
          onClick={() => setCurrentPage('dashboard')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#1E5128] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </button>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Brand Logo Header */}
        <div className="flex justify-center mb-6">
          <BrandLogo size="lg" />
        </div>

        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          Create an enterprise account
        </h2>
        <p className="mt-1 text-center text-xs text-gray-500">
          Join the INTRAPRENEUR User Management Ecosystem
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 sm:px-8 shadow-xs border border-gray-100 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="signup-name"
              label="Full Name"
              placeholder="e.g. Falak Noor"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              icon={UserIcon}
              required
            />

            <Input
              id="signup-email"
              label="Work Email"
              type="email"
              placeholder="name@org.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              icon={Mail}
              required
            />

            <div>
              <label className="text-xs font-semibold text-gray-700 tracking-wide block mb-1.5">
                Assigned Program / Workspace
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Building className="w-4 h-4" />
                </div>
                <select
                  value={formData.program}
                  onChange={(e) =>
                    setFormData({ ...formData, program: e.target.value })
                  }
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-[#1E5128] focus:ring-1 focus:ring-[#1E5128]/20"
                >
                  {AVAILABLE_PROGRAMS.map((prog) => (
                    <option key={prog} value={prog}>
                      {prog}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Input
              id="signup-password"
              label="Password"
              type="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              icon={Lock}
              required
            />

            <Input
              id="signup-confirm-password"
              label="Confirm Password"
              type="password"
              placeholder="Repeat password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              icon={Lock}
              required
            />

            <div className="flex items-center gap-2 text-xs pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="rounded border-gray-300 text-[#1E5128] focus:ring-[#1E5128]/20"
              />
              <label htmlFor="terms" className="text-gray-600 select-none">
                I agree to the enterprise Security & Privacy policy
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-2 font-semibold text-sm bg-[#1E5128] hover:bg-[#163f20]"
              icon={ArrowRight}
              iconPosition="right"
            >
              Complete Registration
            </Button>
          </form>

          {/* Switch to Login */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setCurrentPage('login')}
              className="font-bold text-[#1E5128] hover:underline ml-1"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
