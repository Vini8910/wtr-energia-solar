<?php
/**
 * OpenAI Integration API
 * WTR Energia Solar
 * 
 * Próxima integração com IA
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Carregar configurações
require_once __DIR__ . '/config.php';

// Contexto do assistente
$SYSTEM_PROMPT = "Você é um assistente comercial especializado em energia solar da WTR Energia Solar. 
Responda de forma clara, profissional e persuasiva. 
Ajude clientes com dúvidas sobre energia solar, orçamentos, financiamento e instalação.
Sempre tente capturar leads quando apropriado.";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $message = $input['message'] ?? '';
    $context = $input['context'] ?? [];
    
    // Validação
    if (empty($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'Mensagem vazia']);
        exit;
    }
    
// Preparar payload para OpenAI
  $payload = [
    'model' => $OPENAI_MODEL,
    'messages' => [
      ['role' => 'system', 'content' => $SYSTEM_PROMPT],
      ['role' => 'user', 'content' => $message]
    ],
    'temperature' => $OPENAI_TEMPERATURE,
    'max_tokens' => $OPENAI_MAX_TOKENS
  ];
    
    // Fazer requisição para OpenAI
    $ch = curl_init($OPENAI_ENDPOINT);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $OPENAI_API_KEY
    ]);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    $data = json_decode($response, true);
    
    // Retornar resposta
    echo json_encode([
        'success' => true,
        'response' => $data['choices'][0]['message']['content'] ?? 'Desculpe, não consegui processar sua solicitação.'
    ]);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
}