# Projeto CI/CD - Frontend

## Objetivo

Demonstrar integração entre GitHub, Vercel e Render com deploy automatizado via GitHub Actions. Este projeto implementa um frontend simples que consome uma API backend, ambos com pipelines de CI/CD configurados.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Hospedagem**: Vercel
- **CI/CD**: GitHub Actions
- **Versionamento**: Git com SemVer (Semantic Versioning)

## URLs do Projeto

- **Frontend**: projeto-ci-cd-front-phi.vercel.app
- **Backend**: https://projeto-ci-cd-back-95ov.onrender.com

## 📂 Estrutura do Projeto
```
projeto-ci-cd-front/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline de CI/CD
├── src/
│   ├── index.html              # Página principal
│   ├── style.css               # Estilos
│   └── script.js               # Lógica da aplicação
├── .gitignore
├── package.json
└── README.md
```

## Configuração Inicial

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/projeto-ci-cd-front.git
cd projeto-ci-cd-front
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configure a URL do Backend

Edite o arquivo `src/script.js` e substitua a URL da API:
```javascript
const API_URL = 'https://projeto-ci-cd-back-95ov.onrender.com';
```

### 4. Teste Localmente
```bash
npm run dev
```

Acesse: http://localhost:3000


## 📚 Recursos Adicionais

- [Documentação GitHub Actions](https://docs.github.com/en/actions)
- [Documentação Vercel](https://vercel.com/docs)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 👥 Equipe

- [Thiago Davanzo] - Frontend e CI/CD
- [Diogo Guimaraes] - Backend e Infraestrutura

## 📄 Licença

MIT License - Projeto educacional para demonstração de CI/CD.