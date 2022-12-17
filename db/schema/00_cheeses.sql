-- Drop and recreate cheeses table

DROP TABLE IF EXISTS cheeses CASCADE;
CREATE TABLE cheeses (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  origin VARCHAR(50) NOT NULL
);
