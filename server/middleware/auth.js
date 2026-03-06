import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'ong-animais-secret-key-2026';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ error: 'Token de autenticação não fornecido.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido ou expirado.' });
    }
}

export { JWT_SECRET };
