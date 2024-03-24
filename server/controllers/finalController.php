<?php
require_once 'Models/finalModel.php';
class finalController{

public function processRequest(string $method, string $request,?string $id): void{
    switch ($method){
        case "GET":
            switch ($request){
                case 'finalmarks':
                    $this->getFinalMarks($id);
                    exit;
            }
    
        case "POST":
            switch ($id){
                case "calculate":
                    $this->calculateMarks();
                    exit;
            }
    }
}

function getFinalMarks($id){
    $final = new finalModel();
    try {
        if ($id) {
            $response = $final->getfinalmarksbyid($id);
            echo $response;
                
        }else {
            $response = $final->getFinalMarks();
            echo $response;
        }
           
    }catch (Exception $e){
        http_response_code(500);
        echo $e->getMessage();
    }
}

function calculateMarks(){
    $final = new finalModel();
    try {
        $response = $final->calculateFinalMarks();
        echo $response;
        
    }catch (Exception $e){
        http_response_code(500);
        echo $e->getMessage();
    }
}
}

