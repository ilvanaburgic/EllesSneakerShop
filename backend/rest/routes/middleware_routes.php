<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function AuthMiddleware() {
    $token = Flight::request()->getHeader("Authorization");

    if (!$token){
        Flight::halt(401, json_encode(["message" => "Token is missing."]));
    } else {
        try {
            $decoded = JWT::decode($token, new Key(JWT_SECRET, "HS256"));

        

            Flight::set('user', $decoded);
        } catch (Exception $e) {
            Flight::halt(401, json_encode(["message" => "Token invalid."]));
        }
    }
}