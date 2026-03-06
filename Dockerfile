# ===== Stage 1: Build Frontend =====
FROM node:20-alpine AS builder

WORKDIR /app

# Install frontend dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy frontend source and build
COPY index.html vite.config.js eslint.config.js ./
COPY src/ ./src/
COPY public/ ./public/

RUN npm run build

# ===== Stage 2: Production Server =====
FROM node:20-alpine

WORKDIR /app

# Install server dependencies
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --omit=dev

# Copy server source
COPY server/ ./server/

# Copy built frontend from builder stage
COPY --from=builder /app/dist ./dist

# Environment
ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

# Start server
CMD ["node", "server/index.js"]
