<?php 
require 'Database/dbConnector.php';
class studentModel {
    public $db;
    function __construct(){
        $this->db = new dbConnector('temp_db');
    }

    function getStudents(){
        $this->db->connect();
        $conn = $this->db->connection;
        $sql = 'SELECT * FROM Names';
        $result = $conn->query($sql);
        $response = [];

        if ($result->num_rows > 0) {
            
            while($row = $result->fetch_assoc()) {
            array_push($response, [
                'id' => $row['id'],
                'name' =>$row['name']
            ]);
            }
        }

        $this->db->close_connection();

        return $response;
    }

}