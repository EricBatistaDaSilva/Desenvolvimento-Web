-- DDL
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    age NUMERIC
);

DROP TABLE students;

-- DML
INSERT INTO students (name, age, city, cpf) VALUES
    ("Eric", 19, "123.123.122-80"),
    ("Luiza", 19, "123.133.122-97"),
    ("Odilon", 17, "123.143.122-94"),
    ("Edu", 16, "123.523.122-92"),
    ("Emanuel", 19, "123.163.122-88"),
    ("Mauricio", 19, "123.173.122-9"),
    ("Eduardo", 20, "123.183.122-70");
    
UPDATE students 
SET age = 19
WHERE id = 1;

UPDATE students 
SET age = 19
WHERE id = 5;

DELETE FROM students;
DELETE FROM students WHERE id = 4;

-- DQL
SELECT * FROM students;

SELECT name, age 
FROM students 
WHERE id = 7;

SELECT * FROM students
WHERE id = 6 OR id = 7;

SELECT * 
FROM students
WHERE age > 18 
ORDER BY age DESC;

-- DDL
ALTER TABLE students 
ADD COLUMN city TEXT 
NOT NULL DEFAULT "Jucás";

ALTER TABLE students 
DROP COLUMN city;

ALTER TABLE students 
RENAME COLUMN city TO test;

-- challenge DML
UPDATE students 
SET city = "Júcas";

UPDATE students SET city = "Saboeiro"
WHERE id = 2;
