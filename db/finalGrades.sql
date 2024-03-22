DROP TABLE IF EXISTS `finaltable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `finaltable` (
  `student_id` int NOT NULL,
  `student_name` text,
  `course_code` text,
  `final_grade` int DEFAULT NULL,
  CONSTRAINT fk_stu
    FOREIGN KEY (student_id)
    REFERENCES nametable (id)
    ON DELETE CASCADE
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;