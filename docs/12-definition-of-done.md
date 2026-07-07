# Definition of Done (DoD)

## 1. Critérios Gerais

Uma tarefa é considerada **concluída** quando atende TODOS os critérios abaixo:

### 1.1 Código

- [ ] Código implementado conforme especificação
- [ ] Código revisado e sem warnings
- [ ] Padrões de código seguidos (BEM, Clean Code)
- [ ] Comentários JSDoc adicionados
- [ ] Sem código duplicado

### 1.2 Testes

- [ ] Testes unitários criados (quando aplicável)
- [ ] Testes de integração realizados
- [ ] Testes manuais em diferentes navegadores
- [ ] Testes de responsividade
- [ ] Testes de acessibilidade

### 1.3 Documentação

- [ ] README atualizado
- [ ] Comentários no código
- [ ] Documentação de componentes
- [ ] Exemplos de uso fornecidos

### 1.4 Performance

- [ ] Lighthouse score > 90
- [ ] Tempo de carregamento < 3s
- [ ] Imagens otimizadas
- [ ] Código minificado

### 1.5 Acessibilidade

- [ ] Contraste de cores WCAG 2.1 AA
- [ ] Navegação por teclado
- [ ] ARIA labels implementados
- [ ] Screen reader compatível

## 2. Critérios por Tipo de Entrega

### 2.1 Páginas

- [ ] HTML semântico
- [ ] Meta tags implementadas
- [ ] Schema.org aplicado
- [ ] Breadcrumb estruturado
- [ ] Responsividade testada
- [ ] Cross-browser compatível

### 2.2 Componentes

- [ ] HTML acessível
- [ ] CSS com Design Tokens
- [ ] JavaScript modular
- [ ] Estados de hover/focus
- [ ] Documentação do componente
- [ ] Exemplo de uso

### 2.3 Formulários

- [ ] Validação frontend
- [ ] Validação backend
- [ ] Sanitização de dados
- [ ] Mensagens de erro acessíveis
- [ ] Feedback visual
- [ ] Proteção contra spam

### 2.4 API

- [ ] Resposta no formato correto
- [ ] Tratamento de erros
- [ ] Logs implementados
- [ ] Segurança aplicada
- [ ] Documentação da API

## 3. Checklist de Revisão

### 3.1 Antes do Merge

- [ ] `git status` limpo
- [ ] `git diff` revisado
- [ ] Testes passando
- [ ] Lint sem erros
- [ ] Build funcionando
- [ ] Documentação atualizada

### 3.2 Deploy

- [ ] Versão minificada
- [ ] Cache configurado
- [ ] SSL ativo
- [ ] Backup realizado
- [ ] Monitoramento ativo

## 4. Definition of Done por Sprint

### Sprint 1 - DoD

- [ ] Estrutura de pastas criada
- [ ] Design Tokens implementados
- [ ] Componentes base funcionais
- [ ] Navbar responsiva
- [ ] Footer completo
- [ ] Hero com animações
- [ ] Documentação criada

### Sprint 2 - DoD

- [ ] Página Home completa
- [ ] Página Sobre
- [ ] Página Serviços
- [ ] Seções implementadas
- [ ] Responsividade validada
- [ ] Performance otimizada

### Sprint 3 - DoD

- [ ] Página Projetos
- [ ] Página Contato
- [ ] Formulário funcional
- [ ] Validação completa
- [ ] Testes realizados
- [ ] Integração backend

### Sprint 4 - DoD

- [ ] Chat widget funcional
- [ ] Respostas implementadas
- [ ] Captação de leads
- [ ] Arquitetura OpenAI
- [ ] Testes de fluxo
- [ ] Documentação técnica

### Sprint 5 - DoD

- [ ] SEO implementado
- [ ] Sitemap/robots
- [ ] Schema.org
- [ ] Acessibilidade WCAG
- [ ] Testes finais
- [ ] Documentação completa

## 5. Qualidade do Código

### 5.1 HTML

```html
<!-- ✅ Correto -->
<section class="hero" aria-labelledby="hero-title">
  <h1 id="hero-title">Título Acessível</h1>
  <p>Descrição clara</p>
</section>

<!-- ❌ Incorreto -->
<div class="hero">
  <h2>Título</h2>
  <span>Descrição</span>
</div>
```

### 5.2 CSS

```css
/* ✅ Correto - Usando Design Tokens */
.btn {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
}

/* ❌ Incorreto - Valores fixos */
.btn {
  background-color: #FDB813;
  padding: 16px 24px;
  border-radius: 8px;
}
```

### 5.3 JavaScript

```javascript
// ✅ Correto - Modular e documentado
/**
 * Inicializa o navbar com toggle mobile
 * @returns {void}
 */
export function initNavbar() {
  const toggle = document.querySelector('.navbar__toggle');
  // ...
}

// ❌ Incorreto - Sem documentação
function initNav() {
  // ...
}
```

## 6. Aprovação Final

- [ ] Product Owner aprova
- [ ] Tech Lead aprova
- [ ] QA valida
- [ ] Deploy realizado
- [ ] Monitoramento ativo