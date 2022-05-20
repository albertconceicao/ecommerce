<?php 

$headers = [
    'X-Client-ID: '.base64_encode('03280774535'),
    'Content-Type: application/json'
];


$post = [
    'username' => 'tecnico',
    'password' => '2t0e2c2'
];

$json = json_encode($post);

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "https://api.mithra.com.br/mithra/v1/auth",
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_POSTFIELDS => $json
]);

//Armazena dados do GET na response
$response = curl_exec($curl);


curl_close($curl);
// print_r($response);

//imprime resultado
// echo($response);

$array = json_decode($response, true);

$chave_acesso = $array["access_token"];
// array_push($headers, "Authorization: Bearer $chave_acesso");
$headers[] = "Authorization: Bearer $chave_acesso";
// print_r($array["access_token"]);
// print_r($headers);


$post = [
    "area" => "PRODUT",
    "search" => array([
        
            "field" => "GRUPO",
            "operation" => "EQUAL_TO",
            "value" => "2020"
        
    ]),
    "order" => "CODIGO DESC",
];

$json = json_encode($post);
// print_r($json);
// die;

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "https://api.mithra.com.br/mithra/v1/search",
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_POSTFIELDS => $json
]);

//Armazena dados do GET na response
$response = curl_exec($curl);


curl_close($curl);

header('Content-Type: application/json');
echo $response;