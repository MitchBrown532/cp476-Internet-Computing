<?php

require_once 'Controllers/studentController.php';
require_once 'Controllers/coursesController.php';
require_once 'Controllers/finalController.php';

header("Content-type: application/json; charset=UTF-8");

$url = explode("/", $_SERVER["REQUEST_URI"]); 

if (sizeof($url) >=5) {
    $id = $url[5] ?? null;
    if ($url[4] == 'students'){
        $students = new studentController();
        $students->processRequest($_SERVER["REQUEST_METHOD"], $url[4],$id);
    }else if ($url[4]=='courses'){
        $courses = new coursesController();
        $courses->processRequest($_SERVER['REQUEST_METHOD'], $url[4],$id);
    }else if ($url[4]=='finalmarks'){
        $final = new finalController();
        $final->processRequest($_SERVER['REQUEST_METHOD'], $url[4],$id);
    }else{
        http_response_code(404);
        exit;
    }
}
