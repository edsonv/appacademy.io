-- INTERMEDIATE Query 1: SELECT for attributes matching a pattern
-- Run the SQL command that returns the albums with titles that start with 'The'.
SELECT title FROM albums
WHERE title LIKE 'The%';

-- Don't worry if you don't complete these last few steps. If you don't finish, use these as extra practice over the weekend.

-- INTERMEDIATE Query 2: SELECT ordered data
-- Run the SQL command that returns the albums that have the two highest sales numbers.
SELECT title FROM albums
ORDER BY num_sold DESC
LIMIT 2;

-- ADVANCED Query 3: SELECT in the middle of ordered data
-- Run the SQL command that returns the next two highest sales numbers (only the third and fourth highest sales).
SELECT title FROM albums
ORDER BY num_sold DESC
LIMIT 2 OFFSET 2;
