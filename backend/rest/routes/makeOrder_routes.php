<?php

require_once __DIR__ . '/../services/OrderService.class.php';

Flight::register('orderService', 'OrderService');

Flight::route('POST /order', function() {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);


    if (!isset($data['user']) || !isset($data['items'])) {
        Flight::json(['error' => 'Missing user or items data'], 400);
        return;
    }

    $order = Flight::orderService()->createOrderWithUser($data);

    Flight::json([
        'success' => true, 
        'message' => 'Order created successfully', 
        'order' => $order
    ]);
});


