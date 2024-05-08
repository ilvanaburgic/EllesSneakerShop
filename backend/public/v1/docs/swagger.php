<?php

require __DIR__ . '/../../../vendor/autoload.php'; //provjeriti

define('BASE_URL', 'http://localhost:5501/backend/'); // provjeriti  (ovaj mislim da je okej)

error_reporting(0);

$openapi = \OpenApi\Generator::scan(['./rest/routes', './']);
// provjeriti   (ovaj path ovdje ne valja!)


header('Content-Type: application/x-yaml');
echo $openapi->toYaml();
?>