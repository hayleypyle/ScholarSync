-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 18, 2024 at 06:47 PM
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
-- Database: `ScholarSync`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `uname` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `answer_bank`
--

CREATE TABLE `answer_bank` (
  `ID` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer` text NOT NULL,
  `uname` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `answer_bank`
--

INSERT INTO `answer_bank` (`ID`, `subcategory_id`, `question_id`, `answer`, `uname`, `created_at`) VALUES
(5, 1, 2, 'I used AI to make a rubric for a project in my class!', 'mrs_star', '2024-04-08 15:37:35'),
(6, 1, 4, 'Our district decided to do a half day. I think it was a smart decision!', 'mrs_star', '2024-04-08 16:37:06'),
(7, 1, 5, 'No definitely not! What is the curriculum I wonder? Is it a remedial course?', 'Mr_C', '2024-04-08 16:38:41'),
(8, 1, 2, 'I have used it to make an email template for me to copy and paste when a student is failing due to missing work.', 'Mr_C', '2024-04-08 16:42:24'),
(9, 2, 6, 'There\'s a great word wall resource on teachers pay teachers! Also math = love has some free options on her webpage. ', 'hayley', '2024-04-15 12:58:04'),
(10, 6, 8, 'I love gilmore girls!', 'mrs_star', '2024-04-15 12:57:56'),
(11, 3, 7, 'I have students put their phone in my \"phone jail\" on my desk. It\'s clear plastic tub. They get it back at the end of class. It has helped tremendously.  ', 'mrs_star', '2024-04-15 12:57:49'),
(12, 4, 9, 'John Hattie\'s Visible Learning findings showed homework was not helpful for elementary or middle school grades. It is helpful in high school grades, but it doesn\'t make a difference if it\'s 5 questions or 30, so it\'s better practice in my opinion to do shorter assignments. ', 'jenny', '2024-04-15 12:57:39'),
(14, 5, 10, 'I\'d recommend going to a job fair! I got a lot more job interviews that way. ', 'hayley', '2024-04-15 12:57:24'),
(15, 1, 5, 'We have a STEM elective, the students do a lot of labs and projects.', 'hayley', '2024-04-12 16:42:18'),
(16, 2, 11, 'I use planboard on chalk. I really like it because it\'s easy to edit and change lessons to new days, and you can reuse lessons from past years. ', 'LabVenturer', '2024-04-15 12:56:50'),
(18, 6, 8, 'I really love the office!', 'always_wright', '2024-04-18 15:06:32'),
(19, 6, 8, 'I enjoy bridgeton and grace and frankie.', 'always_wright', '2024-04-18 15:07:28'),
(20, 6, 8, 'I love Abbott elementary! I also enjoy Parks & Rec', 'always_wright', '2024-04-18 15:08:16'),
(21, 6, 8, 'The masked singer!', 'always_wright', '2024-04-18 15:08:26'),
(22, 6, 8, 'Anything true crime.', 'always_wright', '2024-04-18 15:08:56');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `ID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `uname` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question_bank`
--

CREATE TABLE `question_bank` (
  `ID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `uname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `question_bank`
--

INSERT INTO `question_bank` (`ID`, `title`, `content`, `subcategory_id`, `created_at`, `uname`) VALUES
(2, 'Do you use AI in your classroom? ', 'I make new quizzes for absent students using AI. Do you use it in your classroom?', 1, '2024-04-05 17:33:31', 'hayley'),
(4, 'What is your school doing for the solar eclipse? ', 'We got out for the day so students and teachers can experience the eclipse with their families. What about yours? ', 1, '2024-04-08 12:48:44', 'hayley'),
(5, 'Does your school offer \"STEM\" classes?', 'We have a new classes called STEM I, STEM II, and STEMIII. I\'ve never heard of this being a course before. Does your school have this? ', 1, '2024-04-08 16:36:25', 'mrs_star'),
(6, 'Where do you buy math classroom decor? ', '', 2, '2024-04-08 19:37:01', 'Mr_C'),
(7, 'How do you handle cellphone use in your classroom? ', 'Our school has a demerit system, so I give a demerit whenever I see a cell phone, but it doesn\'t seem to reduce cell phone use. What do you do in your classroom? ', 3, '2024-04-08 19:41:01', 'hayley'),
(8, 'What are some of your favorite TV shows? ', 'Do you like Abbott Elementary? I personally love The Good Place. ', 6, '2024-04-08 19:45:40', 'hayley'),
(9, 'Is homework still best practice? ', 'My students are telling me I\'m the only teacher they have that still assigns homework. A coworker told me studies show homework isn\'t helpful to assign anymore. What are your thoughts or findings? ', 4, '2024-04-08 20:02:02', 'mrs_star'),
(10, 'New teacher here, any tips for applying to jobs? ', 'Should I only apply online or go in person? Should I email their admin to let them know I applied? What did you do? ', 5, '2024-04-08 20:05:42', 'jenny'),
(11, 'Do you use an online lesson plan book? ', 'I am hoping to switch from a physical lesson plan book to a digital one. Do you have any recommendations?', 2, '2024-04-12 16:44:19', 'hayley'),
(12, 'What state do you teach in? Do you like it? ', 'I teach in Tennessee and it\'s okay, but I\'m curious what states are most popular to teach in!', 1, '2024-04-15 12:18:42', 'LabVenturer'),
(13, 'Student says they didn\'t cheat but I clearly caught them?', 'What do you say when a student insists they didn\'t cheat?', 3, '2024-04-15 15:21:24', 'LabVenturer'),
(14, 'Did you major in education when getting your bachelors degree?', '', 1, '2024-04-15 19:49:31', 'LabVenturer'),
(15, 'How long have you been teaching?', 'I\'ve been a teacher for 32 years! Wondering how long everyone else has been teaching for? ', 1, '2024-04-18 14:29:18', 'always_wright'),
(16, 'Do you teach phonics or sight words?', 'I\'m so glad we are going back to teaching phonics, but I am still being expected to teach sight words also. Do you teach one or the other, or both?', 1, '2024-04-18 14:31:49', 'always_wright'),
(17, 'What is your school\'s start and end time?', '7:45-2:45pm here. What about you all?', 1, '2024-04-18 15:03:54', 'always_wright'),
(24, 'Is it worth it to pursue a master\'s degree? ', '', 5, '2024-04-18 15:57:04', 'always_wright');

-- --------------------------------------------------------

--
-- Table structure for table `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `subcategories`
--

INSERT INTO `subcategories` (`id`, `name`) VALUES
(1, 'general chat'),
(2, 'resources'),
(3, 'classroom management'),
(4, 'pedagogy'),
(5, 'career advice'),
(6, 'misc');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `uname` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `fname`, `lname`, `uname`, `email`, `password`) VALUES
(1, 'Hayley', 'Pyle', 'ha', 'hayley@email.com', 'ha'),
(2, 'Valerie', 'Stahr', 'mrs_star', 'stahr@email.com', 'password'),
(3, 'Kevin', 'Carroll', 'Mr_C', 'kevin@email.com', 'password'),
(4, 'Jenna', 'Tanguay', 'jenny', 'jenna@email.com', 'password'),
(5, 'Hayley', 'Stockwell', 'hay', 'hayley@hayley.com', 'password'),
(6, 'h', 'h', 'jenny', 'h@h.com', 'h'),
(7, 'V', 'S', 'h', 'h@h.com', 'h'),
(8, 'h', 'h', 'h', 'h@h.com', 'h'),
(9, 'h', 'h', 'h', 'h@h.com', 'h'),
(10, 'Laura', 'Carpenter', 'llcarpenter', 'laura@email.com', 'Passw0rd!'),
(11, 'j', 'J', 'New', 'j@j.com', 'Passw0rd!'),
(12, 'Jamie', 'Casteel', 'LabVenturer', 'jamie@email.com', 'Passw0rd!'),
(13, 'Bonnie', 'Wright', 'always_wright', 'wright@email.com', '$argon2id$v=19$m=65536,t=3,p=4$ZNJhRlNz9BV1mb2FFbuyig$FdqyG0SILOKwUOuNpvRTpWrs1ZCnA5tvsNbtdrGcJy0'),
(14, 'Hayley', 'Pyle', 'hayley', 'hpyle@email.com', '$argon2id$v=19$m=65536,t=3,p=4$WgeafzAU08v0IvA39gb/VA$/PQ0ykMy9lGKJKwJTgY/lx5JcBfWkj+981Xm23hJ0Vc');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `answer_bank`
--
ALTER TABLE `answer_bank`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `subcategory_id` (`subcategory_id`);

--
-- Indexes for table `question_bank`
--
ALTER TABLE `question_bank`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer_bank`
--
ALTER TABLE `answer_bank`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question_bank`
--
ALTER TABLE `question_bank`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`ID`),
  ADD CONSTRAINT `answers_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`),
  ADD CONSTRAINT `questions_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
