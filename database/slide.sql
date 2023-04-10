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
-- Struktura tabeli dla tabeli `slide`
--

CREATE TABLE `slide` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text_index` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `active_index` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `slide`
--

INSERT INTO `slide` (`id`, `title`, `description`, `text_index`, `active`, `active_index`) VALUES
(1, 'Paleta merkury', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 4, 1, 0),
(2, 'Paleta wenus', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, 1, 4),
(3, 'Paleta ziemia', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 2, 1, 0),
(4, 'Paleta mars', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, 1, 2),
(5, 'Paleta jowisz', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, 1, 0),
(6, 'Paleta saturn', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, 1, 2),
(7, 'Paleta uran', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 2, 1, 0),
(8, 'Paleta neptun', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, 1, 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `slide`
--
ALTER TABLE `slide`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `slide`
--
ALTER TABLE `slide`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
