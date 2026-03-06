import { Link } from 'react-router-dom';
import { Heart, Github, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--surface-color)',
            borderTop: '1px solid var(--border-color)',
            padding: '4rem 2rem 2rem',
            marginTop: '4rem'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2" style={{ color: 'var(--primary-hover)', fontWeight: 800, fontSize: '1.25rem', fontFamily: 'Outfit', marginBottom: '1rem' }}>
                            <Heart fill="currentColor" size={20} /> ONG Animais
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                            Conectando animais resgatados a lares amorosos. Juntos, transformamos vidas.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontFamily: 'Outfit', fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Navegação</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.15s' }}>Início</Link>
                            <Link to="/animais" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Animais</Link>
                            <Link to="/admin/login" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Área da ONG</Link>
                        </div>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 style={{ fontFamily: 'Outfit', fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Contato</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="mailto:contato@onganimais.com" className="flex items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <Mail size={16} /> contato@onganimais.com
                            </a>
                        </div>
                        <div className="flex gap-4" style={{ marginTop: '1rem' }}>
                            <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.15s' }} aria-label="GitHub"><Github size={20} /></a>
                            <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.15s' }} aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} ONG Animais. Feito com <Heart size={14} fill="var(--status-danger)" color="var(--status-danger)" style={{ verticalAlign: 'middle' }} /> para quem ama os animais.
                    </p>
                </div>
            </div>
        </footer>
    );
}
