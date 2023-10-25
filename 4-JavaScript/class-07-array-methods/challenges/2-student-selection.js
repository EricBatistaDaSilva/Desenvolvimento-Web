const students = [
    { name: "Adriele", grades: [7, 7, 6], absences: 3 },
    { name: "Gustavo", grades: [6, 8, 7], absences: 4 },
    { name: "Matheus", grades: [9, 8, 10], absences: 6 },
    { name: "Emerson", grades: [9], absences: 2 },
    { name: "Vivian", grades: [8, 7, 5], absences: 5 },
    { name: "Petterson", grades: [6, 5, 10], absences: 9 },
    { name: "Yasmin", grades: [5, 8, 9], absences: 8 },
    { name: "Karol", grades: [4, 9, 5, 4], absences: 7 },
];

const studentsAverage = students.map((student) => {
    const average = student.grades.reduce((a, b) => a + b) / student.grades.length
    return {
        name: student.name,
        average: average,
        absences: student.absences,
    };
});

const selectedStudents = studentsAverage.filter((student) => student.average >= 7 && student.absences < 5
);

console.table(studentsAverage)
console.table(selectedStudents)