# Design System

## 1. Filosofia

O Design System da WTR Energia Solar é baseado em princípios de **sustentabilidade**, **inovação** e **confiabilidade**. Todos os componentes são criados com foco em reutilização, acessibilidade e performance.

## 2. Paleta de Cores

### 2.1 Cores Primárias

| Nome | Hex | Uso |
|------|-----|-----|
| Primary | `#FDB813` | Cor principal (energia solar) |
| Primary Dark | `#FF9500` | Hover e estados ativos |
| Primary Light | `#FFE580` | Variações claras |

### 2.2 Cores Secundárias

| Nome | Hex | Uso |
|------|-----|-----|
| Secondary | `#00713C` | Sustentabilidade, sucesso |
| Secondary Dark | `#005229` | Estados ativos |
| Secondary Light | `#4CD964` | Feedback positivo |

### 2.3 Cores de Apoio

| Nome | Hex | Uso |
|------|-----|-----|
| Accent | `#0052CC` | Tecnologia, links |
| Accent Dark | `#003A99` | Estados ativos |
| Accent Light | `#4DA6FF` | Highlights |

### 2.4 Neutros

| Nome | Hex | Uso |
|------|-----|-----|
| Background | `#FFFFFF` | Fundo principal |
| Background Dark | `#F5F5F5` | Fundo secundário |
| Text | `#333333` | Texto principal |
| Text Light | `#666666` | Texto secundário |
| Text Muted | `#999999` | Placeholders |

### 2.5 Status

| Nome | Hex | Uso |
|------|-----|-----|
| Success | `#28A745` | Sucesso |
| Warning | `#FFC107` | Aviso |
| Error | `#DC3545` | Erro |
| Info | `#17A2B8` | Informação |

## 3. Tipografia

### 3.1 Família de Fontes

```css
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-family-secondary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-family-mono: 'Fira Code', 'JetBrains Mono', monospace;
```

### 3.2 Escala Tipográfica

| Nome | Tamanho | Line Height | Weight | Uso |
|------|---------|-------------|--------|-----|
| Display | 3.5rem | 1.1 | 700 | Hero titles |
| H1 | 2.5rem | 1.2 | 700 | Títulos principais |
| H2 | 2rem | 1.3 | 600 | Títulos de seção |
| H3 | 1.5rem | 1.4 | 600 | Subtítulos |
| H4 | 1.25rem | 1.4 | 500 | Cards e widgets |
| Body | 1rem | 1.6 | 400 | Texto padrão |
| Small | 0.875rem | 1.5 | 400 | Texto pequeno |
| Caption | 0.75rem | 1.4 | 400 | Legendas |

## 4. Espaçamentos

### 4.1 Sistema de Espaçamento

Base: 0.25rem (4px)

| Token | Valor | Uso |
|-------|-------|-----|
| xs | 0.25rem | Elementos pequenos |
| sm | 0.5rem | Padding interno |
| md | 1rem | Padding padrão |
| lg | 1.5rem | Margin entre elementos |
| xl | 2rem | Section padding |
| 2xl | 3rem | Container padding |
| 3xl | 4rem | Hero sections |

## 5. Sombras

| Nome | Valor | Uso |
|------|-------|-----|
| Shadow Sm | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | Cards pequenos |
| Shadow Md | `0 4px 6px -1px rgba(0, 0, 0, 0.1)` | Cards médios |
| Shadow Lg | `0 10px 15px -3px rgba(0, 0, 0, 0.1)` | Modais |
| Shadow Xl | `0 20px 25px -5px rgba(0, 0, 0, 0.1)` | Hero overlay |

## 6. Bordas e Raios

| Nome | Valor | Uso |
|------|-------|-----|
| Radius Sm | 4px | Botões pequenos |
| Radius Md | 8px | Cards padrão |
| Radius Lg | 12px | Imagens |
| Radius Full | 9999px | Pílulas e chips |

## 7. Animações

### 7.1 Durações

| Nome | Valor | Uso |
|------|-------|-----|
| Fast | 150ms | Hover states |
| Normal | 300ms | Transições padrão |
| Slow | 500ms | Animações complexas |

### 7.2 Easing

| Nome | Valor | Uso |
|------|-------|-----|
| Ease In | `cubic-bezier(0.4, 0, 1, 1)` | Entrada |
| Ease Out | `cubic-bezier(0, 0, 0.2, 1)` | Saída |
| Ease In Out | `cubic-bezier(0.4, 0, 0.2, 1)` | Transições |

## 8. Grid e Breakpoints

| Nome | Largura | Uso |
|------|---------|-----|
| sm | 640px | Smartphone landscape |
| md | 768px | Tablet |
| lg | 1024px | Notebook |
| xl | 1280px | Desktop |
| 2xl | 1536px | Desktop grande |

## 9. Componentes

### 9.1 Botões

- Primary Button
- Secondary Button
- Outline Button
- Ghost Button
- Icon Button

### 9.2 Formulários

- Input
- Textarea
- Select
- Checkbox
- Radio Button

### 9.3 Feedback

- Alert
- Toast
- Badge
- Loading
- Skeleton

### 9.4 Navegação

- Navbar
- Sidebar
- Breadcrumb
- Pagination

### 9.5 Layout

- Card
- Modal
- Hero
- Empty State

## 10. Ícones

Utilizar biblioteca **Heroicons** ou **Tabler Icons** como base, com possibilidade de extensão.

## 11. Acessibilidade

- Contraste mínimo 4.5:1 (AA)
- Foco visível em todos os elementos interativos
- ARIA labels apropriados
- Suporte a screen readers