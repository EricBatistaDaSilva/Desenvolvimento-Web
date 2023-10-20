const studants = [
    { id: 1, name: "petterson", average: 6, birth: 2005 },
    { id: 2, name: "Emerson", average: 6, birth: 2002 },
    { id: 3, name: "Wendel", average: 5, birth: 1998 },
    { id: 4, name: "Yasmin", average: 9, birth: 2004 },
    { id: 5, name: "Adrih", average: 8, birth: 1992 },
    { id: 6, name: "Vivi", average: 7, birth: 1998 },
    { id: 7, name: "Vivi", average: 7, birth: 2000 },
    { id: 8, name: "Felipe", average: 7, birth: 2007 },
    { id: 9, name: "Leandra", average: 7, birth: 2009 },
  ];

  console.log(studants.find((value) => {
    return value.id === 6 || value.id === 5
  }));

  console.log(studants.find((value) => {
    return value.name === "Wendel" && value.name === "Yasmin"
  }));

  console.log(studants.find((value) => {
    return value.name === "Vivi" && value.birth > 1998
  }));

  console.log(studants.find(value => value.average >= 7));

  // Immutable
  console.log(studants.filter(value => value.average >= 7));

  const currentYear = new Date().getFullYear();
  console.log(currentYear);

  console.log(studants.filter((value) => currentYear - value.birth >= 18));

  console.log(studants);

const userName = prompt("Digite o nome:")

  console.log(studants.filter(value => value.name.includes(userName)));