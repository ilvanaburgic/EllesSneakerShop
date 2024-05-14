<?php
// Report all errors accept E_NOTICE
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL ^ (E_NOTICE | E_DEPRECATED));

// Database access credentials
define('DB_NAME', 'EllesSneakerShop');
define('DB_PORT', 3306);
define('DB_USER', 'root');
define('DB_PASS', '12nana123');
define('DB_HOST', '127.0.0.1');

// JWT Secret
define('JWT_SECRET', 'PnB&6a=A!x9/.dR=E12gX5mzHFx%X*');