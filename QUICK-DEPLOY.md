# Deploy Rápido - WTR Energia Solar

## Opção 1: GitHub Pages (Gratuito)

### Passo 1: Criar repositório
1. Acesse https://github.com/new
2. Nome: `wtr-energia-solar`
3. Público ou Privado (sua escolha)
4. Criar repositório

### Passo 2: Fazer upload
```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/wtr-energia-solar.git

# Copie todos os arquivos para a pasta
# Ou use o PowerShell
.\deploy.ps1
```

### Passo 3: Ativar GitHub Pages
1. Settings > Pages
2. Source: `main` branch
3. Save
4. Aguarde 2-5 minutos

**URL:** `https://SEU_USUARIO.github.io/wtr-energia-solar/`

---

## Opção 2: Netlify (Gratuito)

1. Acesse https://app.netlify.com
2. "New site from Git"
3. Conecte seu repositório GitHub
4. Build command: `npm run build`
5. Publish directory: `/`
6. Deploy site

**URL:** `https://wtr-energia-solar.netlify.app`

---

## Opção 3: Vercel (Gratuito)

1. Acesse https://vercel.com
2. "New Project"
3. Importar repositório
4. Deploy automático

**URL:** `https://wtr-energia-solar.vercel.app`

---

## Opção 4: Surge (Gratuito)

```bash
npm install -g surge
surge . wtr-energia-solar.surge.sh
```

---

## Configurações Necessárias

### OpenAI API
- O arquivo `api/chat/config.php` já tem a API Key configurada
- Para produção, mova a chave para variáveis de ambiente

### Formulário de Contato
- Configure o email em `api/contact/process.php`
- Adicione SMTP ou use Formspree

### Analytics
- Adicione seu GA4 ID no `<head>` do `index.html`