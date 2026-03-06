import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useAuth();

    return (
        <nav className="glass-card" style={{
            position: 'sticky', top: '1rem', zIndex: 100,
            margin: '0 auto', maxWidth: '1280px',
            borderRadius: '1rem',
            padding: '1rem 2rem',
            width: 'calc(100% - 2rem)'
        }}>
            <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--primary-hover)', fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Outfit' }}>
                    <Heart fill="currentColor" /> ONG Animais
                </Link>

                {/* Mobile hamburger */}
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                    style={{
                        display: 'none', background: 'none', border: 'none',
                        cursor: 'pointer', color: 'var(--text-main)', padding: '0.25rem'
                    }}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation links */}
                <div
                    className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
                    style={{ fontWeight: 500, color: 'var(--text-muted)' }}
                >
                    <Link to="/" style={{ color: 'var(--text-main)' }} onClick={() => setMenuOpen(false)}>Início</Link>
                    <Link to="/animais" onClick={() => setMenuOpen(false)}>Animais</Link>
                    <Link
                        to={user ? '/admin' : '/admin/login'}
                        style={{ color: 'var(--status-info)' }}
                        onClick={() => setMenuOpen(false)}
                    >
                        {user ? 'Painel Admin' : 'Login ONG'}
                    </Link>
                    <Link to="/animais" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem' }} onClick={() => setMenuOpen(false)}>
                        Como Ajudar
                    </Link>
                </div>
            </div>
        </nav>
    );
}
