/**
 * Chat IA Widget
 * WTR Energia Solar
 */

export const initChat = () => {
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
            <p>Olá! Bem-vindo à WTR Energia Solar. Como posso ajudar?</p>
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
      handleQuestion(question);
    });
  });

  // Form submit
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const message = input.value.trim();
    if (message) {
      addMessage(message, 'user');
      input.value = '';
      
      // Call OpenAI API
      try {
        const response = await fetch('/api/chat/openai.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, context: {} })
        });
        const data = await response.json();
        addMessage(data.response || 'Desculpe, não consegui processar sua solicitação.', 'bot');
      } catch (error) {
        addMessage('Erro de conexão. Tente novamente.', 'bot');
      }
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

  // Handle predefined questions
  const handleQuestion = question => {
    const responses = {
      energia_solar: 'A energia solar é captada por placas fotovoltaicas e converte luz em eletricidade. Reduza sua conta em até 95%!',
      orcamento: 'Para orçamento, preencha nosso formulário ou informe: nome, telefone, e-mail, cidade e tipo do imóvel.',
      financiamento: 'Oferecemos financiamento com parcelas que cabem no seu orçamento. Muitas vezes a economia paga a parcela!'
    };
    addMessage(responses[question] || 'Como posso ajudar?', 'bot');
  };
};