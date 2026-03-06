// src/data/mockData.js
export const animals = [
    {
        id: 1,
        name: 'Bolinha',
        species: 'Cachorro',
        breed: 'SRD',
        age: '2 anos',
        gender: 'Macho',
        size: 'Médio',
        status: 'Para Adoção', // Para Adoção, Lar Temporário, Apadrinhamento
        ongId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
        medicalInfo: ['Vacinado', 'Castrado', 'Vermifugado'],
        personality: ['Dócil', 'Brincalhão', 'Energético'],
        physicalTraits: ['Pelagem curta', 'Olhos castanhos'],
        about: 'Bolinha é um cachorro muito alegre que adora correr pelo quintal. Resgatado de um abrigo, ele está pronto para encontrar um novo lar.',
    },
    {
        id: 2,
        name: 'Luna',
        species: 'Gato',
        breed: 'Persa',
        age: '1 ano',
        gender: 'Fêmea',
        size: 'Pequeno',
        status: 'Lar Temporário',
        ongId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
        medicalInfo: ['Castrada', 'FIV/FeLV Negativo'],
        personality: ['Calma', 'Carinhosa'],
        physicalTraits: ['Pelagem longa', 'Olhos verdes'],
        about: 'Luna é uma gatinha doce que precisa de um lar temporário tranquilo para se recuperar de uma pequena cirurgia.',
    },
    {
        id: 3,
        name: 'Thor',
        species: 'Cachorro',
        breed: 'Golden Retriever',
        age: '5 anos',
        gender: 'Macho',
        size: 'Grande',
        status: 'Apadrinhamento',
        ongId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
        medicalInfo: ['Tratamento Renal', 'Castrado'],
        personality: ['Protetor', 'Leal', 'Tranquilo'],
        physicalTraits: ['Pelagem dourada longa', 'Forte'],
        about: 'Thor precisa de padrinhos para ajudar no custo do seu tratamento renal contínuo. Ele é um excelente companheiro e muito grato a quem o ajuda.',
    }
];

export const ongs = [
    {
        id: 1,
        name: 'Patas Amigas',
        description: 'Resgatando animais em situação de rua desde 2010.',
        location: 'São Paulo, SP'
    },
    {
        id: 2,
        name: 'Anjos de Patas',
        description: 'Foco em animais idosos e com necessidades especiais.',
        location: 'Rio de Janeiro, RJ'
    }
];

export const requests = [
    {
        id: 1,
        animalId: 1,
        ongId: 1,
        type: 'Adoção',
        applicantName: 'João Silva',
        status: 'Pendente',
        date: '2026-03-05'
    }
];

export const mockUsers = [
    {
        id: 1,
        name: 'Lívia (Global)',
        role: 'GLOBAL_ADMIN',
        ongId: null, // Global access
    },
    {
        id: 2,
        name: 'Carlos (Patas Amigas)',
        role: 'ONG_ADMIN',
        ongId: 1, // Only access to ONG 1
    }
];
