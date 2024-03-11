-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: groupproject
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `nametable`
--

DROP TABLE IF EXISTS `nametable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nametable` (
  `student_id` int DEFAULT NULL,
  `student_name` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nametable`
--

LOCK TABLES `nametable` WRITE;
/*!40000 ALTER TABLE `nametable` DISABLE KEYS */;
INSERT INTO `nametable` VALUES (308621686,' Boone Stevenson'),(448227065,' Micheal Conrad'),(309251919,' Kayla Conway'),(350971244,' Belinda Bain'),(415807676,' Autumn Schmidt'),(603077700,' Rahul Prosser'),(547161604,' Ayyan Whiteley'),(187509717,' Ameena Khan'),(309663833,' Bertram Smith'),(293688639,' Dominique Lovel'),(570797438,' Minnie Rivers'),(403966911,' Liang Yu'),(559545416,' Alexander Floydd'),(503239671,' Matthew Hall'),(256047895,' Lori Donovan'),(301758883,' Ellie-May Palmer'),(627137015,' Keaton Sheppard'),(429464715,' Tiago Rivera'),(458362883,' Krishan Patel'),(280587734,' Kendra Paul'),(613465484,' Leonard Whitehead'),(154102471,' James Andersen'),(397016834,' Hermione Bullock'),(505004484,' Emran Bashir'),(251173274,' Xiao Qiang');
/*!40000 ALTER TABLE `nametable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-11 18:42:34
