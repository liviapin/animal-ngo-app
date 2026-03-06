import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PawPrint, UserPlus, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

export default function AdminRegister() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        description: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const { name, email, password, confirmPassword, location, description } = formData;

        // Validations
        if (!name || !email || !password || !confirmPassword) {
            setError('Preencha todos os campos obrigatórios.');
            return;
        }

        if (password.length < 6) {
            setError('A senha deve ter no mínimo 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        setLoading(true);
        try {
            await register({ name, email, password, location, description });
            setSuccess('ONG cadastrada com sucesso! Redirecionando para o login...');
            setTimeout(() => navigate('/admin/login'), 2000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container" style={{ maxWidth: '540px' }}>
                <div className="auth-card">
                    {/* Brand */}
                    <div className="auth-brand">
                        <div className="auth-brand-icon">
                            <PawPrint size={32} color="white" />
                        </div>
                        <h1>Cadastre sua ONG</h1>
                        <p>Crie uma conta para gerenciar os animais da sua organização.</p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="auth-error" style={{ marginBottom: '1rem' }}>
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}

                    {/* Success */}
                    {success && (
                        <div className="auth-success" style={{ marginBottom: '1rem' }}>
                            <CheckCircle size={18} />
                            {success}
                        </div>
                    )}

                    {/* Form */}
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="auth-field">
                            <label htmlFor="reg-name">Nome da ONG *</label>
                            <input
                                id="reg-name"
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="Ex: Patas Amigas"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="auth-field">
                            <label htmlFor="reg-email">Email *</label>
                            <input
                                id="reg-email"
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="contato@suaong.com"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </div>

                        <div className="auth-row">
                            <div className="auth-field">
                                <label htmlFor="reg-password">Senha *</label>
                                <input
                                    id="reg-password"
                                    type="password"
                                    name="password"
                                    className="form-input"
                                    placeholder="Mínimo 6 caracteres"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                />
                            </div>
                            <div className="auth-field">
                                <label htmlFor="reg-confirm">Confirmar Senha *</label>
                                <input
                                    id="reg-confirm"
                                    type="password"
                                    name="confirmPassword"
                                    className="form-input"
                                    placeholder="Repita a senha"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                />
                            </div>
                        </div>

                        <div className="auth-field">
                            <label htmlFor="reg-location">Localização</label>
                            <input
                                id="reg-location"
                                type="text"
                                name="location"
                                className="form-input"
                                placeholder="Ex: São Paulo, SP"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="auth-field">
                            <label htmlFor="reg-description">Descrição da ONG</label>
                            <textarea
                                id="reg-description"
                                name="description"
                                className="form-input"
                                placeholder="Conte um pouco sobre a missão da sua ONG..."
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
                            />
                        </div>

                        <button type="submit" className="auth-submit" disabled={loading || success}>
                            {loading ? (
                                <div className="auth-spinner" />
                            ) : (
                                <>
                                    <UserPlus size={20} />
                                    Criar Conta
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="auth-footer">
                        <p>
                            Já tem uma conta?{' '}
                            <Link to="/admin/login">Fazer login</Link>
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
