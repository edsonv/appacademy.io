DROP TABLE IF EXISTS friends;

CREATE TABLE friends (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

INSERT INTO friends (first_name, last_name)
  VALUES
    ("Amy", "Pond");

SELECT * FROM friends;

INSERT INTO friends (first_name, last_name)
  VALUES
    ("Rose", "Tyler"),
    ("Martha", "Jones"),
    ("Donna", "Noble"),
    ("River", "Song");

SELECT * FROM friends;

INSERT INTO friends (first_name, last_name)
  VALUES
    ("Jenny", "Who");

SELECT * FROM friends;