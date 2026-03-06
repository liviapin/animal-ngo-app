import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PawPrint, LogIn, ArrowLeft, AlertCircle, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Preencha todos os campos.');
            return;
        }

        setLoading(true);
        try {
            await login(email, password);
            navigate('/admin');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    {/* Brand */}
                    <div className="auth-brand">
                        <div className="auth-brand-icon">
                            <PawPrint size={32} color="white" />
                        </div>
                        <h1>Área da ONG</h1>
                        <p>Faça login para gerenciar seus animais e solicitações.</p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="auth-error">
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="auth-field">
                            <label htmlFor="login-email">Email</label>
                            <input
                                id="login-email"
                                type="email"
                                className="form-input"
                                placeholder="ong@exemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                            />
                        </div>

                        <div className="auth-field">
                            <label htmlFor="login-password">Senha</label>
                            <input
                                id="login-password"
                                type="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </div>

                        <button type="submit" className="auth-submit" disabled={loading}>
                            {loading ? (
                                <div className="auth-spinner" />
                            ) : (
                                <>
                                    <LogIn size={20} />
                                    Entrar
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="auth-footer">
                        <p>
                            Ainda não tem conta?{' '}
                            <Link to="/admin/cadastro">Cadastre sua ONG</Link>
                        </p>
                        <Link to="/" className="auth-back-link">
                            <ArrowLeft size={16} />
                            Voltar ao site
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
