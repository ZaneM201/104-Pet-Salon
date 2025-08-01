console.log("Pet Salon");
let pet1={
    name: "Milo", 
    age: 4,
    gender: "Male",
    service: "The works",
    breed: "Australian Shepard",
};
let pet2={
    name: "Maple", 
    age: 4,
    gender: "Female",
    service: "Nail Trim",
    breed: "Greayhound mix",
};
let pet3={
    name: "Tye", 
    age: 16,
    gender: "Male",
    service: "Nail Trim",
    breed: "Border Colie mix"
};
let pets = [pet1, pet2, pet3];
/* Names */
const maxPets = pets.length;
const petNames = pets.map(pets => pets.name);
document.getElementById("petNames").innerHTML = petNames;
/* Registered */
document.getElementById("petSum").innerHTML = pets.length;
/* Average Age */
const petAge = pets.map(pets => pets.age);
const sum = petAge.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const averageAge = sum / petAge.length;
console.log("The average age is: ", averageAge);