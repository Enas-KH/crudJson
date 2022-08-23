BEGIN;

DROP TABLE IF EXISTS Books, users;

CREATE TABLE users (
   id SERIAL PRIMARY KEY, 
  username VARCHAR(255) NOT NULL,
  age INTEGER,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  location VARCHAR(255)
);

CREATE TABLE Books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  Author VARCHAR(255) ,
  type TEXT,
  year integer
);

INSERT INTO Books (title, Author, type, year) VALUES
  ('Things Fall Apart' , 'Chinua Achebe', 'drama', 1958),
  ('Fairy tales' ,'Hans Christian Andersen' , 'imaginary', 1922),
  ( 'Pride and Prejudice','Jane Austen' , 'Romantic', 1936),
  ( 'The Divine Comedy', 'Dante Alighieri' , 'comedy',1972)
;

INSERT INTO users (username, age, first_name, last_name, location) VALUES
  ('Sery1976', 28, 'Alisha', 'Clayton', 'Middlehill, UK'),
  ('Notne1991', 36, 'Chelsea', 'Cross', 'Sunipol, UK'),
  ('Moull1990', 41, 'Skye', 'Hobbs', 'Wanlip, UK'),
  ('Spont1935', 72, 'Matthew', 'Griffin', 'Saxilby, UK')
;

COMMIT;