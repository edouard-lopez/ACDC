-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2021 at 12:13 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `acdc`
--

-- --------------------------------------------------------

--
-- User: `acdcuser`
--

# uninstall if anything's already there
GRANT ALL PRIVILEGES ON *.* TO 'acdcuser'@'%';
DROP USER 'acdcuser'@'%';
DROP DATABASE IF EXISTS `acdc`;

# create the user
CREATE USER 'acdcuser'@'%' IDENTIFIED BY 'acdc2021';
CREATE DATABASE IF NOT EXISTS `acdc`;
GRANT ALL PRIVILEGES ON `tablename` . * TO 'acdcuser'@'%';

-- --------------------------------------------------------

--
-- Table structure for table `echange`
--

CREATE TABLE `echange` (
  `id_ech` int(11) NOT NULL,
  `temp_ech` varchar(50) NOT NULL,
  `agent_init` int(11) NOT NULL,
  `diff_init` tinyint(1) NOT NULL,
  `long` int(11) NOT NULL,
  `force_ech` varchar(64) NOT NULL,
  `decision` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `evenement`
--

CREATE TABLE `evenement` (
  `id_evt` int(11) NOT NULL,
  `temp_evt` datetime NOT NULL,
  `desc_evt` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `interaction`
--

CREATE TABLE `interaction` (
  `id_inter` int(11) NOT NULL,
  `id_ech` int(11) NOT NULL,
  `temp_inter` int(11) NOT NULL,
  `type_inter` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `matrice`
--

CREATE TABLE `matrice` (
  `id_mat` int(11) NOT NULL,
  `id_ech` int(11) NOT NULL,
  `ids_evt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `echange`
--
ALTER TABLE `echange`
  ADD PRIMARY KEY (`id_ech`);

--
-- Indexes for table `interaction`
--
ALTER TABLE `interaction`
  ADD PRIMARY KEY (`id_inter`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `echange`
--
ALTER TABLE `echange`
  MODIFY `id_ech` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `interaction`
--
ALTER TABLE `interaction`
  MODIFY `id_inter` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;