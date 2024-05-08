<?php

require_once __DIR__ . '/rest/services/NewsletterService.class.php';

Flight::register('newsletterService', 'NewsletterService');

Flight::route('POST /subscribe', function() {

    $input_data = json_decode(file_get_contents('php://input'), true);

    if (!isset($input_data['email'])) {
        Flight::json(['error' => 'Email is required'], 400);
        return; 
    }

    $subscriber = ['email' => $input_data['email']];

    Flight::newsletterService()->subscribe($subscriber);


    Flight::json([
        'message' => 'Subscription successful.'
    ]);
});