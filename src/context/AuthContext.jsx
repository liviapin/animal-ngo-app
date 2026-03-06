import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const API_BASE = '/api/auth';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing token on mount
    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            fetch(`${API_BASE}/me`, {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((res) => {
                    if (!res.ok) throw new Error('Token inválido');
                    return res.json();
                })
                .then((data) => setUser(data.user))
                .catch(() => {
                    localStorage.removeItem('auth_token');
                    setUser(null);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email, password) => {
        const res = await fetch(`${API_BASE}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Erro ao fazer login.');
        }

        localStorage.setItem('auth_token', data.token);
        setUser(data.user);
        return data.user;
    };

    const register = async (ongData) => {
        const res = await fetch(`${API_BASE}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ongData),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Erro ao cadastrar.');
        }

        return data;
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
