/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: tt
-- ------------------------------------------------------
-- Server version	10.11.11-MariaDB-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Administrador`
--

DROP TABLE IF EXISTS `Administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Administrador` (
  `CorreoAdministrador` varchar(100) NOT NULL,
  `Contraseña` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`CorreoAdministrador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Administrador`
--

LOCK TABLES `Administrador` WRITE;
/*!40000 ALTER TABLE `Administrador` DISABLE KEYS */;
INSERT INTO `Administrador` VALUES
('villalobos@gmail.com','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f'),
('zamudio@gmail.com','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f');
/*!40000 ALTER TABLE `Administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Alumno`
--

DROP TABLE IF EXISTS `Alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Alumno` (
  `IdAlumno` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) DEFAULT NULL,
  `Apellido` varchar(100) DEFAULT NULL,
  `Foto` varchar(255) DEFAULT NULL,
  `AciertosNumeros` int(11) NOT NULL DEFAULT 0,
  `IdGrupo` int(11) DEFAULT NULL,
  `CorreoTutor` varchar(100) DEFAULT NULL,
  `AciertosLetras` int(11) NOT NULL DEFAULT 0,
  `FechaAciertosNumeros` datetime DEFAULT '2025-01-01 00:00:00',
  `FechaAciertosLetras` datetime DEFAULT '2025-01-01 00:00:00',
  PRIMARY KEY (`IdAlumno`),
  UNIQUE KEY `unique_tutor` (`CorreoTutor`),
  KEY `Alumno_ibfk_1` (`IdGrupo`),
  CONSTRAINT `Alumno_ibfk_1` FOREIGN KEY (`IdGrupo`) REFERENCES `Grupo` (`IdGrupo`) ON DELETE SET NULL,
  CONSTRAINT `fk_tutor` FOREIGN KEY (`CorreoTutor`) REFERENCES `Tutor` (`CorreoTutor`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alumno`
--

