import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import AnimalProfile from './pages/AnimalProfile';
import AdminDashboard from './pages/AdminDashboard';
import AnimalForm from './pages/AnimalForm';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import './styles/layout.css';
import './styles/components.css';

// Protected route wrapper — redirects to login if not authenticated
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-color)',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid var(--border-color)',
          borderTopColor: 'var(--primary-color)',
          borderRadius: '50%',
          animation: 'spin 0.6s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="page-wrapper" style={{ background: isAdmin ? 'var(--bg-color)' : 'transparent' }}>
      {!isAdmin && <Navbar />}
      <main className="main-content" style={{ padding: isAdmin ? 0 : '0 0' }}>
        {children}
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/animais" element={<AnimalList />} />
            <Route path="/animal/:id" element={<AnimalProfile />} />

            {/* Auth routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/cadastro" element={<AdminRegister />} />

            {/* Protected admin routes */}
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/animal/novo" element={<ProtectedRoute><AnimalForm /></ProtectedRoute>} />
            <Route path="/admin/animal/editar/:id" element={<ProtectedRoute><AnimalForm /></ProtectedRoute>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
