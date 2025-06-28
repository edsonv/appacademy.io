-- Your code here
-- 1. Register new user.
INSERT INTO customers (name,phone)
  VALUES
    ("Rachel", 1111111111);

-- 2. Customer purchases a coffee.
SELECT id,name,points FROM customers
  WHERE name = "Rachel";

UPDATE customers
  SET points = 6
  WHERE name = "Rachel";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (1,1);

-- 3. Register two new users.
INSERT INTO customers (name,phone,email)
  VALUES
    ("Monica", 2222222222, "monica@friends.show"),
    ("Phoebe", 3333333333, "phoebe@friends.show");

-- 4. Phoebe purchases three coffees.
SELECT id,name,points FROM customers
  WHERE name = "Phoebe";

UPDATE customers
  SET points = 8
  WHERE name = "Phoebe";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (3,3);

-- 5. Rachel and Monica each purchase four coffees.
SELECT id,name,points FROM customers
  WHERE name = "Rachel";

UPDATE customers
  SET points = 10
  WHERE name = "Rachel";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (1,4);

SELECT id,name,points FROM customers
  WHERE name = "Monica";

UPDATE customers
  SET points = 9
  WHERE name = "Monica";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (2,4);

-- 6. Monica wants to know her new point total.
SELECT id,points FROM customers
  WHERE name = "Monica";

-- 7. Rachel wants to check her total points.
-- Redeem her points for a coffee if she has enough points.
-- If she doesn't, she wants to purchase a coffee.
SELECT id,name,points FROM customers
  WHERE name = "Rachel";

UPDATE customers
  SET points = 0
  WHERE name = "Rachel";

INSERT INTO coffee_orders (customer_id,quantity,is_redeemed)
  VALUES
    (1,1,1);

-- 8. Register three new customers.
INSERT INTO customers (name,email)
  VALUES
    ("Joey", "joey@friends.show"),
    ("Chandler", "chandler@friends.show"),
    ("Ross", "ross@friends.show");

-- 9. Ross purchases six coffees.
SELECT id,name,points FROM customers
  WHERE name = "Ross";

UPDATE customers
  SET points = 11
  WHERE name = "Ross";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (6,6);

-- 10. Monica purchase three coffees.
SELECT id,name,points FROM customers
  WHERE name = "Monica";

UPDATE customers
  SET points = 12
  WHERE name = "Monica";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (2,3);

-- 11. Phoebe wants to check her total points.
-- Redeem her points for a coffee if she has enough points.
-- If she doesn't, she wants to purchase a coffee.
SELECT id,name,points FROM customers
  WHERE name = "Phoebe";

UPDATE customers
  SET points = 9
  WHERE name = "Phoebe";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (3,1);

-- 12. Ross demands a refund for the last two coffees that he ordered.
-- (Make sure you delete Ross's coffee orders and not anyone else's.
-- Update his points to reflect the returned purchases.)
SELECT id FROM customers
  WHERE name = "Ross"; -- id=6

SELECT * FROM coffee_orders
  WHERE customer_id = 6;

UPDATE coffee_orders
  SET quantity = 4
  WHERE customer_id = 6;

SELECT id,name,points FROM customers
  WHERE name = "Ross";

UPDATE customers
  SET points = 9
  WHERE id = 6;

-- 13. Joey purchases two coffees.
SELECT id,name,points FROM customers
  WHERE name = "Joey";

UPDATE customers
  SET points = 7
  WHERE name = "Joey";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (4,2);

-- 14. Monica wants to check her total points.
-- Redeem her points for a coffee if she has enough points.
-- If she doesn't, she wants to purchase a coffee.
SELECT id,name,points FROM customers
  WHERE name = "Monica";

UPDATE customers
  SET points = 2
  WHERE name = "Monica";

INSERT INTO coffee_orders (customer_id,quantity,is_redeemed)
  VALUES
    (2,1,1);

-- 15. Chandler wants to delete his loyalty program account.
DELETE FROM customers
  WHERE name = "Chandler";

-- 16. Ross wants to check his total points.
-- Redeem his points for a coffee if he has enough points.
-- If he doesn't, he wants to purchase a coffee.
SELECT id,name,points FROM customers
  WHERE name = "Ross";

UPDATE customers
  SET points = 10
  WHERE name = "Ross";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (6,1);

-- 17. Joey wants to check his total points.
-- Redeem his points for a coffee if he has enough points.
-- If he doesn't, he wants to purchase a coffee.
SELECT id,name,points FROM customers
  WHERE name = "Joey";

UPDATE customers
  SET points = 8
  WHERE name = "Joey";

INSERT INTO coffee_orders (customer_id,quantity)
  VALUES
    (4,1);

-- 18. Phoebe wants to change her email to p_as_in_phoebe@friends.show.
UPDATE customers
  SET email = "p_as_in_phoebe@friends.show"
  WHERE name = "Phoebe";


-- VERIFICATION
-- SELECT * FROM customers;
-- SELECT * FROM coffee_orders;
