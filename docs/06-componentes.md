# Biblioteca de Componentes

## 1. Visão Geral

Esta documentação descreve todos os componentes reutilizáveis do Design System da WTR Energia Solar.

## 2. Botões

### 2.1 Primary Button

```html
<button class="btn btn--primary" type="button">
  <span class="btn__text">Solicitar Orçamento</span>
</button>
```

**Uso:** Ações principais, CTA, envios de formulário

### 2.2 Secondary Button

```html
<button class="btn btn--secondary" type="button">
  <span class="btn__text">Saiba Mais</span>
</button>
```

**Uso:** Ações secundárias, navegação

### 2.3 Outline Button

```html
<button class="btn btn--outline" type="button">
  <span class="btn__text">Fale Conosco</span>
</button>
```

**Uso:** Ações terciárias, cancelamento

### 2.4 Ghost Button

```html
<button class="btn btn--ghost" type="button">
  <span class="btn__text">Ver Projetos</span>
</button>
```

**Uso:** Ações em cards, links estilizados

### 2.5 Icon Button

```html
<button class="btn btn--icon" type="button" aria-label="Fechar">
  <svg class="btn__icon"><!-- icon --></svg>
</button>
```

**Uso:** Ícones de ação, fechar modais

## 3. Cards

### 3.1 Service Card

```html
<article class="card card--service">
  <div class="card__icon">
    <svg class="icon"><!-- icon --></svg>
  </div>
  <h3 class="card__title">Energia Solar Residencial</h3>
  <p class="card__description">Reduza sua conta de energia em até 95%</p>
  <a href="#" class="card__link">Saiba mais</a>
</article>
```

### 3.2 Project Card

```html
<article class="card card--project">
  <figure class="card__figure">
    <img src="project.jpg" alt="Projeto" class="card__image">
    <figcaption class="card__caption">
      <h3 class="card__title">Residencial em São Paulo</h3>
      <p class="card__meta">500 kWp • 2024</p>
    </figcaption>
  </figure>
</article>
```

### 3.3 Testimonial Card

```html
<article class="card card--testimonial">
  <div class="card__quote">
    <p>"Excelente serviço, equipe qualificada e resultado imediato!"</p>
  </div>
  <div class="card__author">
    <img src="avatar.jpg" alt="Cliente" class="card__avatar">
    <div class="card__info">
      <strong class="card__name">João Silva</strong>
      <span class="card__location">São Paulo, SP</span>
    </div>
  </div>
</article>
```

## 4. Formulários

### 4.1 Input

```html
<div class="form-group">
  <label for="name" class="form-label">Nome Completo</label>
  <input 
    type="text" 
    id="name" 
    class="form-input" 
    placeholder="Digite seu nome"
    required
  >
  <span class="form-error" role="alert">Mensagem de erro</span>
</div>
```

### 4.2 Textarea

```html
<div class="form-group">
  <label for="message" class="form-label">Mensagem</label>
  <textarea 
    id="message" 
    class="form-textarea" 
    rows="5"
    placeholder="Digite sua mensagem"
  ></textarea>
</div>
```

### 4.3 Select

```html
<div class="form-group">
  <label for="city" class="form-label">Cidade</label>
  <select id="city" class="form-select">
    <option value="">Selecione uma cidade</option>
    <option value="sp">São Paulo</option>
    <option value="rj">Rio de Janeiro</option>
  </select>
</div>
```

### 4.4 Checkbox

```html
<div class="form-group">
  <label class="checkbox">
    <input type="checkbox" class="checkbox__input">
    <span class="checkbox__checkmark"></span>
    <span class="checkbox__label">Aceito os termos de privacidade</span>
  </label>
</div>
```

### 4.5 Radio Button

```html
<div class="form-group">
  <fieldset>
    <legend class="form-label">Tipo do Imóvel</legend>
    <label class="radio">
      <input type="radio" name="property-type" value="residential">
      <span class="radio__checkmark"></span>
      <span class="radio__label">Residencial</span>
    </label>
    <label class="radio">
      <input type="radio" name="property-type" value="commercial">
      <span class="radio__checkmark"></span>
      <span class="radio__label">Comercial</span>
    </label>
  </fieldset>
</div>
```

## 5. Navegação

### 5.1 Navbar

```html
<nav class="navbar" role="navigation" aria-label="Menu principal">
  <div class="navbar__container">
    <a href="/" class="navbar__brand">
      <img src="logo.svg" alt="WTR Energia Solar">
    </a>
    <button class="navbar__toggle" aria-label="Abrir menu" aria-expanded="false">
      <span class="navbar__hamburger"></span>
    </button>
    <ul class="navbar__menu" id="navbar-menu">
      <li><a href="/" class="navbar__link">Home</a></li>
      <li><a href="/services" class="navbar__link">Serviços</a></li>
      <li><a href="/about" class="navbar__link">Sobre</a></li>
      <li><a href="/projects" class="navbar__link">Projetos</a></li>
      <li><a href="/contact" class="navbar__link">Contato</a></li>
    </ul>
  </div>
</nav>
```

