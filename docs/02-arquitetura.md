# Arquitetura do Projeto

## 1. Visão Geral da Arquitetura

```
WTR Energia Solar/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── branding/
│   ├── logo/
│   ├── palette/
│   ├── fonts/
│   ├── assets/
│   └── README.md
├── components/
│   ├── buttons/
│   ├── cards/
│   ├── forms/
│   ├── modals/
│   ├── navigation/
│   └── ui/
├── docs/
│   └── (documentação)
├── pages/
│   ├── home/
│   ├── services/
│   ├── about/
│   ├── projects/
│   └── contact/
├── styles/
│   ├── base/
│   ├── components/
│   ├── tokens/
│   ├── utilities/
│   └── main.css
├── scripts/
│   ├── components/
│   ├── utils/
│   └── main.js
├── api/
│   ├── contact/
│   └── chat/
├── .htaccess
├── index.html
├── sitemap.xml
└── robots.txt
```

## 2. Decisões Técnicas

### 2.1 Tecnologia Frontend

- **HTML5 Semântico** - Uso de tags semânticas (header, nav, main, section, article, footer)
- **CSS3 Custom Properties** - Design Tokens para variáveis de design
- **JavaScript ES6+** - Módulos, arrow functions, template literals
- **PHP 8+** - Processamento de formulários e integração com IA

### 2.2 Organização de Código

- **Component-Based Architecture** - Componentes reutilizáveis
- **Mobile-First** - Desenvolvimento responsivo
- **BEM Methodology** - Nomenclatura CSS (Block, Element, Modifier)
- **SASS/SCSS** - Pré-processador CSS (opcional)

### 2.3 Performance

- **Lazy Loading** - Imagens e componentes
- **Minificação** - CSS e JS para produção
- **Critical CSS** - Inline no head
- **Preload** - Recursos críticos

## 3. Design Tokens

### 3.1 Estrutura

```
styles/tokens/
├── colors.css
├── typography.css
├── spacing.css
├── shadows.css
├── borders.css
├── animation.css
└── index.css
```

### 3.2 Variáveis Principais

```css
/* Cores */
--color-primary: #FDB813;        /* Amarelo solar */
--color-primary-dark: #FF9500;
--color-secondary: #00713C;      /* Verde sustentabilidade */
--color-accent: #0052CC;         /* Azul tecnologia */
--color-background: #FFFFFF;
--color-text: #333333;
--color-text-light: #666666;

/* Tipografia */
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-md: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
--font-size-5xl: 3rem;

/* Espaçamento */
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;

/* Breakpoints */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## 4. Padrões de Código

### 4.1 HTML

- Uso de tags semânticas
- Atributos ARIA para acessibilidade
- Meta tags otimizadas
- Estrutura de headings lógica (h1 > h2 > h3)

### 4.2 CSS

- BEM Methodology
- Custom Properties (CSS Variables)
- Flexbox e Grid
- Mobile-first

### 4.3 JavaScript

- Módulos ES6
- Funções puras
- Tratamento de erros
- Comentários JSDoc

### 4.4 PHP

- PSR-12 Coding Standard
- Validação de entrada
- Sanitização de dados
- Prepared statements (se houver DB)

## 5. Integração com IA

### 5.1 Arquitetura

```
api/
├── chat/
│   ├── config.php
│   ├── openai.php
│   └── responses.php
└── contact/
    ├── process.php
    └── validate.php
```

### 5.2 Preparação para OpenAI

- Estrutura de mensagens padronizada
- Sistema de fallback para respostas offline
- Captura de contexto do usuário
- Armazenamento de conversas (preparado)

## 6. Segurança

- Validação de formulários no frontend e backend
- Sanitização de dados
- Headers de segurança
- Rate limiting para formulários
- reCAPTCHA (opcional)