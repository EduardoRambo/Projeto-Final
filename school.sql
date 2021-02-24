-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 24/02/2021 às 05:41
-- Versão do servidor: 10.1.37-MariaDB
-- Versão do PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `school`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `schedules`
--

CREATE TABLE `schedules` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(50) NOT NULL,
  `date` varchar(10) NOT NULL,
  `hour` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `schedules`
--

INSERT INTO `schedules` (`id`, `name`, `email`, `phone`, `date`, `hour`) VALUES
(16, 'Testte133', 'Teste@gmail.com', 9999999, 'Teste1', 'Teste1'),
(19, 'edurambo', 'edurambolima@hotmail.com', 98670232, '21011998', '21:00'),
(20, 'TesteDaNoite', 'eEDu@gmail.com', 9999999, 'Teste1', 'Teste1'),
(21, 'TesteDaNoitee12e', 'eEDu@gmail.com', 9999999, 'Teste1', 'Teste1'),
(22, 'TesteDaNoitee12e', 'eEDu@gmail.com', 9999999, 'Teste1', 'Teste1'),
(23, 'edurambo', 'edurambolima@hotmail.com', 98670232, '21011998', '21:00'),
(24, 'edurambo', 'edurambolima@hotmail.com', 98670232, '21011998', '21:00'),
(25, 'edurambo', 'edurambolima@hotmail.com', 98670232, '21011998', '21:00'),
(26, 'TesteDaNoitee12e', 'eEDu@gmail.com', 9999999, 'Teste1', 'Teste1'),
(27, 'edurambo', 'edu@gmail.com', 98670232, '21011998', 'Teste1');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `first_name`, `last_name`) VALUES
(21, 'EduardoLima', 'Teste@gmail.com', 'Eduardo', 'Eduardo Rambo'),
(22, 'eduardorambo', 'edurambolima@hotmail.com', 'eduardo', 'limateste'),
(23, 'a', 'Teste@gmail.com', 'Eduardo', 'Eduardo Rambo'),
(25, 'aaaaa', 'Teste@gmail.com', 'Eduardo', 'Eduardo Rambo'),
(27, 'dasfaqrqwerq', 'edurambolima@hotmail.com', 'eduardo', 'lima'),
(28, '1234erqwer123123', 'eqw4re234@gmail.com', 'qwerqewr', 'rqwe32441'),
(30, 'eduardoramboçliasd21', 'edurambolima@hotmail.com', 'eduardo', 'lima');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
