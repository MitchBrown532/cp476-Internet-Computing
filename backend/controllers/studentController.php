<?php
    require 'Models/studentModel.php';
    class studentController{

        public function processRequest(string $method, string $request,?string $id): void{
            switch ($method){
                case "GET":
                    switch ($request){
                        case 'students':
                            echo $this->getStudents();
                            exit;
                    }
            }
        }


        function getStudents() {
            $student = new studentModel();
            $response = $student->getStudents();
            return json_encode($response);
        }

            

    }