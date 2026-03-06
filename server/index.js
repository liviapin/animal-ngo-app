import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import authRoutes from './routes/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Production: serve frontend static files
if (isProduction) {
    const distPath = join(__dirname, '..', 'dist');
    app.use(express.static(distPath));

    // SPA fallback — all non-API routes serve index.html
    app.get('*', (req, res) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(join(distPath, 'index.html'));
        }
    });
}

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🐾 ONG Animais API running on http://localhost:${PORT}`);
    if (isProduction) {
        console.log(`📦 Serving frontend from /dist`);
    }
});
