-- Drop and recreate cheese_categories table

DROP TABLE IF EXISTS cheese_categories CASCADE;
CREATE TABLE cheese_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  cheese_id INTEGER REFERENCES cheeses(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);
