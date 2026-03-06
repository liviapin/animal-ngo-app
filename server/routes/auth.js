import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';
import { authenticateToken, JWT_SECRET } from '../middleware/auth.js';

const router = Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, location, description } = req.body;

        // Validations
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'A senha deve ter no mínimo 6 caracteres.' });
        }

        // Check if email already exists
        const existing = db.prepare('SELECT id FROM ongs WHERE email = ?').get(email);
        if (existing) {
            return res.status(409).json({ error: 'Este email já está cadastrado.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert into database
        const stmt = db.prepare(
            'INSERT INTO ongs (name, email, password, location, description) VALUES (?, ?, ?, ?, ?)'
        );
        const result = stmt.run(name, email, hashedPassword, location || null, description || null);

        res.status(201).json({
            message: 'ONG cadastrada com sucesso!',
            ongId: result.lastInsertRowid,
        });
    } catch (err) {
        console.error('Register error:', err);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
        }

        // Find user
        const user = db.prepare('SELECT * FROM ongs WHERE email = ?').get(email);
        if (!user) {
            return res.status(401).json({ error: 'Email ou senha incorretos.' });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Email ou senha incorretos.' });
        }

        // Generate token
        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                location: user.location,
                description: user.description,
            },
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// GET /api/auth/me — Get current user from token
router.get('/me', authenticateToken, (req, res) => {
    const user = db.prepare('SELECT id, name, email, role, location, description FROM ongs WHERE id = ?').get(req.user.id);
    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json({ user });
});

export default router;
