# Estrutura do Front-End

## 1. Estrutura de Pastas

```
WTR Energia Solar/
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── team/
│   │   └── partners/
│   ├── icons/
│   │   ├── heroicons/
│   │   └── custom/
│   └── fonts/
│       ├── Inter/
│       └── Poppins/
├── branding/
│   ├── logo/
│   ├── palette/
│   ├── fonts/
│   ├── assets/
│   └── README.md
├── components/
│   ├── buttons/
│   │   ├── button.css
│   │   └── button.js
│   ├── cards/
│   │   ├── card.css
│   │   └── card.js
│   ├── forms/
│   │   ├── input.css
│   │   ├── input.js
│   │   ├── select.css
│   │   └── textarea.css
│   ├── modals/
│   │   ├── modal.css
│   │   └── modal.js
│   ├── navigation/
│   │   ├── navbar.css
│   │   ├── navbar.js
│   │   ├── sidebar.css
│   │   └── breadcrumb.css
│   └── ui/
│       ├── alert.css
│       ├── toast.css
│       ├── badge.css
│       ├── loading.css
│       └── skeleton.css
├── docs/
├── pages/
│   ├── home/
│   │   └── index.html
│   ├── services/
│   │   └── index.html
│   ├── about/
│   │   └── index.html
│   ├── projects/
│   │   └── index.html
│   └── contact/
│       └── index.html
├── styles/
│   ├── base/
│   │   ├── reset.css
│   │   ├── typography.css
│   │   └── base.css
│   ├── components/
│   │   └── (importações dos componentes)
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   ├── shadows.css
│   │   ├── borders.css
│   │   ├── animation.css
│   │   └── index.css
│   ├── utilities/
│   │   ├── helpers.css
│   │   └── utilities.css
│   └── main.css
├── scripts/
│   ├── components/
│   │   ├── button.js
│   │   ├── modal.js
│   │   ├── form.js
│   │   └── navigation.js
│   ├── utils/
│   │   ├── api.js
│   │   ├── validation.js
│   │   └── helpers.js
│   └── main.js
├── api/
│   ├── contact/
│   │   ├── process.php
│   │   └── validate.php
│   └── chat/
│       ├── config.php
│       ├── openai.php
│       └── responses.php
├── .htaccess
├── index.html
├── sitemap.xml
└── robots.txt
```

## 2. Arquitetura CSS

### 2.1 Metodologia

- **BEM (Block, Element, Modifier)** - Nomenclatura de classes
- **CSS Custom Properties** - Variáveis para Design Tokens
- **Mobile-First** - Media queries min-width

### 2.2 Ordem de Importação

```css
/* main.css */
@import './base/reset.css';
@import './base/typography.css';
@import './base/base.css';
@import './tokens/index.css';
@import './components/buttons.css';
@import './components/cards.css';
@import './components/forms.css';
@import './components/modals.css';
@import './components/navigation.css';
@import './components/ui.css';
@import './utilities/helpers.css';
```

## 3. Arquitetura JavaScript

### 3.1 Módulos

```javascript
// main.js
import { initNavbar } from './components/navigation.js';
import { initForms } from './components/forms.js';
import { initChat } from './components/chat.js';
import { initHero } from './components/hero.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initForms();
  initChat();
  initHero();
});
```

### 3.2 Padrões

- **Module Pattern** - Encapsulamento
- **Event Delegation** - Performance
- **Async/Await** - Requisições assíncronas
- **Error Handling** - Try/catch

## 4. Templates

### 4.1 Estrutura Base

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WTR Energia Solar - Título da Página</title>
  <!-- SEO Meta Tags -->
  <meta name="description" content="">
  <link rel="stylesheet" href="../styles/main.css">
</head>
<body>
  <!-- Header/Navbar -->
  <header class="header">
    <!-- Navbar component -->
  </header>

  <!-- Main Content -->
  <main class="main">
    <!-- Conteúdo específico da página -->
  </main>

  <!-- Footer -->
  <footer class="footer">
    <!-- Footer component -->
  </footer>

  <script src="../scripts/main.js" type="module"></script>
</body>
</html>
```

## 5. Componentes Reutilizáveis

### 5.1 Estrutura de Componentes

Cada componente segue a estrutura:

```
component-name/
├── component-name.css
├── component-name.js
└── component-name.html (template)
```

### 5.2 Exemplo: Botão

```html
<!-- button.html -->
<button class="btn btn--primary" type="button">
  <span class="btn__text">Texto do Botão</span>
</button>
```

```css
/* button.css */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all var(--transition-normal);
  cursor: pointer;
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-text);
}
```

## 6. Performance

### 6.1 Otimizações

- **Critical CSS** - Inline no head
- **Lazy Loading** - Imagens fora da viewport
- **Preload** - Fontes e recursos críticos
- **Minificação** - Produção

### 6.2 Carregamento

```html
<!-- Preload de fontes -->
<link rel="preload" href="../assets/fonts/Inter/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>

<!-- Preload de CSS crítico -->
<style>
  /* Critical CSS inline */
</style>
<link rel="preload" href="../styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

## 7. Acessibilidade

### 7.1 Atributos ARIA

```html
<nav role="navigation" aria-label="Menu principal">
  <button aria-expanded="false" aria-controls="menu">
    Menu
  </button>
</nav>
```

### 7.2 Foco e Navegação

- `:focus-visible` para estilização de foco
- Skip links para navegação
- Landmarks semânticos