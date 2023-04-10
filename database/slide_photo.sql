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
-- Struktura tabeli dla tabeli `slide_photo`
--

CREATE TABLE `slide_photo` (
  `slide_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `slide_photo`
--

INSERT INTO `slide_photo` (`slide_id`, `photo_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 5),
(1, 7),
(2, 2),
(2, 4),
(2, 5),
(2, 8),
(2, 9),
(3, 9),
(3, 11),
(3, 12),
(3, 13),
(4, 3),
(4, 4),
(4, 5),
(5, 1),
(5, 2),
(5, 3),
(5, 5),
(5, 8),
(6, 2),
(6, 3),
(6, 5),
(6, 7),
(7, 10),
(7, 11),
(7, 12),
(7, 13),
(8, 1),
(8, 3),
(8, 5),
(8, 6),
(8, 8);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `slide_photo`
--
ALTER TABLE `slide_photo`
  ADD PRIMARY KEY (`slide_id`,`photo_id`),
  ADD KEY `IDX_953E523BDD5AFB87` (`slide_id`),
  ADD KEY `IDX_953E523B7E9E4C8C` (`photo_id`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `slide_photo`
--
ALTER TABLE `slide_photo`
  ADD CONSTRAINT `FK_953E523B7E9E4C8C` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_953E523BDD5AFB87` FOREIGN KEY (`slide_id`) REFERENCES `slide` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
