<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Express-4.21-000000?logo=express&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/SQLite-3-003B57?logo=sqlite&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/JWT-Auth-000000?logo=jsonwebtokens&logoColor=white&style=for-the-badge" />
</p>

# 🐾 ONG Animais

**Plataforma web para ONGs de proteção animal** — conecta animais resgatados a pessoas que desejam adotar, oferecer lar temporário ou apadrinhar.

---

## 📋 Resumo da Aplicação

O **ONG Animais** é um sistema completo que permite ONGs cadastrarem e gerenciarem animais resgatados, enquanto visitantes podem navegar pelo catálogo e encontrar seu novo melhor amigo. A plataforma oferece três formas de ajuda: **Adoção**, **Lar Temporário** e **Apadrinhamento**.

### Funcionalidades Implementadas

| Área | Funcionalidade | Status |
|------|---------------|--------|
| 🏠 **Site Público** | Landing page com hero, estatísticas e destaques | ✅ |
| 🐕 **Catálogo** | Listagem de animais com filtros por categoria | ✅ |
| 📄 **Perfil** | Página detalhada do animal (ficha médica, personalidade, ONG) | ✅ |
| 🔐 **Autenticação** | Login e cadastro de ONGs com JWT + bcrypt | ✅ |
| 📊 **Dashboard** | Painel administrativo com estatísticas e gestão | ✅ |
| ✏️ **CRUD Animais** | Formulário de cadastro/edição de animais | ✅ |
| 🛡️ **Rotas Protegidas** | Proteção de rotas admin com redirecionamento | ✅ |

---

## 🏗️ Arquitetura

```
ong-animais/
├── server/                     # Backend API
│   ├── index.js                # Entry point — Express na porta 3001
│   ├── db.js                   # Inicialização SQLite + schema
│   ├── middleware/
│   │   └── auth.js             # Middleware de verificação JWT
│   ├── routes/
│   │   └── auth.js             # Rotas: register, login, me
│   ├── database.sqlite         # Banco de dados (gerado automaticamente)
│   └── package.json
│
├── src/                        # Frontend React
│   ├── main.jsx                # Entry point React
│   ├── App.jsx                 # Roteamento + AuthProvider + ProtectedRoute
│   ├── index.css               # Design tokens (cores, fontes, variáveis)
│   │
│   ├── context/
│   │   └── AuthContext.jsx     # Estado global de autenticação
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegação glassmorphism
│   │   └── AnimalCard.jsx      # Card de animal reutilizável
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── AnimalList.jsx      # Catálogo com filtros
│   │   ├── AnimalProfile.jsx   # Perfil detalhado do animal
│   │   ├── AdminLogin.jsx      # 🔐 Login da ONG
│   │   ├── AdminRegister.jsx   # 🔐 Cadastro de nova ONG
│   │   ├── AdminDashboard.jsx  # 📊 Painel administrativo
│   │   └── AnimalForm.jsx      # ✏️ Cadastro/edição de animais
│   │
│   ├── styles/
│   │   ├── layout.css          # Utilitários de layout (grid, flex)
│   │   ├── components.css      # Botões, cards, badges, inputs
│   │   └── auth.css            # Estilos das páginas de autenticação
│   │
│   └── data/
│       └── mockData.js         # Dados mock (animais, ONGs, solicitações)
│
├── vite.config.js              # Config Vite + proxy /api → backend
├── package.json
└── index.html
```

---

## 🛠️ Especificações Técnicas

### Frontend

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **React** | 19.2 | Biblioteca de UI com componentes funcionais e hooks |
| **React Router DOM** | 7.13 | Roteamento SPA com rotas protegidas |
| **Vite** | 5.4 | Build tool e dev server com HMR |
| **Lucide React** | 0.577 | Biblioteca de ícones SVG |
| **CSS Puro** | — | Estilização sem frameworks (glassmorphism, gradientes, animações) |