### 5.2 Breadcrumb

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb__list">
    <li class="breadcrumb__item">
      <a href="/" class="breadcrumb__link">Home</a>
    </li>
    <li class="breadcrumb__item">
      <a href="/services" class="breadcrumb__link">Serviços</a>
    </li>
    <li class="breadcrumb__item">
      <span class="breadcrumb__current">Detalhes</span>
    </li>
  </ol>
</nav>
```

## 6. Feedback

### 6.1 Alert

```html
<div class="alert alert--success" role="alert">
  <svg class="alert__icon"><!-- icon --></svg>
  <div class="alert__content">
    <strong class="alert__title">Sucesso!</strong>
    <p class="alert__message">Sua mensagem foi enviada com sucesso.</p>
  </div>
</div>
```

### 6.2 Toast

```html
<div class="toast toast--success" role="status" aria-live="polite">
  <div class="toast__content">
    <p>Orçamento solicitado com sucesso!</p>
  </div>
  <button class="toast__close" aria-label="Fechar">
    <svg><!-- icon --></svg>
  </button>
</div>
```

### 6.3 Badge

```html
<span class="badge badge--primary">Novo</span>
<span class="badge badge--success">Ativo</span>
<span class="badge badge--warning">Pendente</span>
```

### 6.4 Loading

```html
<div class="loading">
  <div class="loading__spinner"></div>
  <span class="loading__text">Carregando...</span>
</div>
```

### 6.5 Skeleton

```html
<div class="skeleton">
  <div class="skeleton__image"></div>
  <div class="skeleton__line"></div>
  <div class="skeleton__line skeleton__line--short"></div>
</div>
```

## 7. Layout

### 7.1 Hero

```html
<section class="hero">
  <div class="hero__overlay"></div>
  <div class="hero__container">
    <div class="hero__content">
      <h1 class="hero__title">Energia Solar para um Futuro Sustentável</h1>
      <p class="hero__subtitle">Reduza sua conta de energia e contribua com o meio ambiente</p>
      <div class="hero__actions">
        <button class="btn btn--primary">Solicitar Orçamento</button>
        <button class="btn btn--secondary">Saiba Mais</button>
      </div>
    </div>
  </div>
</section>
```

### 7.2 Modal

```html
<div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__content">
    <div class="modal__header">
      <h2 class="modal__title" id="modal-title">Título do Modal</h2>
      <button class="modal__close" data-modal-close aria-label="Fechar">
        <svg><!-- icon --></svg>
      </button>
    </div>
    <div class="modal__body">
      <!-- Conteúdo -->
    </div>
    <div class="modal__footer">
      <button class="btn btn--primary">Confirmar</button>
      <button class="btn btn--ghost" data-modal-close>Cancelar</button>
    </div>
  </div>
</div>
```

## 8. Footer

```html
<footer class="footer">
  <div class="footer__container">
    <div class="footer__brand">
      <img src="logo-white.svg" alt="WTR Energia Solar">
      <p>Energia limpa para um futuro melhor</p>
    </div>
    <div class="footer__links">
      <h4>Links Úteis</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Serviços</a></li>
        <li><a href="/about">Sobre</a></li>
        <li><a href="/contact">Contato</a></li>
      </ul>
    </div>
    <div class="footer__contact">
      <h4>Contato</h4>
      <p>(11) 99999-9999</p>
      <p>contato@wtrenergiasolar.com.br</p>
    </div>
  </div>
  <div class="footer__bottom">
    <p>&copy; 2024 WTR Energia Solar. Todos os direitos reservados.</p>
  </div>
</footer>
```

## 9. Paginação

```html
<nav class="pagination" aria-label="Paginação">
  <ul class="pagination__list">
    <li>
      <a href="#" class="pagination__item pagination__item--prev" aria-label="Página anterior">
        <svg><!-- icon --></svg>
      </a>
    </li>
    <li><a href="#" class="pagination__item pagination__item--active">1</a></li>
    <li><a href="#" class="pagination__item">2</a></li>
    <li><a href="#" class="pagination__item">3</a></li>
    <li>
      <a href="#" class="pagination__item pagination__item--next" aria-label="Próxima página">
        <svg><!-- icon --></svg>
      </a>
    </li>
  </ul>
</nav>
```

## 10. Empty State

```html
<div class="empty-state">
  <div class="empty-state__icon">
    <svg><!-- icon --></svg>
  </div>
  <h3 class="empty-state__title">Nenhum projeto encontrado</h3>
  <p class="empty-state__description">Tente ajustar os filtros de busca</p>
  <button class="btn btn--primary">Ver Todos os Projetos</button>
</div>