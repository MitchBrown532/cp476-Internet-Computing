<?php 
require_once 'Database/dbConnector.php';
class studentModel {
    public $db;
    function __construct(){
        $this->db = new dbConnector();
    }

    function getStudents(){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = 'SELECT * FROM nametable;';
        $result = $conn->query($sql);
        $response = [];

        if ($result->num_rows > 0) {
            
            while($row = $result->fetch_assoc()) {
            array_push($response, [
                'id' => $row['id'],
                'name' =>$row['student_name']
            ]);
            }
        }

        $this->db->close_connection();

        return json_encode($response);
    }
    function getStudent($id){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = $conn->prepare('SELECT * FROM nametable WHERE id=(?);');
        $sql->bind_param('i', $id);
        $sql->execute();
        $result=$sql->get_result();
        $response = [];

        if ($result->num_rows > 0) {
            
            while($row = $result->fetch_assoc()) {
            array_push($response, [
                'id' => $row['id'],
                'name' =>$row['student_name']
            ]);
            }
        }

        $this->db->close_connection();

        return json_encode($response);
    }

    function addStudent($name){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = $conn->prepare('INSERT INTO nametable (student_name) VALUES ((?))');
        $sql->bind_param('s', $name);
        $sql->execute();
        
 

        $response =  json_encode(([
            "message"=>"Student added",
            "id"=>$conn->insert_id
        ]));

        $this->db->close_connection();

        return $response;

        
    }

    function deleteStudent($id){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = $conn->prepare('DELETE FROM nametable WHERE id=(?)');
        $sql->bind_param('i', $id);
        $sql->execute();
        $this->db->close_connection();
        return json_encode(([
            "message"=>"Student deleted",
        ]));
    }

}