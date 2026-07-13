import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LogOut, User, FileText, Settings, Bell, 
  CreditCard, Calendar, AlertCircle, Phone, RotateCcw, Menu, X, Sun, Moon,
  ShieldCheck, CheckCircle2, Star, HelpCircle, Save, Mail, MapPin, CalendarCheck,
  Download, FileSignature, AlertTriangle
} from 'lucide-react';
import { BRAND } from '../utils/constants';
import { useTheme } from '../contexts/ThemeProvider';
import { useToast } from '../hooks/use-toast';

// Simulated database data
const DUMMY_USER = {
  name: "Rajesh Kumar",
  email: "rajesh.k@example.com",
  phone: "9999999999",
  address: "Lodha Bellissimo, Mahalaxmi, Mumbai",
  memberSince: "2023-05-10",
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
    workingHours: "12 hours service",
    replacementsLeft: 2,
    policeVerified: true
  }
];

const DUMMY_TICKETS = [
  { 
    id: "TKT-1029", 
    subject: "Request for Salary Invoice", 
    date: "2024-03-10", 
    status: "Resolved",
    category: "Billing & Invoices",
    description: "Hi team, I need the salary invoice for the month of February for my records. Please share it as soon as possible.",
    replies: [
      { sender: "Support Team", time: "2024-03-10 14:30", message: "Hello! We have attached the invoice for February to your registered email. Please let us know if you need anything else." }
    ]
  },
  { 
    id: "TKT-1045", 
    subject: "Maid taking leave next week", 
    date: "2024-04-02", 
    status: "Open",
    category: "Leave & Attendance",
    description: "My maid Sunita informed me she will be taking a 3-day leave next week from Wednesday to Friday. Is a temporary replacement available?",
    replies: [
      { sender: "Support Team", time: "2024-04-02 10:15", message: "Hi there! We are checking our roster for a temporary replacement. Our Relationship Manager will call you shortly with an update." }
    ]
  }
];

