CREATE TABLE `kids` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `age` integer
);

CREATE TABLE `toys` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `kid_id` integer
);

ALTER TABLE `toys` ADD FOREIGN KEY (`kid_id`) REFERENCES `kids` (`id`);
