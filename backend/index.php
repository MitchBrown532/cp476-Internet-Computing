<?php

require 'Controllers/studentController.php';
require 'Controllers/coursesController.php';

header("Content-type: application/json; charset=UTF-8");

$url = explode("/", $_SERVER["REQUEST_URI"]);

if (sizeof($url) >=3){
    if ($url[2] == 'students'){
        $students = new studentController();
        $students->processRequest($_SERVER["REQUEST_METHOD"], $url[2],null);
    }else if ($url[2]=='courses'){
        $courses = new coursesController();
        $courses->processRequest($_SERVER['REQUEST_METHOD'], $url[2],null);
    }else{
        http_response_code(404);
        exit;
    }
}
