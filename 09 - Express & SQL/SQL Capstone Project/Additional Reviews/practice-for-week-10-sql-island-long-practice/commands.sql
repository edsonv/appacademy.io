SELECT * FROM inhabitant;

SELECT * FROM inhabitant
WHERE job = "butcher";

SELECT * FROM inhabitant
WHERE state = "friendly";

SELECT * FROM inhabitant
WHERE state = "friendly" AND job = "weaponsmith";

SELECT * FROM inhabitant
WHERE state = "friendly" AND job LIKE "%smith";

SELECT personId FROM inhabitant
WHERE name = "Stranger";

SELECT gold FROM inhabitant
WHERE name = "Stranger";

SELECT * FROM item
WHERE owner IS NULL;

UPDATE item
SET owner = 20
WHERE owner IS NULL;

SELECT * FROM item
WHERE owner = 20;

SELECT * FROM inhabitant
WHERE state = "friendly"
AND job IN ("merchant", "dealer");

UPDATE item
SET owner = 15
WHERE item IN ("ring", "teapot");

UPDATE inhabitant
SET name = "Real One"
WHERE name = "Stranger";

SELECT * FROM inhabitant
WHERE job = "baker"
ORDER BY gold DESC;

SELECT * FROM inhabitant
WHERE job = "pilot";

SELECT inhabitant.name FROM inhabitant
JOIN village ON chief = inhabitant.personId
WHERE village.name = "Onionville"

SELECT COUNT(*) FROM inhabitant
JOIN village ON inhabitant.villageId = village.villageId
WHERE inhabitant.gender ="f"
AND village.name = "Onionville";

SELECT inhabitant.name FROM inhabitant
JOIN village ON inhabitant.villageId = village.villageId
WHERE inhabitant.gender ="f"
AND village.name = "Onionville";

SELECT SUM(inhabitant.gold) FROM inhabitant
WHERE job IN ("baker", "dealer", "merchant");

SELECT state, AVG(inhabitant.gold) FROM inhabitant
GROUP BY state ORDER BY AVG(inhabitant.gold);

DELETE FROM inhabitant
WHERE state = "evil"

UPDATE inhabitant
SET state = "friendly"
WHERE job = "pilot"