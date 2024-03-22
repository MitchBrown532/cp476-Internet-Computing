<?php

require_once 'env.php';

class dbConnector{
    public $db;
    public $connection;
    function __construct(){
        $this->connection = null;
    }

 function connect() {
        try {
            $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
            $this->connection = $connection;
        }catch(Exception $e) {
            http_response_code(500);
            echo "error occured while connecting to database: ".$e->getMessage();
            exit(); 
        }
    }

   function close_connection(){
        try {
            mysqli_close($this->connection);
        }catch(Exception $e) {
            http_response_code(500);
            echo 'error occured while closing connection: '. $e->getMessage();
            exit();
        }
    }
}