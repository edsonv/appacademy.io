CREATE TABLE `people` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `birthday` date,
  `gender` char(1),
  `type` varchar(10) NOT NULL COMMENT '''adult'' or ''kid'''
);

CREATE TABLE `parents` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `occupation` varchar(100),
  `email` varchar(100),
  `phone_number` varchar(20)
);

CREATE TABLE `kids` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `alergies` text,
  `medical_notes` text
);

CREATE TABLE `relationship` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `parent_id` integer NOT NULL,
  `kid_id` integer NOT NULL,
  `relationship_type` varchar(20) NOT NULL COMMENT '''biological'', ''adoptive'', ''tutor'''
);

CREATE TABLE `schools` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(200),
  `phone_number` varchar(20),
  `principal` varchar(100)
);

CREATE TABLE `grades` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `level` varchar(50)
);

CREATE TABLE `teachers` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `school_id` integer NOT NULL,
  `especialty` varchar(100),
  `hiring_date` date
);

CREATE TABLE `enrollments` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `kid_id` integer NOT NULL,
  `school_id` integer NOT NULL,
  `grade_id` integer NOT NULL,
  `school_year` varchar(20) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `enrollment_date` date NOT NULL
);

CREATE TABLE `subject_teacher` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `teacher_id` integer NOT NULL,
  `kid_id` integer NOT NULL,
  `school_year` varchar(20) NOT NULL,
  `subject` varchar(100)
);

CREATE TABLE `manufacturers` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `country` varchar(50),
  `website` varchar(100),
  `contact` varchar(100)
);

CREATE TABLE `toys` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `manufacturer_id` integer NOT NULL,
  `age_range` varchar(50),
  `category` varchar(50),
  `price` decimal(10,2)
);

CREATE TABLE `toys_kids` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `toy_id` integer NOT NULL,
  `kid_id` integer NOT NULL,
  `purchase_date` date,
  `bought_by` integer,
  `status` varchar(50)
);

ALTER TABLE `parents` ADD FOREIGN KEY (`id`) REFERENCES `people` (`id`);

ALTER TABLE `kids` ADD FOREIGN KEY (`id`) REFERENCES `people` (`id`);

ALTER TABLE `teachers` ADD FOREIGN KEY (`id`) REFERENCES `people` (`id`);

ALTER TABLE `relationship` ADD FOREIGN KEY (`parent_id`) REFERENCES `parents` (`id`);

ALTER TABLE `relationship` ADD FOREIGN KEY (`kid_id`) REFERENCES `kids` (`id`);

ALTER TABLE `teachers` ADD FOREIGN KEY (`school_id`) REFERENCES `schools` (`id`);

ALTER TABLE `enrollments` ADD FOREIGN KEY (`kid_id`) REFERENCES `kids` (`id`);

ALTER TABLE `enrollments` ADD FOREIGN KEY (`school_id`) REFERENCES `schools` (`id`);

ALTER TABLE `enrollments` ADD FOREIGN KEY (`grade_id`) REFERENCES `grades` (`id`);

ALTER TABLE `subject_teacher` ADD FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`);

ALTER TABLE `subject_teacher` ADD FOREIGN KEY (`kid_id`) REFERENCES `kids` (`id`);

ALTER TABLE `toys` ADD FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturers` (`id`);

ALTER TABLE `toys_kids` ADD FOREIGN KEY (`id`) REFERENCES `toys` (`id`);

ALTER TABLE `toys_kids` ADD FOREIGN KEY (`kid_id`) REFERENCES `kids` (`id`);

ALTER TABLE `toys_kids` ADD FOREIGN KEY (`bought_by`) REFERENCES `parents` (`id`);
