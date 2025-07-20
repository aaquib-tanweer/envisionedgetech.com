import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { 
  MessageCircle, 
  FileText, 
  Briefcase,
  LogOut,
  Trash2,
  Search
} from 'lucide-react';
import logo from '@/assets/images/logo.png';

interface JobApplication {
  id: string;
  job_title: string;
  full_name: string;
  email: string;
  phone: string;
  portfolio: string;
  cover_letter: string;
  resume_url: string;
  status: string;
  created_at: string;
}

interface BlogComment {
  id: string;
  blog_id: number;
  comment: string;
  email: string;
  website?: string;
  status: string;
  created_at: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message: string;
  status: string;
  created_at: string;
}

type TabType = 'job-applications' | 'blog-comments' | 'contact-messages';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>('contact-messages');
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [blogComments, setBlogComments] = useState<BlogComment[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const itemsPerPage = 10;

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user?.email === 'admin@envisionedgetech.com') {
      setIsAuthenticated(true);
      fetchData();
    }
    setIsLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'admin@envisionedgetech.com',
        password: 'Admin$envision'
      });

      if (error) {
        toast.error('Login failed. Please check your credentials.');
        return;
      }

      if (data.user) {
        setIsAuthenticated(true);
        toast.success('Login successful!');
        fetchData();
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch job applications
      const { data: jobData } = await supabase
        .from('job_applications')
        .select('*')
        .order('created_at', { ascending: false });

      // Fetch blog comments
      const { data: commentData } = await supabase
        .from('blog_comments')
        .select('*')
        .order('created_at', { ascending: false });

      // Fetch contact messages (if table exists)
      const { data: contactData } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      setJobApplications(jobData || []);
      setBlogComments(commentData || []);
      setContactMessages(contactData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (table: string, id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Failed to delete item');
        return;
      }

      toast.success('Item deleted successfully');
      fetchData(); // Refresh data
    } catch (error) {
      toast.error('Failed to delete item');
    }
  };

  const handleStatusUpdate = async (table: string, id: string, status: string) => {
    try {
      const { error } = await supabase
        .from(table)
        .update({ status })
        .eq('id', id);

      if (error) {
        toast.error('Failed to update status');
        return;
      }

      toast.success('Status updated successfully');
      fetchData(); // Refresh data
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const getFilteredData = () => {
    let data: any[] = [];
    
    switch (activeTab) {
      case 'job-applications':
        data = jobApplications.filter(item => 
          item.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.job_title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'blog-comments':
        data = blogComments.filter(item => 
          item.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case 'contact-messages':
        data = contactMessages.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.message.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
    }

    return data;
  };

  const getPaginatedData = () => {
    const filteredData = getFilteredData();
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(getFilteredData().length / itemsPerPage);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-950 via-brand-900 to-electric-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(99,102,241,0.05)_25%,transparent_50%,rgba(52,211,153,0.05)_75%,transparent_100%)] animate-aurora" />
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="relative z-10 max-w-md w-full">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Envision Edge Tech" className="w-20 h-20 object-contain" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-white/70">Sign in to access the admin panel</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500 text-white placeholder-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500 text-white placeholder-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-electric-600 to-neon-600 hover:from-electric-500 hover:to-neon-500 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-950 via-brand-900 to-electric-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(99,102,241,0.05)_25%,transparent_50%,rgba(52,211,153,0.05)_75%,transparent_100%)] animate-aurora" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Envision Edge Tech" className="w-10 h-10 object-contain" />
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-600/30 transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Job Applications</p>
                <p className="text-3xl font-bold text-white">{jobApplications.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Blog Comments</p>
                <p className="text-3xl font-bold text-white">{blogComments.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Contact Messages</p>
                <p className="text-3xl font-bold text-white">{contactMessages.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-white/20">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'job-applications', label: 'Job Applications', icon: Briefcase },
                { id: 'blog-comments', label: 'Blog Comments', icon: MessageCircle },
                { id: 'contact-messages', label: 'Contact Messages', icon: FileText }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as TabType);
                    setCurrentPage(1);
                    setSearchTerm('');
                  }}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-electric-500 text-electric-400'
                      : 'border-transparent text-white/70 hover:text-white hover:border-white/30'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Search and Filters */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500 text-white placeholder-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>
              <button
                onClick={fetchData}
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-electric-600 to-neon-600 hover:from-electric-500 hover:to-neon-500 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-500"></div>
                <span className="ml-3 text-white/70">Loading data...</span>
              </div>
            ) : (
              <div className="p-6">
                {activeTab === 'job-applications' && (
                  <JobApplicationsTable 
                    data={getPaginatedData()}
                    onDelete={(id: string) => handleDelete('job_applications', id)}
                    onStatusUpdate={(id: string, status: string) => handleStatusUpdate('job_applications', id, status)}
                  />
                )}
                
                {activeTab === 'blog-comments' && (
                  <BlogCommentsTable 
                    data={getPaginatedData()}
                    onDelete={(id: string) => handleDelete('blog_comments', id)}
                    onStatusUpdate={(id: string, status: string) => handleStatusUpdate('blog_comments', id, status)}
                  />
                )}
                
                {activeTab === 'contact-messages' && (
                  <ContactMessagesTable 
                    data={getPaginatedData()}
                    onDelete={(id: string) => handleDelete('contact_messages', id)}
                    onStatusUpdate={(id: string, status: string) => handleStatusUpdate('contact_messages', id, status)}
                  />
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-white/70">
                      Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, getFilteredData().length)} of {getFilteredData().length} results
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg disabled:opacity-50 hover:bg-white/20 transition-all duration-300"
                      >
                        Previous
                      </button>
                      <span className="px-4 py-2 text-white/70">Page {currentPage} of {totalPages}</span>
                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg disabled:opacity-50 hover:bg-white/20 transition-all duration-300"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Table Components
const JobApplicationsTable = ({ data, onDelete, onStatusUpdate }: any) => (
  <table className="w-full">
    <thead>
      <tr className="border-b border-white/20">
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Name</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Email</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Job Title</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Phone</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Status</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Date</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item: JobApplication) => (
        <tr key={item.id} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300">
          <td className="py-4 px-6 text-white">{item.full_name}</td>
          <td className="py-4 px-6 text-white/90">{item.email}</td>
          <td className="py-4 px-6 text-white/90">{item.job_title}</td>
          <td className="py-4 px-6 text-white/90">{item.phone}</td>
          <td className="py-4 px-6">
            <select
              value={item.status}
              onChange={(e) => onStatusUpdate(item.id, e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
            >
              <option value="pending" className="bg-brand-900">Pending</option>
              <option value="reviewed" className="bg-brand-900">Reviewed</option>
              <option value="accepted" className="bg-brand-900">Accepted</option>
              <option value="rejected" className="bg-brand-900">Rejected</option>
            </select>
          </td>
          <td className="py-4 px-6 text-white/70">{new Date(item.created_at).toLocaleDateString()}</td>
          <td className="py-4 px-6">
            <div className="flex gap-2">
              <button
                onClick={() => onDelete(item.id)}
                className="text-red-400 hover:text-red-300 transition-colors duration-300"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const BlogCommentsTable = ({ data, onDelete, onStatusUpdate }: any) => (
  <table className="w-full">
    <thead>
      <tr className="border-b border-white/20">
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Blog ID</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Email</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Comment</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Website</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Status</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Date</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item: BlogComment) => (
        <tr key={item.id} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300">
          <td className="py-4 px-6 text-white">{item.blog_id}</td>
          <td className="py-4 px-6 text-white/90">{item.email}</td>
          <td className="py-4 px-6 text-white/90 max-w-xs truncate">{item.comment}</td>
          <td className="py-4 px-6">
            {item.website && (
              <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-electric-400 hover:text-electric-300 transition-colors duration-300 underline">
                {item.website}
              </a>
            )}
          </td>
          <td className="py-4 px-6">
            <select
              value={item.status}
              onChange={(e) => onStatusUpdate(item.id, e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
            >
              <option value="pending" className="bg-brand-900">Pending</option>
              <option value="approved" className="bg-brand-900">Approved</option>
              <option value="rejected" className="bg-brand-900">Rejected</option>
            </select>
          </td>
          <td className="py-4 px-6 text-white/70">{new Date(item.created_at).toLocaleDateString()}</td>
          <td className="py-4 px-6">
            <div className="flex gap-2">
              <button
                onClick={() => onDelete(item.id)}
                className="text-red-400 hover:text-red-300 transition-colors duration-300"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ContactMessagesTable = ({ data, onDelete, onStatusUpdate }: any) => (
  <table className="w-full">
    <thead>
      <tr className="border-b border-white/20">
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Name</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Email</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Phone</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Company</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Website</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Message</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Status</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Date</th>
        <th className="text-left py-4 px-6 text-white/90 font-semibold">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item: ContactMessage) => (
        <tr key={item.id} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300">
          <td className="py-4 px-6 text-white">{item.name}</td>
          <td className="py-4 px-6 text-white/90">{item.email}</td>
          <td className="py-4 px-6 text-white/90">{item.phone || '-'}</td>
          <td className="py-4 px-6 text-white/90">{item.company || '-'}</td>
          <td className="py-4 px-6">
            {item.website ? (
              <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-electric-400 hover:text-electric-300 transition-colors duration-300 underline">
                {item.website}
              </a>
            ) : '-'}
          </td>
          <td className="py-4 px-6 text-white/90 max-w-xs truncate">{item.message}</td>
          <td className="py-4 px-6">
            <select
              value={item.status}
              onChange={(e) => onStatusUpdate(item.id, e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
            >
              <option value="new" className="bg-brand-900">New</option>
              <option value="read" className="bg-brand-900">Read</option>
              <option value="replied" className="bg-brand-900">Replied</option>
              <option value="archived" className="bg-brand-900">Archived</option>
            </select>
          </td>
          <td className="py-4 px-6 text-white/70">{new Date(item.created_at).toLocaleDateString()}</td>
          <td className="py-4 px-6">
            <div className="flex gap-2">
              <button
                onClick={() => onDelete(item.id)}
                className="text-red-400 hover:text-red-300 transition-colors duration-300"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
); 