```sql
SELECT * FROM puppies;

SELECT name,age_yrs,weight_lbs FROM puppies;

SELECT name,age_yrs,weight_lbs FROM puppies
  WHERE id = 5;

SELECT name,age_yrs,weight_lbs FROM puppies
  WHERE microchipped = 1;

SELECT name,age_yrs,weight_lbs FROM puppies
  WHERE weight_lbs > 25;

SELECT * FROM puppies
  WHERE weight_lbs > 25
  AND microchipped = 1;
```
