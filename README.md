# 🧠 MindLink — Monitor de Saúde Mental e Bem-Estar

Um sistema moderno e intuitivo para o acompanhamento do bem-estar emocional e qualidade de vida no trabalho, desenvolvido com **React**, **TypeScript** e **Tailwind CSS**.

---

## 📋 Sobre o Projeto

**MindLink** é uma plataforma web criada para ajudar profissionais e empresas a acompanharem o estado emocional durante a semana de trabalho.  
O sistema permite registrar o humor diário, visualizar gráficos de bem-estar e receber sugestões personalizadas para manter o equilíbrio entre produtividade e descanso.

---

## 👥 Equipe Desenvolvedores

**Álvaro Freitas Miranda** – Desenvolvedor Back-End  
GitHub: [@alvinhooo](https://github.com/alvinhooo)  
LinkedIn: [Álvaro Freitas Miranda](https://www.linkedin.com/in/%C3%A1lvaro-miranda-a71783314/)

**Vitor Viana Carneiro Deroldo** – Desenvolvedor Back-End  
GitHub: [@vderoldo7](https://github.com/vderoldo7)  
LinkedIn: [Vitor Deroldo](https://www.linkedin.com/in/vitor-deroldo/)

**Rafael Pascotte Mercadante** – Desenvolvedor Back-End  
GitHub: [@RPascotte15](https://github.com/pascotterafaaa)  
LinkedIn: [Rafael Pascotte Mercadante](https://www.linkedin.com/in/rafael-pascotte-mercadante-6a5405196/)

---

## 🏫 Instituição

**FIAP - Faculdade de Informática e Administração Paulista**  
Curso: **Tecnologia em Desenvolvimento de Sistemas para Internet**  
Equipe: **InovaCare**  
Turma: **1TDSPI**

---

## 🎥 Vídeo de Apresentação
[Assista no YouTube](https://youtu.be/RLw0At3wVt8)

## 💻 Repositório GitHub
[https://github.com/Challenge-Fiap-2025/SprintFront04](https://github.com/Challenge-Fiap-2025/SprintFront04)

## 🌐 Deploy no Vercel
[https://global-front-one.vercel.app/](https://global-front-one.vercel.app/)

---

## 🎯 Objetivos

- Promover o **bem-estar emocional** no ambiente de trabalho  
- Facilitar o **registro e acompanhamento do humor diário**  
- Exibir **gráficos semanais de bem-estar**  
- Oferecer **sugestões de equilíbrio** entre trabalho e descanso  
- Aplicar **boas práticas** de desenvolvimento com React e TypeScript  

---

## ✨ Funcionalidades

### 💭 Registros de Humor
- Cadastro de como o usuário se sente durante o dia (Cansado, Motivado, Ansioso etc.)  
- Armazenamento dos registros em banco de dados  
- Exibição dos dados em **gráficos interativos (Chart.js)**  

### 📊 Relatórios e Sugestões
- Relatório semanal de bem-estar  
- Recomendações automáticas de equilíbrio entre trabalho e descanso  
- Mensagens motivacionais e dicas de saúde mental  

### 🎨 Interface
- Design moderno com **Tailwind CSS**  
- Efeitos visuais suaves e microinterações  
- Tema claro/escuro com **Dark Mode Toggle**  
- Layout totalmente **responsivo**

---

## ⚙️ Tecnologias Utilizadas

### 🧩 Front-end
- **React 19+**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM**
- **Chart.js**
- **React Icons**

### 🔙 Back-end
- **Java (Spring Boot)**
- **API REST + CRUD**
- **MySQL / PostgreSQL**

### 🛠 Ferramentas
- **Vite** — Build tool e dev server  
- **ESLint** — Linter para TypeScript  
- **Vercel** — Deploy contínuo  

---

## 📁 Estrutura do Projeto

src/
├── assets/ # Imagens e ícones do projeto
│ ├── alvaro.jpg
│ ├── logo.png
│ ├── rafael.jpg
│ ├── vitor.jpg
│ └── react.svg
│
├── components/ # Componentes reutilizáveis
│ ├── DarkModeToggle.tsx
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── Navbar.tsx
│ └── ProtectedRoute.tsx
│
├── context/
│ └── ThemeContext.tsx
│
├── pages/ # Páginas principais
│ ├── Contato.tsx
│ ├── Dashboard.tsx
│ ├── Faq.tsx
│ ├── Home.tsx
│ ├── Integrantes.tsx
│ ├── Login.tsx
│ ├── MoodHistory.tsx
│ ├── Sobre.tsx
│ └── Sugestoes.tsx
│
├── services/ # Conexão com a API
│ └── api.ts
│
├── types/ # Tipos TypeScript
│ └── types.ts
│
├── App.tsx
├── main.tsx
├── index.css
└── vite.config.ts

---

## 🚀 Como Executar o Projeto

### 🔧 Pré-requisitos
- Node.js 18+
- npm ou yarn

### 💻 Instalação

```bash
# Clone o repositório
git clone https://github.com/Challenge-Fiap-2025/SprintFront04.git

# Entre no diretório
cd SprintFront04

# Instale as dependências
npm install

# Executando o programa
npm run dev
```

🎨 Conceitos Implementados


🪝 Hooks

useState — Estado local
useEffect — Ciclo de vida do componente
useNavigate, useParams — Navegação e parâmetros de rota
Hooks customizados: useAuth, useForm, useLocalStorage


🔧 Props

Tipagem forte com TypeScript
Props opcionais e condicionais
Passagem de funções e children


🛣 Rotas

BrowserRouter, Routes, Route
Rotas protegidas com autenticação
Navegação programática com useNavigate

📱 Funcionalidades por Página

🏠 Home

Apresentação do sistema
Estatísticas gerais de bem-estar

📊 Dashboard

Gráfico semanal de humor
Sugestões personalizadas
Histórico de registros

🔐 Login
Autenticação simulada
Persistência de sessão
Redirecionamento automático

💬 Sugestões

Exibição de dicas e mensagens motivacionais

📞 Contato

Formulário de contato
Canais de suporte

🌍 Impacto

O MindLink busca promover o bem-estar emocional e o equilíbrio entre produtividade e saúde mental no ambiente de trabalho.
É uma solução simples, humana e escalável — podendo futuramente integrar IA (Watson NLU) para análises mais profundas.

📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Tecnologia em Desenvolvimento de Sistemas para Internet (FIAP).
Desenvolvido com ❤️ para a saúde e o bem-estar.


[🧠 MindLink] | [📧 Contato] | [💼 Bem-Estar no Trabalho]
