import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Home as HomeIcon, Gift, Users, Heart } from 'lucide-react';
import AnimalCard from '../components/AnimalCard';
import { animals } from '../data/mockData';

export default function Home() {
    const featuredAnimals = animals.slice(0, 3);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                padding: '6rem 2rem 4rem',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                background: 'radial-gradient(circle at top right, rgba(45,212,191,0.08), transparent 40%), radial-gradient(circle at bottom left, rgba(251,191,36,0.08), transparent 40%)'
            }}>
                <div className="container flex flex-col items-center gap-6" style={{ maxWidth: '800px', zIndex: 1 }}>
                    <div className="badge badge-info" style={{ padding: '0.5rem 1rem', fontSize: '1rem', gap: '0.5rem' }}>
                        <Heart size={16} fill="currentColor" /> Ajude a salvar vidas
                    </div>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', color: 'var(--text-main)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Transforme uma Vida. <br />
                        <span style={{ color: 'var(--primary-color)' }}>Adote Amor.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.6 }}>
                        Muitos focinhos esperam ansiosamente por um lar. Seja a mudança que eles precisam hoje e encontre seu novo melhor amigo.
                    </p>
                    <div className="flex gap-4" style={{ marginTop: '2rem' }}>
                        <Link to="/animais" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1.25rem 2.5rem' }}>
                            Conhecer Animais <ArrowRight size={20} />
                        </Link>
                        <Link to="/sobre" className="btn btn-outline" style={{ fontSize: '1.125rem', padding: '1.25rem 2.5rem' }}>
                            Como Ajudar
                        </Link>
                    </div>

                    <div className="flex gap-8 justify-center" style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.5)' }}>
                        <div className="flex flex-col items-center gap-1">
                            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)', fontFamily: 'Outfit' }}>1.2k+</span>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Resgatados</span>
                        </div>
                        <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
                        <div className="flex flex-col items-center gap-1">
                            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary-color)', fontFamily: 'Outfit' }}>850+</span>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Adotados</span>
                        </div>
                        <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
                        <div className="flex flex-col items-center gap-1">
                            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--status-info)', fontFamily: 'Outfit' }}>45+</span>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>ONGs Parceiras</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Como Ajudar / Features */}
            <section className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', letterSpacing: '-0.02em' }}>Como você pode ajudar?</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginTop: '1rem' }}>Sua iniciativa faz a diferença no mundo deles.</p>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="glass-card flex flex-col items-center" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                        <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--status-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                            <HomeIcon size={36} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Adoção</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>Mude a vida de um animal para sempre abrindo as portas da sua casa e do seu coração.</p>
                    </div>
                    <div className="glass-card flex flex-col items-center" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                        <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--status-info)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                            <Shield size={36} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Lar Temporário</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>Ofereça um abrigo seguro e amoroso enquanto nossos resgatados aguardam sua família definitiva.</p>
                    </div>
                    <div className="glass-card flex flex-col items-center" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                        <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--status-warning)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                            <Gift size={36} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Apadrinhamento</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>Ajude financeiramente com custos médicos, ração e cuidados de animais com necessidades especiais.</p>
                    </div>
                </div>
            </section>

            {/* Featured Pets */}
            <section className="container" style={{ marginTop: '2rem' }}>
                <div className="flex justify-between items-end" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', letterSpacing: '-0.02em' }}>Eles esperam por você</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginTop: '0.5rem' }}>Conheça alguns dos nossos anjinhos disponíveis.</p>
                    </div>
                    <Link to="/animais" className="btn btn-outline" style={{ fontSize: '1.1rem' }}>Ver Todos <ArrowRight size={18} /></Link>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {featuredAnimals.map(animal => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>
            </section>
        </div>
    );
}
