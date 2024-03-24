<?php
require_once 'Database/dbConnector.php';
class coursesModel {
    public $db;
    function __construct(){
        $this->db = new dbConnector();
    }

    function getCourses(){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = 'SELECT * FROM coursetable;';
        $result = $conn->query($sql);
        $response = [];

        if ($result->num_rows > 0) {
            
            while($row = $result->fetch_assoc()) {
            array_push($response, [
                'student_id' => $row['student_id'],
                'course_code' => $row['course_code'],
                'Test1' => $row['Test1'],
                'Test2' => $row['Test2'],
                'Test3' => $row['Test3'],
                'FinalExam' => $row['FinalExam'],
            ]);
            }
        }

        $this->db->close_connection();

        return json_encode($response);
    }

    function getCourse($id){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = $conn->prepare('SELECT * FROM coursetable WHERE student_id=(?);');
        $sql->bind_param('i', $id);
        $sql->execute();
        $result=$sql->get_result();

        $response = [];

        if ($result->num_rows > 0) {
            
            while($row = $result->fetch_assoc()) {
            array_push($response, [
                'student_id' => $row['student_id'],
                'course_code' => $row['course_code'],
                'Test1' => $row['Test1'],
                'Test2' => $row['Test2'],
                'Test3' => $row['Test3'],
                'FinalExam' => $row['FinalExam'],
            ]);
            }
        }

        $this->db->close_connection();

        return json_encode($response);
    }

    static function studentExsists($conn,$id){
       $sql = $conn->prepare('SELECT id from nametable where id=(?)');
       $sql->bind_param('i', $id);
       $sql->execute();
       $result=$sql->get_result();
       if ($result->num_rows > 0) {
        return true;
       }else {
        return false;
       }

    }

    function addCourse($data){
        $this->db->connect();
        $conn = $this->db->connection;
        if ($this->studentExsists($conn, $data['id'])) {
            $sql = $conn->prepare('INSERT INTO coursetable (student_id, course_code, Test1,Test2,Test3,FinalExam) VALUES (?,?,?,?,?,?)');
            $test1 = $data['test1']??null;
            $test2 = $data['test2']??null;
            $test3 = $data['test3']??null;
            $finalExam = $data['FinalExam']??null;
            $sql->bind_param('isiiii', $data['id'],$data['course_code'],$test1,$test2,$test3,$finalExam);
            $sql->execute();
            
            $response = json_encode(([
                "error"=> 0,
                "message"=>"Course added",
            ]));

            $this->db->close_connection();
            return $response;
        }
        else {
            return json_encode(([
                "error"=> 1,
                "message"=>"course not added, student does not exist"
            ]));
        }
       
    }

    function updateCourse($data){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = $conn->prepare('UPDATE coursetable SET Test1=(?),Test2=(?),Test3=(?),FinalExam=(?) WHERE student_id = (?) AND course_code = (?)');
        $test1 = $data['test1']??null;
        $test2 = $data['test2']??null;
        $test3 = $data['test3']??null;
        $finalExam = $data['FinalExam']??null;
        $sql->bind_param('iiiiis', $test1,$test2,$test3,$finalExam,$data['id'],$data['course_code']);
        $sql->execute();
        
        $response = json_encode(([
            "error"=> 0,
            "message"=>"Course updated",
        ]));

        $this->db->close_connection();
        return $response;
    }

    function deleteCourse($data){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = $conn->prepare("DELETE FROM coursetable WHERE student_id = (?) AND course_code = (?)");
        $sql->bind_param("is", $data["id"], $data["course_code"]);
        $sql->execute();

        $response = json_encode(([
            "error"=> 0,
            "message"=>"Course deleted",
        ]));

        $this->db->close_connection();
        return $response;

    }


   

}