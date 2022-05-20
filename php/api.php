<?php

// // Método HTTP
// echo "Método: ";
// echo $_SERVER['REQUEST_METHOD'];

// echo "\n\nHeaders: \n";

// $headers = getallheaders();
// print_r($headers);

// echo "\n\nPOST: \n";
// $input = file_get_contents('php://input');
// $array = json_decode($input, true);
// $_POST = !empty($array) ? $array : $_POST;

// print_r($_POST);

$array = [
    'codigo' => 200,
    'sucesso' => true
];

echo json_encode($array);