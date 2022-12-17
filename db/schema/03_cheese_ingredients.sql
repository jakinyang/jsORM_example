-- Drop and recreate cheese_ingredients table

DROP TABLE IF EXISTS cheese_ingredients CASCADE;
CREATE TABLE cheese_ingredients (
  id SERIAL PRIMARY KEY NOT NULL,
  cheese_id INTEGER REFERENCES cheeses(id) ON DELETE CASCADE,
  ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE
);
