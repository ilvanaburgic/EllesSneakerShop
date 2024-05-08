<?php

require_once __DIR__ . '/rest/services/LoginService.class.php';

Flight::register('login_service', 'LoginService');

Flight::route('POST /login', function() {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        $user = Flight::login_service()->authenticate($email, $password);

        Flight::json($user);
    } catch (Exception $e) {
        Flight::json(["message" => $e->getMessage()], $e->getCode() == 401 ? 401 : 400);
    }
});


