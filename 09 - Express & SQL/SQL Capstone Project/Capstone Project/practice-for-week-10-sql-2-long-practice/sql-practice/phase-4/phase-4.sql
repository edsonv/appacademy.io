PRAGMA foreign_keys=ON; -- Turns foreign key support in SQLite3 on
-- Your code here
DROP TABLE IF EXISTS toys;
DROP TABLE IF EXISTS cat_owners;
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);

CREATE TABLE cats (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  birth_year INTEGER
);

CREATE TABLE cat_owners (
  cat_id INTEGER,
  owner_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE,
  FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE CASCADE
);

CREATE TABLE toys (
  id INTEGER PRIMARY KEY,
  name TEXT,
  cat_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
);

INSERT INTO owners
  (first_name, last_name)
VALUES
  ('Nathan', 'Shanahan'),
  ('Joycelyn', 'Cummerata'),
  ('Weston', 'Jones'),
  ('Melynda', 'Abshire'),
  ('George', 'Beatty'),
  ('Jonathan', 'Arbuckle'),
  ('Hermione', 'Granger');

INSERT INTO cats
  (name, birth_year)
VALUES
  ('Smudge', 2014),
  ('Molly', 2015),
  ('Lucky', 2016),
  ('Bella', 2020),
  ('Tiger', 2012),
  ('Oscar', 2010),
  ('Garfield', 2009),
  ('Crookshanks', 2017);

INSERT INTO cat_owners
  (cat_id, owner_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 3),
  (4, 4),
  (5, 4),
  (5, 5),
  (7, 6),
  (8, 7);

INSERT INTO toys
  (cat_id, name)
VALUES
  (1, 'Catnip Mouse'),
  (2, 'Feather Wand'),
  (2, 'Scratcher'),
  (2, 'Laser Pointer'),
  (3, 'Chew Toy'),
  (4, 'Tunnel'),
  (4, 'Flopping Fish'),
  (5, 'Crinkle Ball'),
  (7, 'Cheetos'),
  (8, 'Yarn');

DELETE FROM cats
WHERE cats.name = 'Smudge';