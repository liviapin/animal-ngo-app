import { useState } from 'react';
import AnimalCard from '../components/AnimalCard';
import { animals } from '../data/mockData';

export default function AnimalList() {
    const [filter, setFilter] = useState('Todos');

    const filteredAnimals = filter === 'Todos'
        ? animals
        : animals.filter(a => a.status === filter);

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', marginBottom: '1rem' }}>Encontre seu novo amigo</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>Filtre por categoria e descubra animais incríveis esperando por você.</p>
            </div>

            <div className="flex justify-center gap-4" style={{ marginBottom: '4rem' }}>
                <button
                    className={`btn ${filter === 'Todos' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setFilter('Todos')}
                >
                    Todos
                </button>
                <button
                    className={`btn ${filter === 'Para Adoção' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ borderColor: filter === 'Para Adoção' ? '' : 'rgba(16, 185, 129, 0.4)', color: filter === 'Para Adoção' ? '' : 'var(--status-success)' }}
                    onClick={() => setFilter('Para Adoção')}
                >
                    Para Adoção
                </button>
                <button
                    className={`btn ${filter === 'Lar Temporário' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ borderColor: filter === 'Lar Temporário' ? '' : 'rgba(59, 130, 246, 0.4)', color: filter === 'Lar Temporário' ? '' : 'var(--status-info)' }}
                    onClick={() => setFilter('Lar Temporário')}
                >
                    Lar Temporário
                </button>
                <button
                    className={`btn ${filter === 'Apadrinhamento' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ borderColor: filter === 'Apadrinhamento' ? '' : 'rgba(245, 158, 11, 0.4)', color: filter === 'Apadrinhamento' ? '' : 'var(--status-warning)' }}
                    onClick={() => setFilter('Apadrinhamento')}
                >
                    Apadrinhamento
                </button>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {filteredAnimals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>

            {filteredAnimals.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                    <p style={{ fontSize: '1.25rem' }}>Nenhum animal encontrado para esta categoria no momento.</p>
                </div>
            )}
        </div>
    );
}
