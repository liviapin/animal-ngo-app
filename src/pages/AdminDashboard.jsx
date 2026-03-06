import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Plus, Edit, Trash2, Shield, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { animals, ongs, requests } from '../data/mockData';

export default function AdminDashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // Dados filtrados (ONG admin vê apenas seus dados)
    const viewAnimals = animals;
    const viewRequests = requests;

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="flex" style={{ minHeight: '100vh', background: 'var(--bg-color)', width: '100%' }}>
            {/* Sidebar */}
            <aside className="glass-card" style={{ width: '280px', borderRadius: 0, borderRight: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <h2 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-color)', fontFamily: 'Outfit' }}>
                        <Shield size={24} /> ONG Dashboard
                    </h2>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    {/* User info */}
                    <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '0.75rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '42px', height: '42px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary-color), #0D9488)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'Outfit',
                            flexShrink: 0
                        }}>
                            {user?.name?.charAt(0).toUpperCase() || <User size={20} />}
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <p style={{ fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.name || 'Administrador'}</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email}</p>
                        </div>
                    </div>

                    <Link to="/admin" className="btn btn-primary" style={{ justifyContent: 'flex-start', padding: '1rem' }}><LayoutDashboard size={20} /> Visão Geral</Link>

                    <button
                        onClick={handleLogout}
                        className="btn btn-outline"
                        style={{ justifyContent: 'flex-start', border: 'none', marginTop: 'auto', padding: '1rem', color: 'var(--status-danger)', gap: '0.5rem' }}
                    >
                        <LogOut size={20} /> Sair da Conta
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '3rem 4rem', overflowY: 'auto' }}>
                <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Bem-vindo, {user?.name?.split(' ')[0] || 'Admin'}</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                            Gerencie os animais e solicitações da sua ONG.
                        </p>
                    </div>
                    <Link to="/admin/animal/novo" className="btn btn-primary" style={{ padding: '1rem 1.5rem' }}><Plus size={20} /> Novo Animal</Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '3rem' }}>
                    <div className="glass-card flex flex-col items-center justify-center" style={{ padding: '2rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)', fontFamily: 'Outfit' }}>{viewAnimals.length}</span>
                        <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Animais Cadastrados</span>
                    </div>
                    <div className="glass-card flex flex-col items-center justify-center" style={{ padding: '2rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-success)', fontFamily: 'Outfit' }}>{viewAnimals.filter(a => a.status === 'Para Adoção').length}</span>
                        <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Para Adoção</span>
                    </div>
                    <div className="glass-card flex flex-col items-center justify-center" style={{ padding: '2rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-warning)', fontFamily: 'Outfit' }}>{viewRequests.length}</span>
                        <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Solicitações Pendentes</span>
                    </div>
                    <div className="glass-card flex flex-col items-center justify-center" style={{ padding: '2rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-info)', fontFamily: 'Outfit' }}>{viewAnimals.filter(a => a.status === 'Lar Temporário').length}</span>
                        <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Lar Temporário</span>
                    </div>
                </div>

                {/* Tables area */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Seus Animais</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)' }}>
                                    <th style={{ padding: '1rem 0', fontWeight: 600 }}>Nome</th>
                                    <th style={{ fontWeight: 600 }}>Status</th>
                                    <th style={{ textAlign: 'right', fontWeight: 600 }}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {viewAnimals.slice(0, 5).map(animal => (
                                    <tr key={animal.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                        <td style={{ padding: '1.25rem 0', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <img src={animal.imageUrl} alt={animal.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                                            {animal.name}
                                        </td>
                                        <td><span className={`badge ${animal.status === 'Para Adoção' ? 'badge-success' : 'badge-warning'}`}>{animal.status}</span></td>
                                        <td style={{ textAlign: 'right' }}>
                                            <Link to={`/admin/animal/editar/${animal.id}`} className="btn btn-outline" style={{ padding: '0.5rem', border: 'none', color: 'var(--status-info)' }}><Edit size={18} /></Link>
                                            <button className="btn btn-outline" style={{ padding: '0.5rem', border: 'none', color: 'var(--status-danger)' }}><Trash2 size={18} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Últimas Solicitações</h3>
                        {viewRequests.length > 0 ? (
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)' }}>
                                        <th style={{ padding: '1rem 0', fontWeight: 600 }}>Data</th>
                                        <th style={{ fontWeight: 600 }}>Interessado</th>
                                        <th style={{ fontWeight: 600 }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {viewRequests.map(req => (
                                        <tr key={req.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                            <td style={{ padding: '1.25rem 0', color: 'var(--text-muted)' }}>{new Date(req.date).toLocaleDateString()}</td>
                                            <td style={{ fontWeight: 500 }}>{req.applicantName}<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{req.type}</span></td>
                                            <td><span className="badge badge-info">{req.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p style={{ color: 'var(--text-muted)', padding: '2rem 0', textAlign: 'center' }}>Nenhuma solicitação no momento.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