### Backend

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **Node.js** | 18+ | Runtime JavaScript |
| **Express** | 4.21 | Framework HTTP para API REST |
| **better-sqlite3** | 11.7 | Banco de dados SQLite embarcado |
| **bcryptjs** | 2.4 | Hash de senhas com salt |
| **jsonwebtoken** | 9.0 | Tokens JWT para autenticação stateless |
| **cors** | 2.8 | Middleware de Cross-Origin Resource Sharing |

### Banco de Dados

**SQLite** com uma tabela principal:

```sql
CREATE TABLE ongs (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL,
  email       TEXT UNIQUE NOT NULL,
  password    TEXT NOT NULL,          -- bcrypt hash
  location    TEXT,
  description TEXT,
  role        TEXT DEFAULT 'ONG_ADMIN',
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### API Endpoints

| Método | Rota | Autenticação | Descrição |
|--------|------|:---:|-----------|
| `POST` | `/api/auth/register` | ❌ | Cadastro de nova ONG |
| `POST` | `/api/auth/login` | ❌ | Login (retorna JWT) |
| `GET` | `/api/auth/me` | 🔒 JWT | Dados do usuário autenticado |
| `GET` | `/api/health` | ❌ | Health check do servidor |

### Design System

- **Fontes**: Inter (corpo) + Outfit (títulos) via Google Fonts
- **Paleta**: Teal (`#2DD4BF`) + Amber (`#FBBF24`) + Slate
- **Estilo**: Glassmorphism com `backdrop-filter: blur`, bordas semi-transparentes
- **Animações**: Transições suaves, gradient backgrounds animados, shake em erros
- **Responsividade**: Grid adaptativo (4 → 2 → 1 colunas)

---

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** 18 ou superior
- **npm** 9 ou superior

### Instalação e Execução

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd ong-animais

# 2. Instale as dependências do frontend
npm install

# 3. Instale as dependências do backend
cd server
npm install
cd ..

# 4. Inicie o backend (Terminal 1)
cd server
node index.js
# → 🐾 ONG Animais API running on http://localhost:3001

# 5. Inicie o frontend (Terminal 2)
npm run dev
# → Vite dev server em http://localhost:5173
```

### Rotas da Aplicação

| Rota | Acesso | Descrição |
|------|--------|-----------|
| `/` | Público | Landing page |
| `/animais` | Público | Catálogo de animais |
| `/animal/:id` | Público | Perfil detalhado do animal |
| `/admin/login` | Público | Login da ONG |
| `/admin/cadastro` | Público | Cadastro de nova ONG |
| `/admin` | 🔒 Protegido | Dashboard administrativo |
| `/admin/animal/novo` | 🔒 Protegido | Cadastrar novo animal |
| `/admin/animal/editar/:id` | 🔒 Protegido | Editar animal existente |

---

## 🔐 Fluxo de Autenticação

```
┌─────────────┐    POST /register     ┌──────────┐
│  Cadastro   │ ───────────────────→  │  SQLite  │
│  (ONG nova) │    bcrypt hash pwd    │   (DB)   │
└─────────────┘                       └──────────┘
                                            │
┌─────────────┐    POST /login        ┌──────────┐
│    Login    │ ───────────────────→  │  Verify  │
│  (email+pw) │                       │  bcrypt  │
└─────────────┘                       └────┬─────┘
                                           │ ✅
                                    ┌──────┴──────┐
                                    │  Gera JWT   │
                                    │ (exp: 7 dias)│
                                    └──────┬──────┘
                                           │
                                    ┌──────┴──────┐
                                    │ localStorage │
                                    │ auth_token   │
                                    └──────┬──────┘
                                           │
                                    ┌──────┴──────┐
                                    │  Dashboard  │
                                    │   /admin    │
                                    └─────────────┘
```

---

## 📝 Licença

Este projeto é de uso educacional / acadêmico.
