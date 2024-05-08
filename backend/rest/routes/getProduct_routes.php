<?php

require_once __DIR__ . '/../services/ProductService.class.php';

Flight::set('product_service', new ProductService());


Flight::route('GET /products', function(){

  $products = Flight::get('product_service')->get_all_products();

  header('Content-Type: application/json');
  
  
  Flight::json([
    'data' => $products,
  ], 200); 

}); 


Flight::route('DELETE /products/@id', function($id){
  $product_service = Flight::get('product_service');
  $result = $product_service->delete_product_by_id($id);

  if ($result) {
      Flight::json(['message' => 'Product deleted successfully'], 200);
  } else {
      Flight::json(['message' => 'Product not found'], 404);
  }
});