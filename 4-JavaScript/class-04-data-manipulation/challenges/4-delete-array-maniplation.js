function deleteElementArray(element, array) {
    const index = array.indexOf(element);
    index != -1 ? array.splice(index, 1) : "";
    return array;
}
 
const techs = ["HTML", 10, "CSS", 20, "JavaScript", 30]

console.log(deleteElementArray("HTML", techs)); 