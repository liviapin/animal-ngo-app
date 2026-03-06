import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { animals } from '../data/mockData';

export default function AnimalForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;

    const existingAnimal = isEditing ? animals.find(a => a.id === parseInt(id)) : null;

    const [formData, setFormData] = useState(existingAnimal || {
        name: '', species: 'Cachorro', breed: '', age: '', gender: 'Macho',
        size: 'Médio', status: 'Para Adoção', about: '', imageUrl: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Salvo com sucesso! (Fluxo de demonstração)');
        navigate('/admin');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', background: 'var(--bg-color)', minHeight: '100vh', maxWidth: '100%' }}>
            <Link to="/admin" className="btn btn-outline" style={{ display: 'inline-flex', marginBottom: '2rem', padding: '0.75rem 1.5rem', background: 'white' }}>
                <ArrowLeft size={18} /> Voltar ao Painel
            </Link>

            <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'Outfit', color: 'var(--primary-color)' }}>
                    {isEditing ? 'Editar Animal' : 'Cadastrar Novo Animal'}
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Nome do Animal *</label>
                            <input required name="name" value={formData.name} onChange={handleChange} className="form-input" style={{ padding: '1rem' }} placeholder="Ex: Bob" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Espécie *</label>
                            <select name="species" value={formData.species} onChange={handleChange} className="form-input" style={{ padding: '1rem' }}>
                                <option value="Cachorro">Cachorro</option>
                                <option value="Gato">Gato</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Raça</label>
                            <input name="breed" value={formData.breed} onChange={handleChange} className="form-input" style={{ padding: '1rem' }} placeholder="Ex: SRD" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Idade</label>
                            <input name="age" value={formData.age} onChange={handleChange} className="form-input" style={{ padding: '1rem' }} placeholder="Ex: 2 anos" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Gênero</label>
                            <select name="gender" value={formData.gender} onChange={handleChange} className="form-input" style={{ padding: '1rem' }}>
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Porte</label>
                            <select name="size" value={formData.size} onChange={handleChange} className="form-input" style={{ padding: '1rem' }}>
                                <option value="Pequeno">Pequeno</option>
                                <option value="Médio">Médio</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Status na Plataforma</label>
                        <select name="status" value={formData.status} onChange={handleChange} className="form-input" style={{ padding: '1rem' }}>
                            <option value="Para Adoção">Para Adoção</option>
                            <option value="Lar Temporário">Lar Temporário</option>
                            <option value="Apadrinhamento">Apadrinhamento</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>URL da Imagem de Capa</label>
                        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="form-input" style={{ padding: '1rem' }} placeholder="https://..." />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Sobre o Animal</label>
                        <textarea name="about" value={formData.about} onChange={handleChange} className="form-input" style={{ minHeight: '150px', resize: 'vertical', padding: '1rem' }} placeholder="Conte um pouco sobre a história e personalidade..."></textarea>
                    </div>

                    <div className="flex justify-end gap-4" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                        <Link to="/admin" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>Cancelar</Link>
                        <button type="submit" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                            <Save size={20} /> Salvar Animal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
