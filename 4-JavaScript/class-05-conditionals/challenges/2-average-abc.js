function convertAverageToABC(average) {
    if (typeof average === "string") {
        average = Number(average.replace(",", "."));
    }


    if (average >= 90 && average <= 100) {
        return "A";
    } else if (average >= 80 && average < 90) {
        return "B";
    } else if (average >= 70 && average < 80) {
        return "C";
    } else if (average >= 60 && average < 70) {
        return "D";
    } else if (average >= 0 && average < 60) {
        return "F";
    } else {
        return "Média inválida!";
    }
}

const averageStudent = "95,7";
const averageStudentABC = convertAverageToABC(averageStudent);

switch (averageStudentABC) {
    case "A":
        console.log("Excelente, Aprovado com A!");
        break;
    case "B":
        console.log("Parabéns, aprovado com B!");
        break;
    case "C":
        console.log("Ficouna média, passou com C");
        break;
    case "D":
        console.log("Estude mais, reprovou com D");
        break;
    case "F":
        console.log("Reprovado F");
        break;

    default:
        break;
}