-- Query 1: SELECT with a comparison operator
-- Run the SQL command that returns the albums that have sold at least 100,000 copies.
SELECT title FROM albums
WHERE num_sold >= 100000;

-- Query 2: SELECT matching a range of values
-- Run the SQL command that returns the albums released between 2018 and 2020.
SELECT title FROM albums
WHERE year BETWEEN 2018 AND 2020;

-- Query 3: SELECT for attributes matching a list of values
-- Run the SQL command that returns the albums with band_ids of either 1, 3, or 4.
SELECT title FROM albums
WHERE band_id IN (1,3,4);
