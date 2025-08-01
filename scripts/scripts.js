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
    breed: "Border Colie mix",
};
let pets = [pet1, pet2, pet3];

/* Names */
let petNamesHTML = "";
for(i=0; i<pets.length; i++){
    let pet = pets[i];
    petNamesHTML += pets[i].name + "<br>";
}
document.getElementById("petNames").innerHTML = petNamesHTML;
/* Registered */
document.getElementById("petSum").innerHTML = pets.length;
/* Average Age */
const petAge = pets.map(pets => pets.age);
const sum = petAge.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const averageAge = sum / petAge.length;
console.log("The average age is: ", averageAge);