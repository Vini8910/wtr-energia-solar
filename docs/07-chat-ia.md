# Assistente Comercial IA

## 1. Visão Geral

O Assistente Comercial IA é um componente inteligente integrado ao site que responde dúvidas frequentes sobre energia solar e captura leads qualificados.

## 2. Arquitetura

```
api/
├── chat/
│   ├── config.php          # Configurações da API
│   ├── openai.php          # Integração com OpenAI (preparado)
│   └── responses.php       # Respostas pré-definidas
├── contact/
│   ├── process.php         # Processamento de leads
│   └── validate.php        # Validação de dados
└── chat-widget/
    ├── chat.css
    ├── chat.js
    └── chat.html
```

## 3. Funcionalidades

### 3.1 Perguntas Frequentes

O assistente responde automaticamente:

- Como funciona energia solar?
- Como solicitar orçamento?
- Como funciona o financiamento?
- Quais cidades atendemos?
- Quais equipamentos utilizamos?
- Como funciona a instalação?
- Qual a garantia?
- Como funciona a manutenção?

### 3.2 Captação de Leads

Campos coletados:

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Nome | string | Sim |
| Telefone | string | Sim |
| WhatsApp | string | Não |
| E-mail | email | Sim |
| Cidade | string | Sim |
| Tipo do imóvel | enum | Sim |
| Consumo médio | number | Não |

## 4. Interface do Usuário

### 4.1 Widget de Chat

```html
<div class="chat-widget" id="chat-widget">
  <button class="chat-widget__toggle" aria-label="Abrir assistente virtual">
    <svg class="chat-widget__icon"><!-- icon --></svg>
  </button>
  
  <div class="chat-widget__panel" id="chat-panel">
    <div class="chat-widget__header">
      <div class="chat-widget__avatar">
        <img src="avatar-bot.png" alt="Assistente Virtual">
      </div>
      <div class="chat-widget__info">
        <strong>WTR Bot</strong>
        <span class="chat-widget__status">Online</span>
      </div>
      <button class="chat-widget__close" aria-label="Fechar chat">
        <svg><!-- icon --></svg>
      </button>
    </div>
    
    <div class="chat-widget__messages" id="chat-messages">
      <!-- Mensagens -->
    </div>
    
    <div class="chat-widget__quick-replies">
      <button class="chat-widget__quick-reply">Como funciona?</button>
      <button class="chat-widget__quick-reply">Solicitar orçamento</button>
      <button class="chat-widget__quick-reply">Financiamento</button>
    </div>
    
    <form class="chat-widget__form" id="chat-form">
      <input type="text" class="chat-widget__input" placeholder="Digite sua mensagem...">
      <button type="submit" class="chat-widget__send">
        <svg><!-- icon --></svg>
      </button>
    </form>
  </div>
</div>
```

### 4.2 Modal de Captação

```html
<div class="modal" id="lead-modal">
  <div class="modal__content">
    <h3>Receba seu orçamento personalizado</h3>
    <form id="lead-form">
      <input type="text" name="name" placeholder="Nome completo" required>
      <input type="tel" name="phone" placeholder="Telefone" required>
      <input type="email" name="email" placeholder="E-mail" required>
      <select name="city" required>
        <option value="">Cidade</option>
        <!-- Opções -->
      </select>
      <select name="property_type" required>
        <option value="">Tipo do imóvel</option>
        <option value="residential">Residencial</option>
        <option value="commercial">Comercial</option>
        <option value="industrial">Industrial</option>
      </select>
      <input type="number" name="consumption" placeholder="Consumo médio (kWh)">
      <button type="submit">Solicitar Orçamento</button>
    </form>
  </div>
</div>
```

## 5. Integração com OpenAI

### 5.1 Estrutura Preparada

```php
<?php
// api/chat/openai.php

class OpenAIIntegration {
    private $apiKey;
    private $apiUrl = 'https://api.openai.com/v1/chat/completions';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
    
    public function getResponse($messages) {
        // Implementação preparada para futura integração
        // Atualmente retorna respostas offline
    }
}
?>
```

### 5.2 Sistema de Fallback

Quando a API não estiver disponível, o sistema utiliza respostas pré-definidas:

```php
<?php
// api/chat/responses.php

$responses = [
    'energia_solar' => 'A energia solar é captada por placas fotovoltaicas...',
    'orcamento' => 'Para solicitar orçamento, preencha nosso formulário...',
    'financiamento' => 'Oferecemos opções de financiamento...',
    // ... mais respostas
];
?>
```

## 6. Fluxos de Conversação

### 6.1 Fluxo de Boas-vindas

1. Usuário abre o chat
2. Bot envia mensagem de boas-vindas
3. Exibe quick replies com opções principais
4. Usuário seleciona ou digita pergunta

### 6.2 Fluxo de Orçamento

1. Usuário solicita orçamento
2. Bot explica o processo
3. Modal de captação é exibido
4. Dados são validados
5. Lead é armazenado/enviado por e-mail

### 6.3 Fluxo de Dúvidas

1. Usuário faz pergunta
2. Sistema busca resposta correspondente
3. Se não encontrar, oferece ajuda adicional
4. Pergunta se deseja falar com especialista

## 7. Armazenamento de Conversas

### 7.1 Estrutura de Dados

```json
{
  "session_id": "uuid",
  "user_id": "optional-uuid",
  "messages": [
    {
      "role": "user|assistant",
      "content": "texto da mensagem",
      "timestamp": "ISO-8601"
    }
  ],
  "lead_data": {
    "name": "string",
    "phone": "string",
    "email": "string",
    "city": "string",
    "property_type": "enum",
    "consumption": "number"
  }
}
```

## 8. Configurações

### 8.1 Variáveis de Ambiente

```
OPENAI_API_KEY=sk-...
CHAT_MODEL=gpt-4
CHAT_MAX_TOKENS=500
CHAT_TEMPERATURE=0.7
```

### 8.2 Personalização

- Nome do assistente
- Avatar personalizado
- Mensagens de boas-vindas
- Horário de funcionamento
- Mensagens fora do ar