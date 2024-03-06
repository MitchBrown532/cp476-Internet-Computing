<?php 
require 'Database/dbConnector.php';
class coursesModel {
    public $db;
    function __construct(){
        $this->db = new dbConnector('temp_db');
    }

   

}