# Projeto CI/CD - Frontend

## Objetivo

Demonstrar integração entre GitHub, Vercel e Render com deploy automatizado via GitHub Actions. Este projeto implementa um frontend simples que consome uma API backend, ambos com pipelines de CI/CD configurados.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Hospedagem**: Vercel
- **CI/CD**: GitHub Actions
- **Versionamento**: Git com SemVer (Semantic Versioning)

## URLs do Projeto

- **Frontend**: https://projeto-front.vercel.app
- **Backend**: https://projeto-back.onrender.com

> ⚠️ **Importante**: Substitua as URLs acima pelas URLs reais do seu projeto após o deploy.

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
const API_URL = 'https://seu-back.onrender.com';
```

### 4. Teste Localmente
```bash
npm run dev
```

Acesse: http://localhost:3000



### Obter Tokens para CI/CD

Para automatizar o deploy via GitHub Actions, você precisa configurar 3 secrets:

1. **VERCEL_TOKEN**:
   - Acesse: https://vercel.com/account/tokens
   - Crie um novo token
   - Copie o token gerado

2. **VERCEL_ORG_ID** e **VERCEL_PROJECT_ID**:
   - No terminal, dentro do projeto, execute:
```bash
   npm install -g vercel
   vercel link
```
   - Siga as instruções e depois execute:
```bash
   cat .vercel/project.json
```
   - Copie os valores de `orgId` e `projectId`

### Configurar Secrets no GitHub

1. Acesse seu repositório no GitHub
2. Vá em **Settings** → **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Adicione os três secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## 🔄 Fluxo de CI/CD

### Como Funciona

1. **Desenvolvimento**: Crie branches para features (`feature/nova-funcionalidade`)
2. **Commits**: Use padrão semântico:
   - `feat:` para novas funcionalidades
   - `fix:` para correções de bugs
   - `chore:` para tarefas de manutenção
   - `docs:` para documentação

3. **Pull Request**: Abra um PR para a branch `main`
4. **Merge**: Após aprovação, faça o merge
5. **Release**: Crie uma tag seguindo o padrão SemVer:
```bash
# Para uma nova versão
git tag v1.0.0
git push origin v1.0.0
```

6. **Deploy Automático**: O GitHub Actions executa automaticamente:
   - Faz checkout do código
   - Configura Node.js
   - Instala Vercel CLI
   - Faz deploy na Vercel em produção

### Versionamento Semântico (SemVer)

Formato: `vMAJOR.MINOR.PATCH`

- **MAJOR** (v2.0.0): Mudanças incompatíveis com versões anteriores
- **MINOR** (v1.1.0): Novas funcionalidades compatíveis
- **PATCH** (v1.0.1): Correções de bugs

Exemplos:
```bash
git tag v1.0.0    # Primeira versão
git tag v1.1.0    # Nova funcionalidade
git tag v1.1.1    # Correção de bug
git tag v2.0.0    # Mudança breaking
```

## 📊 Demonstração ao Vivo

Durante a apresentação, demonstre:

### 1. Criar Nova Tag
```bash
# Faça uma mudança no código (ex: atualizar a versão no HTML)
git add .
git commit -m "feat: atualizar interface para v1.1.0"
git tag v1.1.0
git push origin main
git push origin v1.1.0
```

### 2. Acompanhar o Workflow

1. Acesse: `https://github.com/seu-usuario/projeto-ci-cd-front/actions`
2. Mostre o workflow em execução
3. Explique cada etapa do processo

### 3. Verificar Deploy

1. Aguarde a conclusão (1-2 minutos)
2. Acesse a URL da Vercel
3. Mostre as alterações publicadas
4. Teste a integração com o backend

## 🧪 Testando a Integração

1. Acesse o frontend na Vercel
2. Clique no botão "Chamar API"
3. Verifique se a resposta do backend é exibida corretamente

## ⚠️ Troubleshooting

### Erro de CORS

Se aparecer erro de CORS, verifique se o backend tem as configurações corretas:
```javascript
// No backend (Node.js/Express)
const cors = require('cors');
app.use(cors({
  origin: 'https://seu-projeto.vercel.app'
}));
```

### Deploy não Inicia

- Verifique se os secrets estão configurados corretamente no GitHub
- Confirme que a tag foi criada no formato correto (`v*.*.*`)
- Veja os logs no GitHub Actions para detalhes do erro

### URL da API Incorreta

- Atualize a constante `API_URL` no arquivo `src/script.js`
- Faça commit e crie nova tag para deploy

## 📚 Recursos Adicionais

- [Documentação GitHub Actions](https://docs.github.com/en/actions)
- [Documentação Vercel](https://vercel.com/docs)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 👥 Equipe

- [Seu Nome] - Frontend e CI/CD
- [Nome Colega] - Backend e Infraestrutura

## 📄 Licença

MIT License - Projeto educacional para demonstração de CI/CD.

---

**Desenvolvido para demonstração de CI/CD com GitHub Actions, Vercel e Render**