const DUMMY_NOTIFICATIONS = [
  { id: 1, title: "Contract Renewal", message: "Sunita Yadav's contract expires in 30 days.", time: "2 hours ago", unread: true },
  { id: 2, title: "Ticket Resolved", message: "Your request for a salary invoice has been resolved.", time: "1 day ago", unread: false },
  { id: 3, title: "Welcome!", message: "Thanks for choosing our services.", time: "3 days ago", unread: false }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [userData, setUserData] = useState(DUMMY_USER);
  const [contracts, setContracts] = useState(DUMMY_CONTRACTS);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Modal states
  const [selectedContract, setSelectedContract] = useState(null);
  const [isReplaceModalOpen, setIsReplaceModalOpen] = useState(false);
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isViewTicketModalOpen, setIsViewTicketModalOpen] = useState(false);
  const [ticketReply, setTicketReply] = useState("");

  const [replaceReason, setReplaceReason] = useState("");

  const { theme, toggleTheme } = useTheme();

  const unreadCount = DUMMY_NOTIFICATIONS.filter(n => n.unread).length;

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

  const handleRequestReplacementSubmit = (e) => {
    e.preventDefault();
    setIsReplaceModalOpen(false);
    toast({
      title: "Replacement Requested",
      description: "Our Relationship Manager will contact you shortly.",
    });
    setReplaceReason("");
  };

  const handleDownloadContract = () => {
    toast({
      title: "Downloading...",
      description: "Your contract PDF is being generated.",
    });
  };

  const handleRaiseTicketSubmit = (e) => {
    e.preventDefault();
    setIsTicketModalOpen(false);
    toast({
      title: "Ticket Submitted",
      description: "Our support team will review your request and get back to you within 24 hours.",
    });
  };

  const handleTicketReplySubmit = (e) => {
    e.preventDefault();
    if(!ticketReply.trim()) return;
    toast({
      title: "Reply Sent",
      description: "Your message has been added to the ticket.",
    });
    setTicketReply("");
  };

  return (
    <div className="h-screen overflow-hidden dark:bg-[#020617] bg-slate-50 flex transition-colors duration-500">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 shrink-0 dark:bg-[#0f172a] bg-brand-navy text-slate-300 hidden md:flex flex-col border-r dark:border-white/10 border-slate-800 transition-colors">
        <div className="p-6 border-b dark:border-white/10 border-slate-800">
          <Link to="/" className="flex items-center gap-3">
            <div className="overflow-hidden flex items-center justify-center rounded-xl bg-white/5 p-0.5 backdrop-blur-sm">
              <img src={BRAND.logo} alt={BRAND.name} className="h-8 w-auto object-contain scale-[1.3] drop-shadow-md" />
            </div>
            <span className="text-xl font-bold font-heading text-white tracking-tight">
              {BRAND.name}
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'overview' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
          >
            <User className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('contracts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'contracts' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
          >
            <FileText className="w-5 h-5" /> My Contracts
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'billing' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
          >
            <CreditCard className="w-5 h-5" /> Billing & Invoices
          </button>
          <button 
            onClick={() => setActiveTab('support')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'support' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
          >
            <AlertCircle className="w-5 h-5" /> Support Tickets
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'settings' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
          >
            <Settings className="w-5 h-5" /> Profile Settings
          </button>
        </nav>

        <div className="p-4 border-t dark:border-white/10 border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 dark:hover:bg-white/5 hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <aside className="w-64 dark:bg-[#0f172a] bg-brand-navy text-slate-300 flex flex-col relative z-10 transition-colors">
            <div className="p-6 border-b dark:border-white/10 border-slate-800 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="overflow-hidden flex items-center justify-center rounded-xl bg-white/5 p-0.5 backdrop-blur-sm">
              <img src={BRAND.logo} alt={BRAND.name} className="h-8 w-auto object-contain scale-[1.3] drop-shadow-md" />
            </div>
          </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 hover:bg-slate-800 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex-1 py-6 px-4 space-y-2">
              <button 
                onClick={() => { setActiveTab('overview'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'overview' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
              >
                <User className="w-5 h-5" /> Dashboard
              </button>
              <button 
                onClick={() => { setActiveTab('contracts'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'contracts' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
              >
                <FileText className="w-5 h-5" /> My Contracts
              </button>
              <button 
                onClick={() => { setActiveTab('billing'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'billing' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
              >
                <CreditCard className="w-5 h-5" /> Billing & Invoices
              </button>
              <button 
                onClick={() => { setActiveTab('support'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'support' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
              >
                <AlertCircle className="w-5 h-5" /> Support Tickets
              </button>
              <button 
                onClick={() => { setActiveTab('settings'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'settings' ? 'bg-brand-gold text-white' : 'dark:hover:bg-white/5 hover:bg-slate-800'}`}
              >
                <Settings className="w-5 h-5" /> Profile Settings
              </button>
            </nav>

            <div className="p-4 border-t dark:border-white/10 border-slate-800">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 dark:hover:bg-white/5 hover:bg-slate-800 transition-colors"
              >
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-w-6xl mx-auto w-full h-screen">
        {/* Top Header */}
        <header className="dark:bg-[#020617] bg-slate-50 px-4 md:px-8 py-4 md:py-6 flex shrink-0 items-center justify-between z-30 transition-colors">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 dark:text-slate-300 text-slate-600 dark:hover:bg-white/10 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl md:text-2xl font-bold dark:text-white text-brand-navy font-heading capitalize transition-colors">
              {activeTab}
            </h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 md:p-2.5 rounded-full dark:hover:bg-white/10 hover:bg-slate-100 dark:text-slate-300 text-slate-600 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 md:p-2.5 rounded-full dark:hover:bg-white/10 hover:bg-slate-200 dark:text-slate-400 text-slate-500 dark:hover:text-brand-gold hover:text-brand-navy transition-colors"
              >
                <Bell className="w-5 h-5 md:w-6 md:h-6" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-2 md:w-2.5 h-2 md:h-2.5 bg-red-500 rounded-full border-2 dark:border-[#020617] border-slate-50"></span>
                )}
              </button>
              
              {isNotificationsOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsNotificationsOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
                      <h3 className="font-bold text-brand-navy dark:text-white">Notifications</h3>
                      {unreadCount > 0 && (
                        <span className="text-xs bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-full font-semibold">{unreadCount} new</span>
                      )}
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {DUMMY_NOTIFICATIONS.length > 0 ? (
                        <div className="divide-y divide-slate-100 dark:divide-white/5">
                          {DUMMY_NOTIFICATIONS.map(notification => (
                            <div key={notification.id} className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer ${notification.unread ? 'bg-brand-gold/5 dark:bg-brand-gold/5' : ''}`}>
                              <h4 className={`text-sm font-semibold mb-1 ${notification.unread ? 'text-brand-navy dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>{notification.title}</h4>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">{notification.message}</p>
                              <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">{notification.time}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-sm">No notifications</div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="relative ml-1 md:ml-2">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="h-9 w-9 md:h-10 md:w-10 bg-gradient-to-br from-brand-gold to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-lg shadow-md ring-2 dark:ring-slate-800 ring-white hover:opacity-90 transition-opacity"
              >
                {userData.name.charAt(0)}
              </button>
              
              {isProfileOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 border-b border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-slate-800/50">
                      <p className="font-bold text-brand-navy dark:text-white truncate">{userData.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{userData.email || userData.phone}</p>
                    </div>
                    <div className="p-2">
                      <button 
                        onClick={() => { setActiveTab('settings'); setIsProfileOpen(false); }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-brand-navy dark:hover:text-white transition-colors text-left"
                      >
                        <Settings className="w-4 h-4" /> Profile Settings
                      </button>
                      <button 
                        onClick={() => { setIsProfileOpen(false); handleLogout(); }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 flex-1 overflow-auto">
          
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="bg-gradient-to-r from-brand-navy to-slate-800 rounded-xl p-4 text-white shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl -translate-y-1/2"></div>
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-heading mb-2">Welcome back, {userData.name.split(' ')[0]}!</h2>
                    <ul className="text-xs md:text-sm text-slate-300 space-y-1 list-disc list-inside">
                      <li>Manage your domestic help services</li>
                      <li>View upcoming renewals</li>
                      <li>Request replacements easily</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-sm transition-colors">
                  <div className="w-10 h-10 bg-brand-gold/10 dark:bg-brand-gold/5 text-brand-gold rounded-full flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold dark:text-white text-brand-navy font-heading transition-colors">{contracts.length}</p>
                    <p className="text-[11px] md:text-xs dark:text-slate-400 text-slate-500 transition-colors uppercase tracking-wider font-semibold">Active Staff</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-sm transition-colors">
                  <div className="w-10 h-10 bg-green-500/10 dark:bg-green-500/5 text-green-500 rounded-full flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold dark:text-white text-brand-navy font-heading transition-colors">180</p>
                    <p className="text-[11px] md:text-xs dark:text-slate-400 text-slate-500 transition-colors uppercase tracking-wider font-semibold">Days With Us</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-sm transition-colors">
                  <div className="w-10 h-10 bg-blue-500/10 dark:bg-blue-500/5 text-blue-500 rounded-full flex items-center justify-center shrink-0">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold dark:text-white text-brand-navy font-heading transition-colors">
                      {contracts.reduce((acc, curr) => acc + curr.replacementsLeft, 0)}
                    </p>
                    <p className="text-[11px] md:text-xs dark:text-slate-400 text-slate-500 transition-colors uppercase tracking-wider font-semibold">Replacements</p>
                  </div>
                </div>
              </div>

              {/* Active Contracts Summary */}
              <div>
                <h3 className="text-lg font-bold dark:text-white text-brand-navy mb-4 font-heading transition-colors">Active Staff</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {contracts.map(contract => (
                    <div key={contract.id} className="dark:bg-[#1e293b] bg-white p-6 rounded-3xl border dark:border-white/10 border-slate-100 shadow-sm flex flex-col transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full dark:bg-green-500/20 bg-green-50 dark:text-green-400 text-green-600 text-xs font-semibold border dark:border-green-500/30 border-green-100 transition-colors">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active Contract
                            </span>
                            {contract.policeVerified && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full dark:bg-blue-500/10 bg-blue-50 dark:text-blue-400 text-blue-600 text-xs font-semibold border dark:border-blue-500/20 border-blue-100 transition-colors">
                                <ShieldCheck className="w-3.5 h-3.5" /> Police Verified
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-bold dark:text-white text-brand-navy font-heading transition-colors">{contract.maidName}</h4>
                          <p className="text-sm dark:text-slate-400 text-slate-500 transition-colors">{contract.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-brand-gold font-heading">₹{contract.salary.toLocaleString()}</p>
                          <p className="text-xs text-slate-400">per month</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 py-4 border-t dark:border-white/10 border-slate-50 my-auto text-sm dark:text-slate-400 text-slate-600 transition-colors">
                        <div className="flex-1">
                          <p className="dark:text-slate-500 text-slate-400 text-xs mb-1 transition-colors uppercase tracking-wider font-semibold">Contract Started</p>
                          <p className="font-medium dark:text-slate-300 text-slate-800 transition-colors">{new Date(contract.startDate).toLocaleDateString()}</p>
                        </div>
                        <div className="flex-1">
                          <p className="dark:text-slate-500 text-slate-400 text-xs mb-1 transition-colors uppercase tracking-wider font-semibold">Contract Ends At</p>
                          <p className="font-medium dark:text-slate-300 text-slate-800 transition-colors">{new Date(contract.endDate).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 py-4 border-y dark:border-white/10 border-slate-50 my-auto text-sm dark:text-slate-400 text-slate-600 transition-colors">
                        <div className="flex-1">
                          <p className="dark:text-slate-500 text-slate-400 text-xs mb-1 transition-colors uppercase tracking-wider font-semibold">Working Hours</p>
                          <p className="font-medium dark:text-slate-300 text-slate-800 transition-colors">{contract.workingHours}</p>
                        </div>
                        <div className="flex-1">
                          <p className="dark:text-slate-500 text-slate-400 text-xs mb-1 transition-colors uppercase tracking-wider font-semibold">Replacements Left</p>
                          <p className="font-medium dark:text-slate-300 text-slate-800 transition-colors">{contract.replacementsLeft} / 3</p>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-5">
                        <button 
                          onClick={() => { setSelectedContract(contract); setIsReplaceModalOpen(true); }}
                          className="flex-1 dark:bg-slate-800/80 bg-slate-50 dark:hover:bg-slate-700 hover:bg-slate-100 dark:text-slate-300 text-slate-700 font-semibold py-2.5 rounded-xl transition-colors text-sm border dark:border-slate-700 border-slate-200 flex items-center justify-center gap-2"
                        >
                          <RotateCcw className="w-4 h-4" /> Replace Staff
                        </button>
                        <button 
                          onClick={() => { setSelectedContract(contract); setIsContractModalOpen(true); }}
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
              <div className="dark:bg-brand-gold/5 bg-brand-gold/10 border dark:border-brand-gold/10 border-brand-gold/20 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 dark:bg-[#1e293b] bg-white rounded-full flex items-center justify-center shadow-sm text-brand-gold transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white text-brand-navy transition-colors">Need Assistance?</h4>
                    <p className="text-sm dark:text-slate-400 text-slate-600 transition-colors">Contact your dedicated Relationship Manager</p>
                  </div>
                </div>
                <a href={`tel:${BRAND.phoneClean}`} className="dark:bg-[#1e293b] dark:text-white bg-white text-brand-navy font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all border dark:border-white/10 border-transparent whitespace-nowrap text-center">
                  Call {BRAND.phone}
                </a>
              </div>
            </div>
          )}

          {activeTab === 'contracts' && (
            <div className="bg-white dark:bg-[#1e293b] rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm animate-in fade-in duration-500 transition-colors">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider transition-colors">
                    <tr>
                      <th className="p-4 pl-6">Contract ID</th>
                      <th className="p-4">Staff Name</th>
                      <th className="p-4">Role</th>
                      <th className="p-4">Validity</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 pr-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {contracts.map(contract => (
                      <tr key={contract.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4 pl-6 font-medium text-brand-navy dark:text-white">{contract.id}</td>
                        <td className="p-4 text-slate-700 dark:text-slate-300">{contract.maidName}</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">{contract.role}</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">
                          {new Date(contract.startDate).toLocaleDateString()} - {new Date(contract.endDate).toLocaleDateString()}
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400">
                            Active
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <button 
                            onClick={() => { setSelectedContract(contract); setIsContractModalOpen(true); }}
                            className="text-brand-gold hover:text-brand-navy dark:hover:text-amber-400 font-semibold text-sm transition-colors"
                          >
                            View Details
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
            <div className="flex flex-col items-center justify-center text-center p-12 bg-white dark:bg-[#1e293b] rounded-3xl border border-slate-100 dark:border-white/10 shadow-sm animate-in fade-in duration-500 min-h-[400px] transition-colors">
              <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-100 dark:border-white/5 transition-colors">
                <AlertCircle className="w-8 h-8 text-slate-400 dark:text-slate-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2 transition-colors">No pending invoices</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm transition-colors">
                Your account is fully paid. Any future invoices or agency fee receipts will appear here.
              </p>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold dark:text-white text-brand-navy font-heading transition-colors">Support Tickets</h3>
                <button 
                  onClick={() => setIsTicketModalOpen(true)}
                  className="bg-brand-navy dark:bg-white dark:text-brand-navy text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-white transition-colors"
                >
                  Raise New Ticket
                </button>
              </div>
              <div className="space-y-4">
                {typeof DUMMY_TICKETS !== 'undefined' && DUMMY_TICKETS.map(ticket => (
                  <div 
                    key={ticket.id} 
                    onClick={() => { setSelectedTicket(ticket); setIsViewTicketModalOpen(true); }}
                    className="bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-white/10 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md cursor-pointer transition-all dark:hover:bg-slate-800/80"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">{ticket.id}</span>
                          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-brand-gold/20 text-brand-gold dark:bg-brand-gold/20 dark:text-brand-gold'}`}>
                            {ticket.status}
                          </span>
                        </div>
                        <h4 className="font-semibold text-brand-navy dark:text-white transition-colors">{ticket.subject}</h4>
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(ticket.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white dark:bg-[#1e293b] rounded-3xl border border-slate-100 dark:border-white/10 p-6 md:p-8 shadow-sm animate-in fade-in duration-500 transition-colors">
              <h3 className="text-xl font-bold dark:text-white text-brand-navy font-heading mb-6 transition-colors">Profile Settings</h3>
              <form className="max-w-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors">Full Name</label>
                    <input type="text" defaultValue={userData.name} className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors">Phone Number</label>
                    <input type="tel" defaultValue={userData.phone} className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors">Email Address</label>
                  <input type="email" defaultValue={userData.email} className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors">Registered Address</label>
                  <textarea defaultValue={userData.address} rows="3" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
                </div>
                <button className="flex items-center gap-2 bg-brand-gold hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md mt-4">
                  <Save className="w-5 h-5" /> Save Changes
                </button>
              </form>
            </div>
          )}

        </div>
      </main>

      {/* Modals */}
      {isReplaceModalOpen && selectedContract && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsReplaceModalOpen(false)}></div>
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl w-full max-w-lg shadow-2xl relative z-10 animate-in zoom-in-95 duration-200 border border-slate-100 dark:border-white/10">
            <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50 rounded-t-3xl">
              <h3 className="text-xl font-bold font-heading text-brand-navy dark:text-white">Request Replacement</h3>
              <button onClick={() => setIsReplaceModalOpen(false)} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleRequestReplacementSubmit} className="p-6 space-y-5">
              <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 p-4 rounded-xl flex gap-3 text-amber-800 dark:text-amber-500 mb-6">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm">You have <strong>{selectedContract.replacementsLeft}</strong> free replacements remaining for <strong>{selectedContract.maidName}</strong>.</p>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Reason for Replacement</label>
                <select 
                  required
                  value={replaceReason}
                  onChange={(e) => setReplaceReason(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors"
                >
                  <option value="" disabled>Select a reason</option>
                  <option value="performance">Performance Issues</option>
                  <option value="attendance">Frequent Absences</option>
                  <option value="behaviour">Behavioural Issues</option>
                  <option value="relocation">Relocation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Additional Details</label>
                <textarea 
                  rows="3" 
                  placeholder="Please provide specific details to help us find a better match..."
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsReplaceModalOpen(false)} className="flex-1 py-3 rounded-xl font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-3 rounded-xl font-semibold text-white bg-brand-gold hover:bg-amber-500 shadow-md transition-colors">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isContractModalOpen && selectedContract && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsContractModalOpen(false)}></div>
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl w-full max-w-2xl max-h-[90vh] shadow-2xl relative z-10 animate-in zoom-in-95 duration-200 flex flex-col border border-slate-100 dark:border-white/10">
            <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50 rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="bg-brand-gold/10 p-2 rounded-lg text-brand-gold">
                  <FileSignature className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-navy dark:text-white">Service Agreement</h3>
              </div>
              <button onClick={() => setIsContractModalOpen(false)} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 space-y-8">
              <div className="text-center space-y-2 border-b border-slate-100 dark:border-white/10 pb-6">
                <div className="inline-flex items-center justify-center rounded-xl bg-slate-900 p-1 backdrop-blur-sm mb-4">
                  <img src={BRAND.logo} alt="Logo" className="h-8 w-auto object-contain scale-[1.3] drop-shadow-md" />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-wider text-brand-navy dark:text-white">Domestic Staff Service Contract</h4>
                <p className="text-sm text-slate-500 font-mono">Contract ID: {selectedContract.id}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Service Provider</p>
                    <p className="font-bold text-brand-navy dark:text-white">{BRAND.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Mumbai, Maharashtra</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Client Details</p>
                    <p className="font-bold text-brand-navy dark:text-white">{userData.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{userData.address}</p>
                  </div>
                </div>
                <div className="space-y-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
                  <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Staff Assigned:</span>
                    <span className="font-bold text-brand-navy dark:text-white">{selectedContract.maidName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Role:</span>
                    <span className="font-medium text-brand-navy dark:text-white">{selectedContract.role}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Monthly Salary:</span>
                    <span className="font-bold text-brand-gold">₹{selectedContract.salary.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Working Hours:</span>
                    <span className="font-medium text-brand-navy dark:text-white">{selectedContract.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-white/10">
                <div>
                  <h5 className="font-bold text-brand-navy dark:text-white mb-2">1. Scope of Services & Validity</h5>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>This contract is valid from <strong>{new Date(selectedContract.startDate).toLocaleDateString()}</strong> to <strong>{new Date(selectedContract.endDate).toLocaleDateString()}</strong>.</li>
                    <li>The assigned staff will perform duties strictly related to the <strong>{selectedContract.role}</strong> profile as discussed during placement.</li>
                    <li>The working schedule is mutually agreed upon as <strong>{selectedContract.workingHours}</strong>.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-brand-navy dark:text-white mb-2">2. Compensation & Leaves</h5>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>The monthly compensation of <strong>₹{selectedContract.salary.toLocaleString()}</strong> must be paid directly to the staff by the 5th of every month.</li>
                    <li>The staff is entitled to <strong>2 paid leaves per month</strong>. Unused leaves cannot be encashed but can be carried forward up to a maximum of 4 days.</li>
                    <li>Any additional absence beyond the allocated leaves will result in a pro-rata deduction from the monthly salary.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-brand-navy dark:text-white mb-2">3. Replacements & Cancellation</h5>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>The client is entitled to <strong>{selectedContract.replacementsLeft} free replacements</strong> within the contract validity period.</li>
                    <li>A replacement request must be placed at least 72 hours in advance.</li>
                    <li>A 15-day prior notice must be given by either party for termination of this contract.</li>
                    <li>The initial agency fees paid at the time of placement are strictly non-refundable under any circumstances.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-brand-navy dark:text-white mb-2">4. Code of Conduct & Liability</h5>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>The agency ensures comprehensive background checks and police verification prior to placement.</li>
                    <li>The client agrees to provide a safe, respectful, and legally compliant working environment for the staff.</li>
                    <li>The agency assumes no financial liability for any damage, loss, or theft caused at the client's premises, though full cooperation will be provided during any legal investigation.</li>
                  </ul>
                </div>

                {/* Signatures */}
                <div className="flex justify-between items-end pt-8 pb-2 mt-8">
                  <div className="text-center">
                    <div className="w-32 sm:w-48 border-b-2 border-slate-300 dark:border-slate-600 mb-2 mx-auto"></div>
                    <p className="text-sm font-bold text-brand-navy dark:text-white">Authorized Signatory</p>
                    <p className="text-xs text-slate-500">{BRAND.name}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 sm:w-48 border-b-2 border-slate-300 dark:border-slate-600 mb-2 mx-auto"></div>
                    <p className="text-sm font-bold text-brand-navy dark:text-white">Client Signature</p>
                    <p className="text-xs text-slate-500">{userData.name}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-slate-800/50 rounded-b-3xl flex justify-end">
              <button 
                onClick={handleDownloadContract}
                className="flex items-center gap-2 bg-brand-navy dark:bg-white text-white dark:text-brand-navy font-bold py-3 px-6 rounded-xl shadow-md hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
              >
                <Download className="w-5 h-5" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {isTicketModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsTicketModalOpen(false)}></div>
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl w-full max-w-lg shadow-2xl relative z-10 animate-in zoom-in-95 duration-200 border border-slate-100 dark:border-white/10">
            <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50 rounded-t-3xl">
              <h3 className="text-xl font-bold font-heading text-brand-navy dark:text-white">Raise Support Ticket</h3>
              <button onClick={() => setIsTicketModalOpen(false)} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleRaiseTicketSubmit} className="p-6 space-y-5">
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject / Category</label>
                <select 
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors"
                >
                  <option value="" disabled selected>Select the issue type</option>
                  <option value="billing">Billing & Invoices</option>
                  <option value="attendance">Leave & Attendance</option>
                  <option value="complaint">Service Complaint</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Issue Details</label>
                <textarea 
                  required
                  rows="4" 
                  placeholder="Describe your issue in detail..."
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsTicketModalOpen(false)} className="flex-1 py-3 rounded-xl font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-3 rounded-xl font-semibold text-white bg-brand-gold hover:bg-amber-500 shadow-md transition-colors">
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isViewTicketModalOpen && selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsViewTicketModalOpen(false)}></div>
          <div className="bg-white dark:bg-[#1e293b] rounded-3xl w-full max-w-2xl max-h-[90vh] shadow-2xl relative z-10 animate-in zoom-in-95 duration-200 flex flex-col border border-slate-100 dark:border-white/10 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold font-heading text-brand-navy dark:text-white">{selectedTicket.subject}</h3>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${selectedTicket.status === 'Resolved' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-brand-gold/20 text-brand-gold dark:bg-brand-gold/20 dark:text-brand-gold'}`}>
                    {selectedTicket.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">Ticket #{selectedTicket.id} &bull; {selectedTicket.category}</p>
              </div>
              <button onClick={() => setIsViewTicketModalOpen(false)} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30 dark:bg-[#020617]/20">
              {/* Original Query */}
              <div className="bg-white dark:bg-[#1e293b] p-5 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs">{userData.name.charAt(0)}</div>
                    <span className="font-semibold text-brand-navy dark:text-white text-sm">You</span>
                  </div>
                  <span className="text-xs text-slate-400">{new Date(selectedTicket.date).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{selectedTicket.description}</p>
              </div>

              {/* Replies */}
              {selectedTicket.replies.map((reply, idx) => (
                <div key={idx} className="bg-brand-navy/5 dark:bg-brand-navy/30 p-5 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm ml-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-brand-navy dark:text-white text-sm">{reply.sender}</span>
                    </div>
                    <span className="text-xs text-slate-400">{reply.time}</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{reply.message}</p>
                </div>
              ))}
            </div>

            {selectedTicket.status !== 'Resolved' && (
              <div className="p-4 border-t border-slate-100 dark:border-white/10 bg-white dark:bg-[#1e293b]">
                <form onSubmit={handleTicketReplySubmit} className="flex gap-3">
                  <input 
                    type="text" 
                    value={ticketReply}
                    onChange={(e) => setTicketReply(e.target.value)}
                    placeholder="Type your reply..."
                    className="flex-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-navy dark:text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                  <button type="submit" disabled={!ticketReply.trim()} className="bg-brand-navy dark:bg-white text-white dark:text-brand-navy font-semibold px-5 rounded-xl text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    Send
                  </button>
                </form>
              </div>
            )}
            
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
