# Branding - WTR Energia Solar

## Estrutura

```
branding/
├── logo/           # Logotipos oficiais (a serem adicionados)
├── palette/        # Paleta de cores e tokens
├── fonts/          # Fontes utilizadas
├── assets/         # Assets de branding
└── README.md       # Esta documentação
```

## Como Utilizar

### Cores

Importar o arquivo de tokens no CSS principal:

```css
@import '../branding/palette/colors.css';
```

Utilizar as variáveis:

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-text);
}
```

### Fontes

As fontes são carregadas via Google Fonts ou arquivos locais:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
```

## Logo

A logo oficial será adicionada posteriormente. Quando disponível, substituir os arquivos em `branding/logo/`.

## Paleta de Cores

| Variável | Uso |
|----------|-----|
| `--color-primary` | Cor principal (Solar Gold) |
| `--color-secondary` | Cor secundária (Forest Green) |
| `--color-accent` | Cor de destaque (Sky Blue) |
| `--color-background` | Fundo principal |
| `--color-text` | Texto principal |

## Tokens Disponíveis

- `colors.css` - Variáveis de cores
- `typography.css` - Escala tipográfica
- `spacing.css` - Sistema de espaçamento
- `shadows.css` - Sombras
- `borders.css` - Bordas e raios
- `animation.css` - Animações