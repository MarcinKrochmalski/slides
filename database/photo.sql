-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Kwi 2023, 16:12
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `slides`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `photo`
--

CREATE TABLE `photo` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `photo`
--

INSERT INTO `photo` (`id`, `title`, `alt`, `src`) VALUES
(1, 'Photo 1', 'Photo 1', 'images/1.jpg'),
(2, 'Photo 2', 'Photo 2', 'images/2.jpg'),
(3, 'Photo 3', 'Photo 3', 'images/3.jpg'),
(4, 'Photo 4', 'Photo 4', 'images/4.jpg'),
(5, 'Photo 6', 'Photo 6', 'images/6.jpg'),
(6, 'Photo 7', 'Photo 7', 'images/7.jpg'),
(7, 'Photo 8', 'Photo 8', 'images/8.jpg'),
(8, 'Photo 9', 'Photo 9', 'images/9.jpg'),
(9, 'Photo 10', 'Photo 10', 'images/10.jpg'),
(10, 'Photo 11', 'Photo 11', 'images/11.jpg'),
(11, 'Photo 12', 'Photo 12', 'images/12.jpg'),
(12, 'Photo 13', 'Photo 13', 'images/13.jpg'),
(13, 'Photo 14', 'Photo 14', 'images/14.jpg');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
