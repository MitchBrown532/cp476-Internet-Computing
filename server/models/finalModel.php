<?php

require_once 'Database/dbConnector.php';
class finalModel {
    public $db;
    function __construct(){
        $this->db = new dbConnector();
    }


    public function getFinalMarks(){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = 'SELECT * FROM finaltable;';


        $result = $conn->query($sql);
        $response = [];

        if ($result->num_rows > 0) {
            
            while($row = $result->fetch_assoc()) {
            array_push($response, [
                'student_id' => $row['student_id'],
                'student_name' => $row['student_name'],
                'course_code' => $row['course_code'],
                'final_mark' => $row['final_grade'],
            ]);
            }
        }

        $this->db->close_connection();

        return json_encode($response);

    }

    public function getFinalMarksById($student_id){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = $conn->prepare('SELECT * FROM finaltable Where student_id = (?);');
        $sql->bind_param('i', $student_id);
        $sql->execute();
        $result = $sql->get_result();
        $response = [];

        if ($result->num_rows > 0) {
            
            while($row = $result->fetch_assoc()) {
                array_push($response, [
                    'student_id' => $row['student_id'],
                    'student_name' => $row['student_name'],
                    'course_code' => $row['course_code'],
                    'final_mark' => $row['final_grade'],
                ]);
            }
        }

        $this->db->close_connection();

        return json_encode($response);

    }

    public function calculateFinalMarks(){
        $this->db->connect();
        $conn = $this->db->connection;

        $sql = 'DELETE FROM finaltable;';
        $result = $conn->query($sql);

        $sql = 'SELECT * FROM coursetable;';
        $result = $conn->query($sql);
        $response = [];

        if ($result->num_rows > 0) {
            
            while($row = $result->fetch_assoc()) {

                $finalmark = (($row['Test1']*0.2)+($row['Test2']*0.2)+($row['Test3']*0.2)+($row['FinalExam']*0.4));
                
                $sql = $conn->prepare('SELECT * FROM nametable WHERE id=(?);');
                $sql->bind_param('i', $row['student_id']);
                $sql->execute();
                $result2=$sql->get_result();

                if ($result2->num_rows > 0) {
            
                    while($row2 = $result2->fetch_assoc()) {

                        $sql = $conn->prepare('INSERT INTO finaltable (student_id,student_name,course_code,final_grade) VALUES (?,?,?,?);');
                        $sql->bind_param('issi', $row['student_id'],$row2['student_name'],$row['course_code'], $finalmark);
                        $sql->execute();
                   
                    }
                }

            }
        }

        $response = json_encode(([
            "error"=> 0,
            "message"=>"marks calculated",
        ]));

        $this->db->close_connection();
        return $response;

    }



}