-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Gru 2021, 10:30
-- Wersja serwera: 10.1.37-MariaDB
-- Wersja PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `todolista`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `deadline`
--

CREATE TABLE `deadline` (
  `id` int(11) NOT NULL,
  `rodzaj` varchar(20) COLLATE utf8_polish_ci NOT NULL,
  `tresc` varchar(150) COLLATE utf8_polish_ci NOT NULL,
  `dzien` int(11) NOT NULL,
  `miesiac` int(11) NOT NULL,
  `rok` int(11) NOT NULL,
  `godziny` int(11) NOT NULL,
  `minuty` int(11) NOT NULL,
  `czas_UNIX` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `deadline`
--

INSERT INTO `deadline` (`id`, `rodzaj`, `tresc`, `dzien`, `miesiac`, `rok`, `godziny`, `minuty`, `czas_UNIX`) VALUES
(1, 'Praca', 'Raport dla Krzysia', 3, 1, 2022, 10, 25, 1641201900000),
(2, 'Nauka', 'Nauka C++', 3, 5, 2022, 15, 0, 1651582800000),
(3, 'Praca', 'Zamknięcie ksiąg rachunkowych', 10, 12, 2021, 13, 46, 1639140374000);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `deadline`
--
ALTER TABLE `deadline`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `deadline`
--
ALTER TABLE `deadline`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
