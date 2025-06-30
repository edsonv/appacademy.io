-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.
-- Your code here
SELECT title, bands.name FROM albums
JOIN bands ON albums.band_id = bands.id;