LOCK TABLES `Alumno` WRITE;
/*!40000 ALTER TABLE `Alumno` DISABLE KEYS */;
INSERT INTO `Alumno` VALUES
(13,'Ezequiel','Villalobos Sanchez','static/img/usuarios/psychohappy2002@gmail.com.jpg',10,18,'psychohappy2002@gmail.com',9,'2025-04-30 08:23:47','2025-04-30 08:29:19'),
(15,'Cesar Osvaldo','Zamudio Onofre','static/img/usuarios/cesar@gmail.com.png',0,19,'cesar@gmail.com',1,NULL,NULL),
(19,'Wendy','Lopez Martinez','static/img/alumnos/usuario.png',0,18,'ween@gmail.com',0,NULL,NULL);
/*!40000 ALTER TABLE `Alumno` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`villalobos`@`localhost`*/ /*!50003 TRIGGER actualizar_fechas_aciertos
BEFORE UPDATE ON Alumno
FOR EACH ROW
BEGIN
  IF NEW.AciertosNumeros != OLD.AciertosNumeros THEN
    SET NEW.FechaAciertosNumeros = NOW();
  END IF;

  IF NEW.AciertosLetras != OLD.AciertosLetras THEN
    SET NEW.FechaAciertosLetras = NOW();
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Docente`
--

DROP TABLE IF EXISTS `Docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Docente` (
  `CorreoDocente` varchar(100) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Apellido` varchar(100) DEFAULT NULL,
  `Contraseña` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`CorreoDocente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Docente`
--

LOCK TABLES `Docente` WRITE;
/*!40000 ALTER TABLE `Docente` DISABLE KEYS */;
INSERT INTO `Docente` VALUES
('2docente@gmail.com','Zamudio','Onofre','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f'),
('docente@gmail.com','Villalobos','Ezequiel','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f');
/*!40000 ALTER TABLE `Docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ejercicio`
--

DROP TABLE IF EXISTS `Ejercicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ejercicio` (
  `IdEjercicio` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(100) NOT NULL,
  `Valores` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Valores`)),
  `CorreoDocente` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`IdEjercicio`),
  KEY `CorreoDocente` (`CorreoDocente`),
  CONSTRAINT `Ejercicio_ibfk_1` FOREIGN KEY (`CorreoDocente`) REFERENCES `Docente` (`CorreoDocente`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ejercicio`
--

LOCK TABLES `Ejercicio` WRITE;
/*!40000 ALTER TABLE `Ejercicio` DISABLE KEYS */;
INSERT INTO `Ejercicio` VALUES
(17,'vareado','[\"K\", \"10\"]','docente@gmail.com'),
(27,'Vocales','[\"A\", \"E\", \"I\", \"O\", \"U\"]','docente@gmail.com'),
(28,'números','[\"1\", \"2\", \"3\", \"4\"]','docente@gmail.com'),
(29,'hola','[\"A\", \"A\"]','2docente@gmail.com');
/*!40000 ALTER TABLE `Ejercicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Grupo`
--

DROP TABLE IF EXISTS `Grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Grupo` (
  `IdGrupo` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(100) DEFAULT NULL,
  `Codigo` varchar(10) DEFAULT NULL,
  `NoAlumnos` int(11) DEFAULT NULL,
  `CorreoDocente` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`IdGrupo`),
  UNIQUE KEY `Codigo` (`Codigo`),
  UNIQUE KEY `unique_docente` (`CorreoDocente`),
  CONSTRAINT `Grupo_ibfk_1` FOREIGN KEY (`CorreoDocente`) REFERENCES `Docente` (`CorreoDocente`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Grupo`
--

LOCK TABLES `Grupo` WRITE;
/*!40000 ALTER TABLE `Grupo` DISABLE KEYS */;
INSERT INTO `Grupo` VALUES
(13,'Primero A','W996N',0,NULL),
(18,'2A','4VHFX',2,'docente@gmail.com'),
(19,'Cet1','DVRO6',1,'2docente@gmail.com');
/*!40000 ALTER TABLE `Grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Resultado`
--

DROP TABLE IF EXISTS `Resultado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Resultado` (
  `IdResultado` int(11) NOT NULL AUTO_INCREMENT,
  `IdAlumno` int(11) DEFAULT NULL,
  `IdEjercicio` int(11) DEFAULT NULL,
  `Aciertos` int(11) DEFAULT NULL,
  `Errores` int(11) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`IdResultado`),
  KEY `Resultado_ibfk_2` (`IdEjercicio`),
  KEY `Resultado_ibfk_1` (`IdAlumno`),
  CONSTRAINT `Resultado_ibfk_1` FOREIGN KEY (`IdAlumno`) REFERENCES `Alumno` (`IdAlumno`) ON DELETE CASCADE,
  CONSTRAINT `Resultado_ibfk_2` FOREIGN KEY (`IdEjercicio`) REFERENCES `Ejercicio` (`IdEjercicio`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Resultado`
--

LOCK TABLES `Resultado` WRITE;
/*!40000 ALTER TABLE `Resultado` DISABLE KEYS */;
INSERT INTO `Resultado` VALUES
(3,13,17,5,1,'2025-04-24 21:23:27'),
(5,13,27,5,0,'2025-04-28 19:08:36');
/*!40000 ALTER TABLE `Resultado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tutor`
--

DROP TABLE IF EXISTS `Tutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tutor` (
  `CorreoTutor` varchar(100) NOT NULL,
  `Contraseña` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`CorreoTutor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tutor`
--

LOCK TABLES `Tutor` WRITE;
/*!40000 ALTER TABLE `Tutor` DISABLE KEYS */;
INSERT INTO `Tutor` VALUES
('cesar@gmail.com','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f'),
('psychohappy2002@gmail.com','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f'),
('ween@gmail.com','ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f');
/*!40000 ALTER TABLE `Tutor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-30  8:44:00
