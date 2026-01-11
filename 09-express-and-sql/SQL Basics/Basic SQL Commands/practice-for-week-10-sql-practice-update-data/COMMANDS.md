```sql
UPDATE friends
SET last_name = "Blue"
WHERE first_name = "Ryan" AND last_name = "Pond";

UPDATE friends
SET last_name = 'Smith'
WHERE first_name = 'Tyler'
  AND last_name = 'Rose';

UPDATE friends
SET last_name = 'Smith'
WHERE first_name = 'Sky'
  AND last_name = 'Tyler';
```
