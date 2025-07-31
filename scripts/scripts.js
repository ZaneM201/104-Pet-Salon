console.log("Pet Salon");
let pet=[{name: "Milo", age: 4, gender: "Male", service: "The Works", breed: "Australian Shepard"},{name: "Maple", age: 4, gender: "Female", service: "Nail Trim", breed: "Greyhound Mix"},{name: "Tye", age: 16, service: "Nail Trim", breed:" Border Collie"}];
const maxPets = pet.length;
const petNames = pet.map(pet => pet.name);
document.getElementById("petSum").innerHTML = pet.length;
document.getElementById("petNames").innerHTML = petNames;