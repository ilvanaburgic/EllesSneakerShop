<?php

require_once __DIR__ . '/rest/services/ProductService.class.php';

Flight::set('product_service', new ProductService);


Flight::route('GET /products', function(){

  $products = Flight::get('product_service')->get_all_products();

  header('Content-Type: application/json');
  
  
  Flight::json([
    'data' => $products,
  ], 200); 

}); 