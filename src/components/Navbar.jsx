import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
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
                <div className="flex gap-8 items-center" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>
                    <Link to="/" style={{ color: 'var(--text-main)' }}>Início</Link>
                    <Link to="/animais" className="hover-text-primary">Animais</Link>
                    <Link to="/admin" style={{ color: 'var(--status-info)' }}>Área Restrita</Link>
                    <Link to="/animais" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem' }}>
                        Como Ajudar
                    </Link>
                </div>
            </div>
        </nav>
    );
}
