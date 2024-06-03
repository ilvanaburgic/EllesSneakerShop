<?php

require __DIR__ . '/../../../vendor/autoload.php'; 

if($SERVER['SERVER_NAME'] == 'localhost' || $SERVER['SERVER_NAME'] == '127.0.0.1'){
  define('BASE_URL', 'http://localhost:5501/backend');
}else{
  define('BASE_URL', 'https://lobster-app-jkfmr.ondigitalocean.app/backend'); 

}



error_reporting(0);

$openapi = \OpenApi\Generator::scan(['../../../rest/routes', './']);  


header('Content-Type: application/x-yaml');
echo $openapi->toYaml();
?>