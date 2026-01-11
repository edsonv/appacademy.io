CREATE TABLE `colors` (
  `id` integer PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `music` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `type_of_work` varchar(255),
  `instrumental` bool,
  `composition_year` integer,
  `composer` varchar(255),
  `sample` blob
);

CREATE TABLE `occupations` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `value` integer,
  `significance` bool,
  `cuoc_code` integer
);

CREATE TABLE `timezones` (
  `id` integer PRIMARY KEY,
  `country_codes` varchar[],
  `tz_identifier` varchar(255),
  `embedded_comments` text,
  `type` varchar(255),
  `utc_offset` varchar(255),
  `tz_abbreviations` varchar(255)
);

CREATE TABLE `comments` (
  `id` integer PRIMARY KEY,
  `date` date,
  `comments` varchar(120),
  `user_id` integer
);
