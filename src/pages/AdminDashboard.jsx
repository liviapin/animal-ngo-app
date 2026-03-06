import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, Plus, Edit, Trash2, Shield } from 'lucide-react';
import { animals, ongs, requests, mockUsers } from '../data/mockData';

export default function AdminDashboard() {
    const [currentUser, setCurrentUser] = useState(mockUsers[1]); // Default to ONG Admin

    const isGlobal = currentUser.role === 'GLOBAL_ADMIN';

    // Dados filtrados baseados no papel
    const viewAnimals = isGlobal ? animals : animals.filter(a => a.ongId === currentUser.ongId);
    const viewRequests = isGlobal ? requests : requests.filter(r => r.ongId === currentUser.ongId);
    const viewOngs = isGlobal ? ongs : ongs.filter(o => o.id === currentUser.ongId);

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
                    <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '0.75rem', border: '1px solid var(--border-color)' }}>
                        <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Simulador de Login:</label>
                        <select
                            className="form-input"
                            value={currentUser.id}
                            onChange={(e) => setCurrentUser(mockUsers.find(u => u.id === parseInt(e.target.value)))}
                            style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}
                        >
                            {mockUsers.map(u => (
                                <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                            ))}
                        </select>
                    </div>

                    <Link to="/admin" className="btn btn-primary" style={{ justifyContent: 'flex-start', padding: '1rem' }}><LayoutDashboard size={20} /> Visão Geral</Link>
                    {isGlobal && <button className="btn btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem' }}><Users size={20} /> Gerenciar ONGs</button>}
                    <button className="btn btn-outline" style={{ justifyContent: 'flex-start', border: 'none', padding: '1rem' }}><Users size={20} /> Relatórios</button>

                    <Link to="/" className="btn btn-outline" style={{ justifyContent: 'flex-start', border: 'none', marginTop: 'auto', padding: '1rem', color: 'var(--status-danger)' }}>Sair / Voltar Site</Link>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '3rem 4rem', overflowY: 'auto' }}>
                <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Bem-vindo, {currentUser.name.split(' ')[0]}</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                            {isGlobal ? 'Visão global de todas as ONGs e atividades da plataforma.' : `Gerenciando dados da ONG: ${viewOngs[0]?.name}`}
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
                    {isGlobal ? (
                        <div className="glass-card flex flex-col items-center justify-center" style={{ padding: '2rem' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-info)', fontFamily: 'Outfit' }}>{viewOngs.length}</span>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>ONGs Parceiras</span>
                        </div>
                    ) : (
                        <div className="glass-card flex flex-col items-center justify-center" style={{ padding: '2rem' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-info)', fontFamily: 'Outfit' }}>{viewAnimals.filter(a => a.status === 'Lar Temporário').length}</span>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Lar Temporário</span>
                        </div>
                    )}
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
