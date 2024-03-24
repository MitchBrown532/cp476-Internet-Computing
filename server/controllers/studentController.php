<?php
header('Access-Control-Allow-Origin: *');
    require_once 'Models/studentModel.php';
    class studentController{

        public function processRequest(string $method, string $request,?string $id): void{
            switch ($method){
                case "GET":
                    switch ($request){
                        case 'students':
                            $this->getStudents($id);
                            exit;
                    }
            
                case "POST":
                    switch ($id){
                        case "add":
                            $this->addStudent();
                            exit;
                        case "delete": 
                            $this->deleteStudent();
                            exit;
                        
                    }
            }
        }

        function getStudents($id) {
            $student = new studentModel();
            try {
                if ($id) {
                    $response = $student->getStudent($id);
                    echo $response;
                    
                }else {
                    $response = $student->getStudents();
                    echo $response;
                }
               
            }catch (Exception $e){
                http_response_code(500);
                echo $e->getMessage();
            }
        }

        function addStudent(){
            $data = json_decode(file_get_contents("php://input"),true);
            $student = new studentModel();
            try {
                if (!$data["name"]){
                    http_response_code(400);
                    echo "Bad request invalid body";
                }else {
                    $response = $student->addStudent($data["name"]);
                    echo $response;
                }
              
            }catch (Exception $e){
                http_response_code(500);
                echo $e->getMessage();
            }
        }

        function deleteStudent(){
            $data = json_decode(file_get_contents("php://input"),true);
            $student = new studentModel();
            try {
                if (!$data["id"]){
                    http_response_code(400);
                    echo "Bad request invalid body";
                }else {
                    $response = $student->deleteStudent($data["id"]);
                    echo $response;
                }
              
            }catch (Exception $e){
                http_response_code(500);
                echo $e->getMessage();
            }
        }

            
    }