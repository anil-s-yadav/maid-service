import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserCircle, Lock, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import { BRAND } from '../utils/constants';

const Login = () => {
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // ==========================================
    // TODO (Database Phase): Implement real auth
    // ==========================================
    /* 
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      
      localStorage.setItem('customerToken', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
    */

    // Simulated login for UI phase
    setTimeout(() => {
      if (formData.phone === '9999999999' && formData.password === 'password') {
        localStorage.setItem('customerToken', 'demo_token');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Use 9999999999 / password for demo.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Back to Home Link */}
      <Link to="/" className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-slate-500 hover:text-brand-teal transition-colors font-medium z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-200">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 z-0"></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link to="/" className="flex justify-center mb-8">
          <img src={BRAND.logo} alt={BRAND.name} className="h-12 w-auto" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-brand-navy font-heading">
          Customer Portal
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Manage your contracts, maids, and billing securely.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-8 px-4 shadow-2xl shadow-brand-navy/5 sm:rounded-3xl sm:px-10 border border-slate-100">
          
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-100">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone Number</label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-400 font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g,'')})}
                  className="block w-full pl-12 rounded-xl border-slate-200 py-3 text-slate-900 bg-slate-50 focus:ring-brand-teal focus:border-brand-teal sm:text-sm"
                  placeholder="Enter registered number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  onPaste={(e) => {
                    e.preventDefault();
                    setFormData({...formData, password: e.clipboardData.getData('text')});
                  }}
                  className="block w-full pl-10 rounded-xl border-slate-200 py-3 text-slate-900 bg-slate-50 focus:ring-brand-teal focus:border-brand-teal sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-brand-teal focus:ring-brand-teal"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-brand-teal hover:text-teal-600">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center items-center gap-2 rounded-xl bg-brand-navy px-4 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all active:scale-95 disabled:opacity-70"
              >
                {isLoading ? 'Authenticating...' : 'Sign In'}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Your connection is 256-bit encrypted & secure.</span>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-400">Demo Login: Phone: 9999999999 / Pass: password</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
