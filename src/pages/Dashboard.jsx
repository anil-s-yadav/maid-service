import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LogOut, User, FileText, Settings, Bell, 
  CreditCard, Calendar, AlertCircle, Phone, RotateCcw, Menu, X
} from 'lucide-react';
import { BRAND } from '../utils/constants';

// Simulated database data
const DUMMY_USER = {
  name: "Rajesh Kumar",
  phone: "9999999999",
  address: "Lodha Bellissimo, Mahalaxmi, Mumbai",
};

const DUMMY_CONTRACTS = [
  {
    id: "CTR-2024-8901",
    maidName: "Sunita Yadav",
    role: "Full-time Cook",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-12-14",
    salary: 18000,
    replacementsLeft: 2
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [userData, setUserData] = useState(DUMMY_USER);
  const [contracts, setContracts] = useState(DUMMY_CONTRACTS);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check auth
    if (!localStorage.getItem('customerToken')) {
      navigate('/login');
    }

    // ==========================================
    // TODO (Database Phase): Fetch real data
    // ==========================================
    /*
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('customerToken');
        const res = await fetch('/api/customer/dashboard', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        setUserData(data.user);
        setContracts(data.contracts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDashboardData();
    */
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('customerToken');
    navigate('/');
  };

  const handleRequestReplacement = (contractId) => {
    // ==========================================
    // TODO (Database Phase): Submit replacement request
    // ==========================================
    alert(`Replacement request initiated for contract ${contractId}. Our RM will call you shortly.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-brand-navy text-slate-300 hidden md:flex flex-col border-r border-slate-800">
        <div className="p-6 border-b border-slate-800">
          <Link to="/">
            <img src={BRAND.logo} alt={BRAND.name} className="h-10 w-auto filter brightness-0 invert" />
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'overview' ? 'bg-brand-gold text-white' : 'hover:bg-slate-800'}`}
          >
            <User className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('contracts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'contracts' ? 'bg-brand-gold text-white' : 'hover:bg-slate-800'}`}
          >
            <FileText className="w-5 h-5" /> My Contracts
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'billing' ? 'bg-brand-gold text-white' : 'hover:bg-slate-800'}`}
          >
            <CreditCard className="w-5 h-5" /> Billing & Invoices
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-brand-navy/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <aside className="relative w-64 bg-brand-navy text-slate-300 flex flex-col border-r border-slate-800 animate-in slide-in-from-left duration-300">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <Link to="/">
                <img src={BRAND.logo} alt={BRAND.name} className="h-8 w-auto filter brightness-0 invert" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 hover:bg-slate-800 rounded-full">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            
            <nav className="flex-1 py-6 px-4 space-y-2">
              <button 
                onClick={() => { setActiveTab('overview'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'overview' ? 'bg-brand-gold text-white' : 'hover:bg-slate-800'}`}
              >
                <User className="w-5 h-5" /> Dashboard
              </button>
              <button 
                onClick={() => { setActiveTab('contracts'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'contracts' ? 'bg-brand-gold text-white' : 'hover:bg-slate-800'}`}
              >
                <FileText className="w-5 h-5" /> My Contracts
              </button>
              <button 
                onClick={() => { setActiveTab('billing'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'billing' ? 'bg-brand-gold text-white' : 'hover:bg-slate-800'}`}
              >
                <CreditCard className="w-5 h-5" /> Billing & Invoices
              </button>
            </nav>

            <div className="p-4 border-t border-slate-800">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-slate-800 transition-colors"
              >
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-w-6xl mx-auto w-full min-h-screen">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 md:py-5 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-brand-navy font-heading capitalize">
              {activeTab}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-brand-navy transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-10 w-10 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              {userData.name.charAt(0)}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 flex-1 overflow-auto">
          
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              {/* Welcome Card */}
              <div className="bg-gradient-to-r from-brand-navy to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold font-heading mb-2">Welcome back, {userData.name.split(' ')[0]}!</h2>
                  <p className="text-slate-300 max-w-xl">
                    Manage your domestic help services, view upcoming renewals, and request replacements easily from your portal.
                  </p>
                </div>
              </div>

              {/* Active Contracts Summary */}
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-4 font-heading">Active Staff</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {contracts.map(contract => (
                    <div key={contract.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold mb-3 border border-green-100">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active Contract
                          </span>
                          <h4 className="text-xl font-bold text-brand-navy font-heading">{contract.maidName}</h4>
                          <p className="text-sm text-slate-500">{contract.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-brand-gold font-heading">₹{contract.salary.toLocaleString()}</p>
                          <p className="text-xs text-slate-400">per month</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 py-4 border-y border-slate-50 my-auto text-sm text-slate-600">
                        <div>
                          <p className="text-slate-400 text-xs mb-1">Contract Started</p>
                          <p className="font-medium text-slate-800">{new Date(contract.startDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs mb-1">Replacements Left</p>
                          <p className="font-medium text-slate-800">{contract.replacementsLeft} / 3</p>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-5">
                        <button 
                          onClick={() => handleRequestReplacement(contract.id)}
                          className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2.5 rounded-xl transition-colors text-sm border border-slate-200 flex items-center justify-center gap-2"
                        >
                          <RotateCcw className="w-4 h-4" /> Replace Maid
                        </button>
                        <button 
                          onClick={() => alert('Contract viewing will be available once the backend is connected.')}
                          className="flex-1 bg-brand-gold hover:bg-amber-500 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm shadow-md"
                        >
                          View Contract
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Support */}
              <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-gold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Need Assistance?</h4>
                    <p className="text-sm text-slate-600">Contact your dedicated Relationship Manager</p>
                  </div>
                </div>
                <a href={`tel:${BRAND.phoneClean}`} className="bg-white text-brand-navy font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  Call {BRAND.phone}
                </a>
              </div>
            </div>
          )}

          {activeTab === 'contracts' && (
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm animate-in fade-in duration-500">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-4 pl-6">Contract ID</th>
                      <th className="p-4">Staff Name</th>
                      <th className="p-4">Role</th>
                      <th className="p-4">Validity</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 pr-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {contracts.map(contract => (
                      <tr key={contract.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 pl-6 font-medium text-brand-navy">{contract.id}</td>
                        <td className="p-4 text-slate-700">{contract.maidName}</td>
                        <td className="p-4 text-slate-600">{contract.role}</td>
                        <td className="p-4 text-slate-600">
                          {new Date(contract.startDate).toLocaleDateString()} - {new Date(contract.endDate).toLocaleDateString()}
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <button 
                            onClick={() => alert('Contract download will be available once the backend is connected.')}
                            className="text-brand-gold hover:text-brand-navy font-semibold text-sm transition-colors"
                          >
                            Download PDF
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border border-slate-100 shadow-sm animate-in fade-in duration-500 min-h-[400px]">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
                <AlertCircle className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">No pending invoices</h3>
              <p className="text-slate-500 max-w-sm">
                Your account is fully paid. Any future invoices or agency fee receipts will appear here.
              </p>
            </div>
          )}

        </div>
      </main>

    </div>
  );
};

export default Dashboard;
