-- Your code here
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS relationships;
DROP TABLE IF EXISTS performance_reviews;
DROP TABLE IF EXISTS office_parties;

CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  department VARCHAR(50) NOT NULL,
  role VARCHAR(50) NOT NULL
);

CREATE TABLE relationships (
  id INTEGER PRIMARY KEY,
  employee1_id INTEGER NOT NULL,
  employee2_id INTEGER NOT NULL,
  relationship_type VARCHAR(20) DEFAULT "romantic",
  FOREIGN KEY (employee1_id) REFERENCES employees(id),
  FOREIGN KEY (employee2_id) REFERENCES employees(id)
);

CREATE TABLE performance_reviews (
  id INTEGER PRIMARY KEY,
  employee_id INTEGER NOT NULL,
  reviewer_id INTEGER,
  score DECIMAL(3,1) NOT NULL,
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  FOREIGN KEY (reviewer_id) REFERENCES employees(id)
);

CREATE TABLE office_parties (
  id INTEGER PRIMARY KEY,
  budget DECIMAL (10,2) NOT NULL,
  location_type VARCHAR (10) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Envents 1-7 add employees
INSERT INTO employees (first_name, last_name, department, role)
  VALUES
    ("Michael", "Scott", "Management", "Regional Manager"),
    ("Dwight", "Schrute", "Sales", "Assistant Regional Manager"),
    ("Jim", "Halpert", "Sales", "Sales Representative"),
    ("Pam", "Beesly", "Reception", "Receptionist"),
    ("Kelly", "Kapoor", "Product Oversight", "Customer Service Representative"),
    ("Angela", "Martin", "Accounting", "Head of Accounting"),
    ("Roy", "Anderson", "Warehouse", "Warehouse Staff");

-- Event 8: "Roy Anderson" and "Pam Beesly" are in a romantic relationship.
INSERT INTO relationships (employee1_id, employee2_id)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Roy" AND last_name = "Anderson"),(SELECT id FROM employees WHERE first_name = "Pam" AND last_name = "Beesly"));

-- Event 9: "Ryan Howard" is hired in the "Reception" department as a "Temp" role.
INSERT INTO employees (first_name, last_name, department, role)
  VALUES
    ("Ryan", "Howard", "Reception", "Temp");

-- Event 10: An onsite office party is scheduled with a budget of $100.00.
INSERT INTO office_parties (budget, location_type)
  VALUES
    (100.00, "onsite");

-- Event 11: "Dwight Schrute" gets a performance review with a score of 3.3.
INSERT INTO performance_reviews (employee_id, score)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Dwight" AND last_name = "Schrute"), 3.3);

-- Event 12: "Jim Halpert" gets a performance review with a score of 4.2.
INSERT INTO performance_reviews (employee_id, score)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Jim" AND last_name = "Halpert"), 3.3);

-- Event 13: "Dwight Schrute"'s past performance review needs to be changed to a score of 9.0.
UPDATE performance_reviews
  SET score = 9.0
  WHERE employee_id = (SELECT id FROM employees WHERE first_name = "Dwight" AND last_name = "Schrute");

-- Event 14: "Jim Halpert"'s past performance review needs to be changed to a score of 9.3.
UPDATE performance_reviews
  SET score = 9.3
  WHERE employee_id = (SELECT id FROM employees WHERE first_name = "Jim" AND last_name = "Halpert");

-- Event 15: "Jim Halpert" is promoted to the role of "Assistant Regional Manager".
UPDATE employees
  SET role = "Assistant Regional Manager"
  WHERE first_name = "Jim" AND last_name = "Halpert";

-- Event 16: "Ryan Howard" is promoted to the "Sales" department as the role of "Sales Representative".
UPDATE employees
  SET role = "Sales Representative"
  WHERE first_name = "Ryan" AND last_name = "Howard";

-- Event 17: An onsite office party is scheduled with a budget of $200.00.
INSERT INTO office_parties (budget, location_type)
  VALUES
    (200.00, "onsite");

-- Event 18: "Angela Martin" and "Dwight Schrute" are in a romantic relationship.
INSERT INTO relationships (employee1_id, employee2_id)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Angela" AND last_name = "Martin"),(SELECT id FROM employees WHERE first_name = "Dwight" AND last_name = "Schrute"));

-- Event 19: "Angela Martin" gets a performance review score of 6.2.
INSERT INTO performance_reviews (employee_id, score)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Angela" AND last_name = "Martin"),6.2);

-- Event 20: "Ryan Howard" and "Kelly Kapoor" are in a romantic relationship.
INSERT INTO relationships (employee1_id, employee2_id)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Ryan" AND last_name = "Howard"),(SELECT id FROM employees WHERE first_name = "Kelly" AND last_name = "Kapoor"));

-- Event 21: An onsite office party is scheduled with a budget of $50.00.
INSERT INTO office_parties (budget, location_type)
  VALUES
    (50.00, "onsite");

-- Event 22: "Jim Halpert" moves to another office branch (make sure to remove his relationships and performance reviews if he has any).
DELETE FROM employees
  WHERE first_name = "Jim" AND last_name = "Halpert";

DELETE FROM relationships
  WHERE employee1_id = (SELECT id FROM employees WHERE first_name = "Jim" AND last_name = "Halpert")
  OR employee2_id = (SELECT id FROM employees WHERE first_name = "Jim" AND last_name = "Halpert");

DELETE FROM performance_reviews
  WHERE employee_id = (SELECT id FROM employees WHERE first_name = "Jim" AND last_name = "Halpert");

-- Event 23: "Roy Anderson" and "Pam Beesly" are NO LONGER in a romantic relationship.
DELETE FROM relationships
  WHERE employee1_id = (SELECT id FROM employees WHERE first_name = "Roy" AND last_name = "Anderson")
  OR employee1_id = (SELECT id FROM employees WHERE first_name = "Pam" AND last_name = "Beesly");
 
-- Event 24: "Pam Beesly" gets a performance review score of 7.6.
INSERT INTO performance_reviews (employee_id, score)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Pam" AND last_name = "Beesly"),7.6);

-- Event 25: "Dwight Schrute" gets another performance review score of 8.7.
INSERT INTO performance_reviews (employee_id, score)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Dwight" AND last_name = "Schrute"),8.7);

-- Event 26: "Ryan Howard" quits the office (make sure to remove his relationships and performance reviews if he has any).
DELETE FROM employees
  WHERE first_name = "Ryan" AND last_name = "Howard";

DELETE FROM relationships
  WHERE employee1_id = (SELECT id FROM employees WHERE first_name = "Ryan" AND last_name = "Howard")
  OR employee2_id = (SELECT id FROM employees WHERE first_name = "Ryan" AND last_name = "Howard");

DELETE FROM performance_reviews
  WHERE employee_id = (SELECT id FROM employees WHERE first_name = "Ryan" AND last_name = "Howard");

-- Event 27: "Jim Halpert" moves back to this office branch's "Sales" department in the role of "Sales Representative"
INSERT INTO employees (first_name, last_name, department, role)
  VALUES
    ("Jim", "Halpert", "Sales", "Sales Representative");

-- Event 28: "Karen Filippelli" moves from a different office into this office's "Sales" department in the role of "Sales Representative"
INSERT INTO employees (first_name, last_name, department, role)
  VALUES
    ("Karen", "Filippelli", "Sales", "Sales Representative");

-- Event 29: "Karen Filippelli" and "Jim Halpert" are in a romantic relationship.
INSERT INTO relationships (employee1_id, employee2_id)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Karen" AND last_name = "Filippelli"), (SELECT id FROM employees WHERE first_name = "Jim" AND last_name = "Halpert"));

-- Event 30: An onsite office party is scheduled with a budget of $120.00.
INSERT INTO office_parties (budget, location_type)
  VALUES
    (120.00, "onsite");

-- Event 31: The onsite office party scheduled right before this is canceled, and an offsite office party is scheduled instead with a budget of $300.00.
DELETE FROM office_parties
  WHERE created_at = (SELECT MAX(created_at) FROM office_parties);

INSERT INTO office_parties (budget, location_type)
  VALUES
    (300.00, "offsite");

-- Event 32: "Karen Filippelli" and "Jim Halpert" are NO LONGER in a romantic relationship.
DELETE FROM relationships
  WHERE employee1_id = (SELECT id FROM employees WHERE first_name = "Karen" AND last_name = "Filippelli")
  or employee2_id = (SELECT id FROM employees WHERE first_name = "Karen" AND last_name = "Filippelli");

--Event 33: "Pam Beesly" and "Jim Halpert" are in a romantic relationship.
INSERT INTO relationships (employee1_id, employee2_id)
  VALUES
    ((SELECT id FROM employees WHERE first_name = "Pam" AND last_name = "Beesly"), (SELECT id FROM employees WHERE first_name = "Jim" AND last_name = "Halpert"));