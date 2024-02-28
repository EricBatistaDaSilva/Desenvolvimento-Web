CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    id_course INTEGER REFERENCES courses(id) ON DELETE CASCADE
);

DROP TABLE students;

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    workload INTEGER NOT NULL
);

DROP TABLE courses;

INSERT INTO students (name, email, id_course) VALUES
    ("Eric", "eric@gmail.com", 1),
    ("Luiza", "luiza@gmail.com", 2),
    ("Odilon", "odilon@gmail.com", 2);
    
INSERT INTO courses (name, workload) VALUES
    ("Web Development", 360),
    ("Data Analiysis", 240),
    ("Cyber Security", 240);
    
SELECT * FROM students;
SELECT * FROM courses;

-- INNER, RIGHT, LEFT, FULL
SELECT students.name AS nome, courses.name AS course 
FROM students
LEFT JOIN courses
ON students.id_course = courses.id
WHERE course IS NOT NULL;

DELETE FROM students WHERE id = 4;
DELETE FROM courses WHERE id = 2;