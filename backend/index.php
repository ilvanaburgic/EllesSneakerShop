<?php
require 'vendor/autoload.php';  
require_once dirname(__FILE__).'/rest/routes/middleware_routes.php';
require_once dirname(__FILE__).'/rest/routes/getProduct_routes.php';
require_once dirname(__FILE__).'/rest/routes/makeOrder_routes.php';        //provjeriti ove rute => SVE
require_once dirname(__FILE__).'/rest/routes/postLogin_routes.php';
require_once dirname(__FILE__).'/rest/routes/postSubscribe_routes.php';
//require_once dirname(__FILE__).'/rest/routes/auth_routes.php';


Flight::start();

?>
