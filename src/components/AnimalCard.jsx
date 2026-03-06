import { Link } from 'react-router-dom';
import { Heart, Info } from 'lucide-react';

export default function AnimalCard({ animal }) {
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Para Adoção': return 'badge-success';
            case 'Lar Temporário': return 'badge-info';
            case 'Apadrinhamento': return 'badge-warning';
            default: return '';
        }
    };

    return (
        <div className="glass-card flex flex-col" style={{ borderRadius: '1.5rem', height: '100%' }}>
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                    src={animal.imageUrl}
                    alt={animal.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="animal-img"
                />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <span className={`badge ${getStatusBadge(animal.status)}`} style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.85)' }}>
                        {animal.status}
                    </span>
                </div>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <div className="flex justify-between items-center">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{animal.name}</h3>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>{animal.age}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {animal.species} • {animal.gender} • {animal.size}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                    <Link to={`/animal/${animal.id}`} className="btn btn-primary" style={{ flex: 1 }}>
                        <Info size={18} /> Detalhes
                    </Link>
                    <button className="btn btn-outline" style={{ padding: '0.75rem' }}>
                        <Heart size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
