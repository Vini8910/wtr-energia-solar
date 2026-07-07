# Guia de Implantação

## Próximos Passos

### 1. Adicionar Imagens Reais

Criar a pasta `assets/images/` com:

```
assets/
├── images/
│   ├── hero-bg.jpg          # Imagem de fundo do Hero (1920x1080)
│   ├── project-1.jpg        # Projeto residencial
│   ├── project-2.jpg        # Projeto comercial
│   ├── project-3.jpg        # Projeto industrial
│   ├── avatar-1.jpg         # Cliente 1
│   ├── avatar-2.jpg         # Cliente 2
│   ├── avatar-3.jpg         # Cliente 3
│   └── about-placeholder.jpg # Imagem sobre
```

**Especificações:**
- Formato: WebP (com fallback JPG)
- Tamanhos: 1920x1080 (hero), 600x400 (projetos), 100x100 (avatares)
- Otimizar com TinyPNG ou Squoosh

### 2. Configurar OpenAI API

**Passo 1:** Criar arquivo `.env` (não versionado):
```bash
# .env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

**Passo 2:** Configurar no servidor:
```php
// api/chat/config.php
<?php
$OPENAI_API_KEY = $_ENV['OPENAI_API_KEY'] ?? getenv('OPENAI_API_KEY');
?>
```

**Passo 3:** Atualizar `openai.php` para usar config:
```php
require_once __DIR__ . '/config.php';
```

### 3. Configurar Google Analytics

**Passo 1:** Adicionar ao `<head>` do `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Passo 2:** Adicionar data attributes aos CTAs:
```html
<a href="/pages/contact/" class="btn btn--primary btn--lg" data-track-cta="hero_orcamento">Solicitar Orçamento</a>
```

### 4. Deploy em Produção

**Opção A: GitHub Pages**
1. Commit tudo no branch `main`
2. Configurar GitHub Pages nas settings
3. Workflow automático fará deploy

**Opção B: Servidor Próprio**
1. Fazer upload via FTP/SFTP
2. Configurar `.htaccess`
3. Configurar SSL (Let's Encrypt)

**Opção C: Netlify**
1. Conectar repositório
2. Build command: `npm run build`
3. Publish directory: `/`

### 5. Testes Finais

```bash
# Testar acessibilidade
npm run test

# Testar performance
npx lighthouse https://seusite.com --output=json

# Testar formulário
# Enviar dados e verificar email
```

### 6. Checklist Pós-Deploy

- [ ] Testar em dispositivos móveis
- [ ] Verificar formulário de contato
- [ ] Testar chat IA
- [ ] Verificar SEO (Google Search Console)
- [ ] Configurar backup automático
- [ ] Configurar monitoramento (UptimeRobot)