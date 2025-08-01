console.log("Pet Salon");
let pet1{
    name: "Milo";
    age: 4;
    gender: "Male";
    service: "The works";
    breed: "Australian Shepard"
};
let pet2{
    name: "Maple";
    age: 4;
    gender: "Female";
    service: "Nail Trim";
    breed: "Greayhound mix";
};
let pet3{
    name: "Tye";
    age: 16;
    gender: "Male";
    service: "Nail Trim";
    breed: "Border Colie mix";
};
let pet=[pet1, pet2, pet3];
const maxPets = pet.length;
const petNames = pet.map(pet => pet.name);
document.getElementById("petSum").innerHTML = pet.length;
document.getElementById("petNames").innerHTML = petNames;
const petAge = pet.map(pet => pet.age);
const sum = petAge.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const averageAge = sum / petAge.length;
console.log("The average age is: ", averageAge);