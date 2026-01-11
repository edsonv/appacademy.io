-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys=ON;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE musicians (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER NOT NULL,
  FOREIGN KEY (band_id) REFERENCES bands(id)
);

CREATE TABLE instruments (
  id INTEGER PRIMARY KEY,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE musicians_instruments (
  musician_id INTEGER NOT NULL,
  instrument_id INTEGER NOT NULL,
  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);