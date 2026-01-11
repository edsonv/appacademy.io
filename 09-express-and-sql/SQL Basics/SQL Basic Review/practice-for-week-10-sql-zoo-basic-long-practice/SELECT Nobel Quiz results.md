# 1. Pick the code which shows the name of winner's names beginning with C and ending in n

**Answer:**

```sql
  SELECT winner FROM nobel
    WHERE winner LIKE 'C%' AND winner LIKE '%n'
```

# 2. Select the code that shows how many Chemistry awards were given between 1950 and 1960

**Answer:**

```sql
  SELECT COUNT(subject) FROM nobel
    WHERE subject = 'Chemistry'
    AND yr BETWEEN 1950 and 1960
```

# 3. Pick the code that shows the amount of years where no Medicine awards were given

**Answer:**

```sql
  SELECT COUNT(DISTINCT yr) FROM nobel
    WHERE yr NOT IN (SELECT DISTINCT yr FROM nobel WHERE subject = 'Medicine')
```

# 4. Select the result that would be obtained from the following code:

```sql
  SELECT subject, winner FROM nobel
    WHERE winner LIKE 'Sir%' AND yr LIKE '196%'
```

**Answer:**

|          |                             |
| -------- | --------------------------- |
| Medicine | Sir John Eccles             |
| Medicine | Sir Frank Macfarlane Burnet |

# 5. Select the code which would show the year when neither a Physics or Chemistry award was given

**Answer:**

```sql
  SELECT yr FROM nobel
    WHERE yr NOT IN(
      SELECT yr FROM nobel
        WHERE subject IN ('Chemistry','Physics')
    )
```

# 6. Select the code which shows the years when a Medicine award was given but no Peace or Literature award was

**Answer:**

```sql
  SELECT DISTINCT yr FROM nobel
    WHERE subject='Medicine'
    AND yr NOT IN(
      SELECT yr FROM nobel
        WHERE subject='Literature'
    )
    AND yr NOT IN (
      SELECT yr FROM nobel
        WHERE subject='Peace'
    )
```

# 7. Pick the result that would be obtained from the following code:

```sql
  SELECT subject, COUNT(subject) FROM nobel
    WHERE yr ='1960'
    GROUP BY subject
```

**Answer:**
|||
|---|---|
|Chemistry| 1|
|Literature| 1|
|Medicine| 2|
|Peace| 1|
|Physics| 1|
