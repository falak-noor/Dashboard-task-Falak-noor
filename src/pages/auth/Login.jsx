import { useState } from 'react';
import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { BrandLogo } from '../../components/common/BrandLogo';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { useNavigation } from '../../context/useNavigation';

export const Login = () => {
  const { setCurrentPage } = useNavigation();
  const [email, setEmail] = useState('falak.noor@org.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(true);

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
          Sign in to your account
        </h2>
        <p className="mt-1 text-center text-xs text-gray-500">
          User & Access Management Portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 sm:px-8 shadow-xs border border-gray-100 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="login-email"
              label="Work Email"
              type="email"
              placeholder="name@org.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={Mail}
              required
            />

            <Input
              id="login-password"
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={Lock}
              required
            />

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300 text-[#1E5128] focus:ring-[#1E5128]/20"
                />
                <span>Remember this device</span>
              </label>

              <button
                type="button"
                onClick={() => alert('Password reset demonstration notification.')}
                className="font-semibold text-[#1E5128] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-2 font-semibold text-sm bg-[#1E5128] hover:bg-[#163f20]"
              icon={ArrowRight}
              iconPosition="right"
            >
              Sign In to Dashboard
            </Button>
          </form>

          {/* Switch to Signup */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Don't have an account yet?{' '}
            <button
              type="button"
              onClick={() => setCurrentPage('signup')}
              className="font-bold text-[#1E5128] hover:underline ml-1"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
