/**
 * Chat IA Widget
 * WTR Energia Solar
 */

export const initChat = () => {
  // Predefined responses
  const responses = {
    greeting: 'Olá! Bem-vindo à WTR Energia Solar. Como posso ajudar você hoje?',
    energia_solar: 'A energia solar é uma fonte renovável e sustentável que converte a luz do sol em eletricidade através de placas fotovoltaicas. Nossos sistemas reduzem sua conta de energia em até 95% e têm vida útil de 25+ anos.',
    orcamento: 'Para solicitar um orçamento personalizado, preciso de algumas informações: nome, telefone, e-mail, cidade e tipo do imóvel. Você pode preencher nosso formulário de contato ou me fornecer esses dados que eu registro para nossa equipe entrar em contato.',
    financiamento: 'Oferecemos diversas opções de financiamento para facilitar seu investimento em energia solar. Trabalhamos com bancos públicos e privados, e muitas vezo você pode pagar a parcela com a economia obtida na conta de luz.',
    cidades: 'Atendemos diversas cidades no Brasil. Principais regiões: São Paulo, Rio de Janeiro, Belo Horizonte, Porto Alegre, Curitiba, e muito mais. Consulte nossa equipe para verificar disponibilidade na sua região.',
    equipamentos: 'Utilizamos equipamentos de alta qualidade: placas fotovoltaicas monocristalinas, inversores string e microinversores, estruturas em alumínio anodizado e sistema de monitoramento online.',
    instalacao: 'O processo de instalação inclui: 1) Análise do local e consumo; 2) Projeto personalizado; 3) Aprovação e financiamento; 4) Instalação dos equipamentos; 5) Conexão e testes; 6) Monitoramento contínuo.',
    garantia: 'Oferecemos garantia completa: 25 anos nas placas fotovoltaicas, 10 anos no inversor, 5 anos para a instalação e 10 anos para o serviço de manutenção.',
    manutencao: 'Nossa manutenção preventiva inclui limpeza das placas, verificação de conexões, monitoramento do sistema e suporte técnico 24/7. O sistema tem poucos componentes móveis, exigindo pouca manutenção.',
    default: 'Desculpe, não entendi sua pergunta. Posso ajudar com informações sobre energia solar, orçamentos, financiamento ou nossos serviços. O que você gostaria de saber?'
  };

  // Create chat widget HTML
  const chatHTML = `
    <div class="chat-widget" id="chat-widget">
      <button class="chat-widget__toggle" aria-label="Abrir assistente virtual">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      
      <div class="chat-widget__panel" id="chat-panel">
        <div class="chat-widget__header">
          <div class="chat-widget__info">
            <strong>WTR Bot</strong>
            <span class="chat-widget__status">Online</span>
          </div>
          <button class="chat-widget__close" aria-label="Fechar chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
        
        <div class="chat-widget__messages" id="chat-messages">
          <div class="chat-widget__message chat-widget__message--bot">
            <p>${responses.greeting}</p>
          </div>
        </div>
        
        <div class="chat-widget__quick-replies">
          <button class="chat-widget__quick-reply" data-question="energia_solar">Como funciona energia solar?</button>
          <button class="chat-widget__quick-reply" data-question="orcamento">Solicitar orçamento</button>
          <button class="chat-widget__quick-reply" data-question="financiamento">Financiamento</button>
        </div>
        
        <form class="chat-widget__form" id="chat-form">
          <input type="text" class="chat-widget__input" placeholder="Digite sua mensagem..." required>
          <button type="submit" class="chat-widget__send" aria-label="Enviar mensagem">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  `;

  // Insert chat widget into body
  document.body.insertAdjacentHTML('beforeend', chatHTML);

  // Get elements
  const toggle = document.querySelector('.chat-widget__toggle');
  const panel = document.querySelector('.chat-widget__panel');
  const close = document.querySelector('.chat-widget__close');
  const form = document.querySelector('.chat-widget__form');
  const input = document.querySelector('.chat-widget__input');
  const messages = document.querySelector('.chat-widget__messages');
  const quickReplies = document.querySelectorAll('.chat-widget__quick-reply');

  // Toggle chat
  toggle.addEventListener('click', () => {
    panel.classList.add('chat-widget__panel--active');
  });

  close.addEventListener('click', () => {
    panel.classList.remove('chat-widget__panel--active');
  });

  // Quick replies
  quickReplies.forEach(btn => {
    btn.addEventListener('click', () => {
      const question = btn.dataset.question;
      addMessage(responses[question] || responses.default, 'bot');
    });
  });

  // Form submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    const message = input.value.trim();
    if (message) {
      addMessage(message, 'user');
      input.value = '';
      
      // Simple keyword matching for demo purposes
      const lowerMessage = message.toLowerCase();
      let response = responses.default;
      
      if (lowerMessage.includes('energia solar') || lowerMessage.includes('solar')) {
        response = responses.energia_solar;
      } else if (lowerMessage.includes('orçamento') || lowerMessage.includes('orcamento') || lowerMessage.includes('preço') || lowerMessage.includes('preço')) {
        response = responses.orcamento;
      } else if (lowerMessage.includes('financiamento') || lowerMessage.includes('parcela') || lowerMessage.includes('pagamento')) {
        response = responses.financiamento;
      } else if (lowerMessage.includes('cidade') || lowerMessage.includes('atend')) {
        response = responses.cidades;
      } else if (lowerMessage.includes('equipamento') || lowerMessage.includes('placa') || lowerMessage.includes('inversor')) {
        response = responses.equipamentos;
      } else if (lowerMessage.includes('instalação') || lowerMessage.includes('instalar')) {
        response = responses.instalacao;
      } else if (lowerMessage.includes('garantia')) {
        response = responses.garantia;
      } else if (lowerMessage.includes('manutenção') || lowerMessage.includes('manutencao')) {
        response = responses.manutencao;
      }
      
      addMessage(response, 'bot');
    }
  });

  // Add message to chat
  const addMessage = (text, sender) => {
    const messageEl = document.createElement('div');
    messageEl.className = `chat-widget__message chat-widget__message--${sender}`;
    messageEl.innerHTML = `<p>${text}</p>`;
    messages.appendChild(messageEl);
    messages.scrollTop = messages.scrollHeight;
  };
};