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
