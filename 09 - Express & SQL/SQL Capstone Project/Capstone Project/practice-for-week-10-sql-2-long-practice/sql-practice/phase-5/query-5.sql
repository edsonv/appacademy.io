-- Find names of the cats whose owners are both George Beatty and Melynda Abshire, or just George Beatty, or just Melynda Abshire
-- Your code here
SELECT cats.name FROM cat_owners
JOIN cats ON cat_owners.cat_id = cats.id
JOIN owners ON cat_owners.owner_id = owners.id
WHERE owners.first_name IN ("George", "Melynda") 
  AND owners.last_name IN ("Beatty", "Abshire")
GROUP BY cats.name;