<?php
require_once __DIR__ . '/../vendor/autoload.php';     
require_once 'rest/routes/getProduct_routes.php';
require_once 'rest/routes/makeOrder_routes.php';        //provjeriti ove rute => SVE
require_once 'rest/routes/postLogin_routes.php';
require_once 'rest/routes/postSubscribe_routes.php';


Flight::start();

?>
