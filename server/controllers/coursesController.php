<?php
    require_once 'Models/coursesModel.php';
    class coursesController{

        public function processRequest(string $method, string $request,?string $id): void{
            switch ($method){
                case "GET":
                    switch ($request){
                        case 'courses':
                            $this->getCourses($id);
                            exit;
                    }
            
                case "POST":
                    switch ($id){
                        case "add":
                            $this->addCourse();
                            exit;
                        case "delete": 
                            $this->deleteCourse();
                            exit;
                        case "update":
                            $this->updateCourse();

                    }
            }
        }

        function getCourses($id){
            $course = new coursesModel();
            try {
                if ($id) {
                    $response = $course->getCourse($id);
                    echo $response;
                        
                }else {
                    $response = $course->getCourses();
                    echo $response;
                }
                   
            }catch (Exception $e){
                http_response_code(500);
                echo $e->getMessage();
            }
        }
        function addCourse(){
            $data = json_decode(file_get_contents("php://input"),true);
            $course = new coursesModel();
            try {
                if (!$data["id"] || !$data["course_code"]){
                    http_response_code(400);
                    echo "Bad request invalid body";
                }else {
                    $response = $course->addCourse($data);
                    if (json_decode($response)->error){
                        http_response_code(500);
                    }
                    echo $response;
                }
              
            }catch (Exception $e){
                http_response_code(500);
                echo $e->getMessage();
            }
        
        }

        function deleteCourse(){
            $data = json_decode(file_get_contents("php://input"),true);
            $course = new coursesModel();

            try {
                if (!$data["id"] || !$data["course_code"]){
                    http_response_code(400);
                    echo "Bad request invalid body";
                }else {
                    $response = $course->deleteCourse($data);
                    echo $response;
                }
              
            }catch (Exception $e){
                http_response_code(500);
                echo $e->getMessage();
            }
        }

        function updateCourse(){
            $data = json_decode(file_get_contents("php://input"),true);
            $course = new coursesModel();

            try {
                if (!$data["id"] || !$data["course_code"]){
                    http_response_code(400);
                    echo "Bad request invalid body";
                }else {
                    $response = $course->updateCourse($data);
                    echo $response;
                }
              
            }catch (Exception $e){
                http_response_code(500);
                echo $e->getMessage();
            }
        }
 

    }