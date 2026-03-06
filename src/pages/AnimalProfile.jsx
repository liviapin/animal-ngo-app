import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Syringe, Activity, CheckCircle, Info, Home as HomeIcon } from 'lucide-react';
import { animals, ongs } from '../data/mockData';

export default function AnimalProfile() {
    const { id } = useParams();
    const animal = animals.find(a => a.id === parseInt(id));

    if (!animal) {
        return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Animal não encontrado.</div>;
    }

    const ong = ongs.find(o => o.id === animal.ongId);

    return (
        <div className="container" style={{ padding: '2rem 1.5rem 6rem' }}>
            <Link to="/animais" className="btn btn-outline" style={{ display: 'inline-flex', marginBottom: '2rem', padding: '0.5rem 1rem' }}>
                <ArrowLeft size={18} /> Voltar para lista
            </Link>

            <div className="glass-card" style={{ padding: '0', display: 'flex', overflow: 'hidden', minHeight: '600px' }}>
                <div style={{ flex: '1.2' }}>
                    <img src={animal.imageUrl} alt={animal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: '1', padding: '3.5rem 4rem', display: 'flex', flexDirection: 'column' }}>
                    <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                        <div>
                            <h1 style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1 }}>{animal.name}</h1>
                            <span style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>{animal.species} • {animal.breed}</span>
                        </div>
                        <div className="badge badge-success" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>{animal.status}</div>
                    </div>

                    <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                        {animal.about}
                    </p>

                    <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '3rem' }}>
                        <div className="flex flex-col gap-1">
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Idade</span>
                            <span style={{ fontWeight: 600, fontSize: '1.25rem' }}>{animal.age}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Porte</span>
                            <span style={{ fontWeight: 600, fontSize: '1.25rem' }}>{animal.size}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Gênero</span>
                            <span style={{ fontWeight: 600, fontSize: '1.25rem' }}>{animal.gender}</span>
                        </div>
                    </div>

                    {/* Ficha Médica e Personalidade */}
                    <div className="grid grid-cols-2 gap-8" style={{ marginBottom: '3rem' }}>
                        <div>
                            <h3 className="flex items-center gap-2" style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                                <Syringe size={20} /> Ficha Médica
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {animal.medicalInfo.map((info, i) => (
                                    <li key={i} className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                                        <CheckCircle size={16} color="var(--status-success)" /> {info}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="flex items-center gap-2" style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>
                                <Activity size={20} /> Personalidade
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {animal.personality.map((trait, i) => (
                                    <span key={i} className="badge" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', color: 'var(--secondary-hover)' }}>{trait}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className="flex items-center gap-3">
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <HomeIcon size={24} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>{ong?.name}</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{ong?.location}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn btn-outline"><Info size={20} /></button>
                            <button className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                                <Heart size={18} /> {animal.status === 'Para Adoção' ? 'Quero Adotar' : animal.status === 'Lar Temporário' ? 'Oferecer Lar' : 'Apadrinhar'}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
