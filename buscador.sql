-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 27, 2026 at 05:37 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spiderman`
--

-- --------------------------------------------------------

--
-- Table structure for table `buscador`
--

CREATE TABLE `buscador` (
  `id_busqueda` int(11) NOT NULL,
  `nombre_personaje` varchar(50) NOT NULL,
  `apellido_personaje` varchar(50) NOT NULL,
  `apodo` varchar(50) DEFAULT NULL,
  `peliculas` varchar(100) NOT NULL,
  `trilogia` varchar(50) DEFAULT NULL,
  `tipo` varchar(50) NOT NULL,
  `nombre_actor` varchar(50) NOT NULL,
  `apellido_actor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buscador`
--

INSERT INTO `buscador` (`id_busqueda`, `nombre_personaje`, `apellido_personaje`, `apodo`, `peliculas`, `trilogia`, `tipo`, `nombre_actor`, `apellido_actor`) VALUES
(1, 'Peter', 'Parker', 'Spider-Man', 'HomecomingFar From HomeNo Way HomeBrand New Day', 'Home', 'Principal', 'Tom', 'Holland'),
(2, 'Mary', 'Jones-Watson', 'MJ', 'HomecomingFar From HomeNo Way HomeBrand New Day', 'Home', 'Principal', 'Zendaya', 'Coleman'),
(3, 'Ned', 'Leeds', NULL, 'HomecomingFar From HomeNo Way HomeBrand New Day', 'Home', 'Principal', 'Jacob', 'Batalon'),
(4, 'May', 'Parker', 'Tía May', 'HomecomingFar From HomeNo Way Home', 'Home', 'Principal', 'Marisa', 'Tomei'),
(5, 'Adrian', 'Toomes', 'Vulture', 'Homecoming', 'Home', 'Villano', 'Michael', 'Keaton'),
(6, 'Quentin', 'Beck', 'Mysterio', 'Far From Home', 'Home', 'Villano', 'Jake', 'Gyllenhaal'),
(7, 'Norman', 'Osborn', 'Green Goblin', 'No Way Home', 'Home', 'Villano', 'Willem', 'Dafoe'),
(8, 'Otto', 'Octavius', 'Doctor Octopus', 'No Way Home', 'Home', 'Villano', 'Alfred', 'Molina'),
(9, 'Max', 'Dillon', 'Electro', 'No Way Home', 'Home', 'Villano', 'Jamie', 'Foxx'),
(10, 'Jean', 'Grey', 'Dark Phoenix', 'Brand New Day', NULL, 'Villano', 'Sadie', 'Sink');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buscador`
--
ALTER TABLE `buscador`
  ADD PRIMARY KEY (`id_busqueda`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buscador`
--
ALTER TABLE `buscador`
  MODIFY `id_busqueda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
