CREATE DATABASE  IF NOT EXISTS `pruebabg` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pruebabg`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: pruebabg
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `idpersona` int NOT NULL AUTO_INCREMENT,
  `cedula` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `nacimiento` date NOT NULL,
  `genero` varchar(45) NOT NULL,
  `papa` int DEFAULT NULL,
  `mama` int DEFAULT NULL,
  PRIMARY KEY (`idpersona`),
  KEY `mama_idx` (`mama`),
  KEY `papa_idx` (`papa`),
  CONSTRAINT `mama` FOREIGN KEY (`mama`) REFERENCES `persona` (`idpersona`),
  CONSTRAINT `papa` FOREIGN KEY (`papa`) REFERENCES `persona` (`idpersona`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (17,'1','god','1000-01-01','m',NULL,NULL),(18,'10987','Maria Valencia','1990-05-02','f',NULL,NULL),(19,'10237','Pedro Perez','1995-05-05','m',NULL,NULL),(20,'110245','Pamela Almeida','1996-08-12','f',NULL,NULL),(21,'110246','Paola Vera','1996-08-12','f',19,18),(22,'105667','Sarmiento Angulo','0001-01-01','m',24,18),(23,'112566','Diego Dangon','0001-01-01','m',NULL,NULL),(24,'980556','Daniel Diaz','0001-01-01','m',NULL,NULL),(25,'755566','Carlos Alberto','0001-01-01','m',24,30),(26,'899744','Charlie Chavez','0001-01-01','m',NULL,NULL),(27,'823711','Fernando Montero','0002-01-01','m',NULL,NULL),(28,'317740','Francisco Rojas','0002-01-01','m',NULL,NULL),(29,'219660','Hernan Rojas','0005-05-05','m',NULL,NULL),(30,'110223','Eva Jules','0002-02-02','f',17,NULL),(31,'110256','Martha Vera','2022-01-06','f',23,20),(32,'665487','Eliza Silva','1996-08-12','f',18,19),(33,'102377899','Juan Vera','1995-04-17','m',24,21),(34,'110237551','Andres Silva','1980-02-17','m',28,32);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personas_hijos`
--

DROP TABLE IF EXISTS `personas_hijos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personas_hijos` (
  `idpersonas_hijos` int NOT NULL AUTO_INCREMENT,
  `idPM` int NOT NULL,
  `idHijo` int NOT NULL,
  PRIMARY KEY (`idpersonas_hijos`),
  KEY `idPadre_idx` (`idPM`),
  KEY `idHijo_idx` (`idHijo`),
  CONSTRAINT `idHijo` FOREIGN KEY (`idHijo`) REFERENCES `persona` (`idpersona`),
  CONSTRAINT `idPadre` FOREIGN KEY (`idPM`) REFERENCES `persona` (`idpersona`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personas_hijos`
--

LOCK TABLES `personas_hijos` WRITE;
/*!40000 ALTER TABLE `personas_hijos` DISABLE KEYS */;
INSERT INTO `personas_hijos` VALUES (2,17,18),(3,20,17),(4,20,18),(5,19,20),(6,19,20),(7,17,21),(8,17,23),(9,20,24),(10,24,26),(11,33,31),(12,33,32),(13,34,31),(14,34,21),(15,34,18);
/*!40000 ALTER TABLE `personas_hijos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-06 16:50:38
