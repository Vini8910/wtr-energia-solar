<?php
/**
 * OpenAI Configuration
 * WTR Energia Solar
 */

// API Key do OpenAI (configurar no ambiente de hospedagem)
$OPENAI_API_KEY = getenv('OPENAI_API_KEY') ?: '';

// Endpoint da API
$OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

// Configurações do modelo
$OPENAI_MODEL = 'gpt-4';
$OPENAI_TEMPERATURE = 0.7;
$OPENAI_MAX_TOKENS = 500;

// Contexto do assistente
$SYSTEM_PROMPT = "Você é um assistente comercial especializado em energia solar da WTR Energia Solar. 
Responda de forma clara, profissional e persuasiva. 
Ajude clientes com dúvidas sobre energia solar, orçamentos, financiamento e instalação.
Sempre tente capturar leads quando apropriado.";