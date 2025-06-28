-- Your code here
-- Dropping all existing tables and block errors when they don't exists
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS coffee_orders;

CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  phone INTEGER(10) UNIQUE,
  email VARCHAR(255) UNIQUE,
  points INTEGER DEFAULT 5,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE coffee_orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  is_redeemed BIT DEFAULT 0,
  ordered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(customer_id) REFERENCES customers(id)
);