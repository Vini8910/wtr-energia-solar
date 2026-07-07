<?php
/**
 * Contact Form Processing
 * WTR Energia Solar
 */

header('Content-Type: application/json');

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required = ['name', 'email', 'phone', 'city', 'property_type'];
$errors = [];

foreach ($required as $field) {
    if (empty($data[$field])) {
        $errors[] = "O campo $field é obrigatório";
    }
}

// Validate email
if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'E-mail inválido';
}

// If there are errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['errors' => $errors]);
    exit;
}

// Sanitize data
$name = htmlspecialchars(trim($data['name']));
$email = htmlspecialchars(trim($data['email']));
$phone = htmlspecialchars(trim($data['phone']));
$whatsapp = isset($data['whatsapp']) ? htmlspecialchars(trim($data['whatsapp'])) : '';
$city = htmlspecialchars(trim($data['city']));
$propertyType = htmlspecialchars(trim($data['property_type']));
$consumption = isset($data['consumption']) ? intval($data['consumption']) : 0;

// Here you would send the email or save to database
// For now, we'll just return success

$response = [
    'success' => true,
    'message' => 'Orçamento solicitado com sucesso! Entraremos em contato em breve.',
    'data' => [
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'city' => $city,
        'property_type' => $propertyType
    ]
];

http_response_code(200);
echo json_encode($response);
?>