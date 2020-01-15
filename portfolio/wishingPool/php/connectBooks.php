<?php
$dsn = "mysql:host=localhost;port=3306;dbname=i6333129_pi1;charset=utf8";
$user = "i6333129_pi1";
$password = "iv66net19891125";
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);
