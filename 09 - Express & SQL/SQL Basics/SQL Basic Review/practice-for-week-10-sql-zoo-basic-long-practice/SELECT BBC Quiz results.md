# 1. Select the code which gives the name of countries beginning with U

**Answer:**

```sql
  SELECT name
    FROM world
    WHERE name LIKE 'U%'
```

# 2. Select the code which shows just the population of United Kingdom?

**Answer:**

```sql
  SELECT population
    FROM world
    WHERE name = 'United Kingdom'
```

# 3. Select the answer which shows the problem with this SQL code - the intended result should be the continent of France:

```sql
  SELECT continent
    FROM world
    WHERE 'name' = 'France'
```

**Answer:**

`'name' should be name`

# 4. Select the result that would be obtained from the following code:

```sql
  SELECT name, population / 10
    FROM world
    WHERE population < 10000
```

**Answer:**

|       |     |
| ----- | --- |
| Nauru | 990 |

# 5. Select the code which would reveal the name and population of countries in Europe and Asia

**Answer:**

```sql
  SELECT name, population
    FROM world
    WHERE continent IN ('Europe', 'Asia')
```

# 6. Select the code which would give two rows

**Answer:**

```sql
  SELECT name FROM world
    WHERE name IN ('Cuba', 'Togo')
```

# 7. Select the result that would be obtained from this code:

```sql
  SELECT name FROM world
    WHERE continent = 'South America'
    AND population > 40000000
```

**Answer:**

|          |
| -------- |
| Brazil   |
| Colombia |
