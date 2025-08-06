const petRegistrationForm = document.getElementById("petRegistrationForm");

let pet=[];

function Pet(name, age, gender, breed, service){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.breed = breed,
    this.service = service
}

const pet1=new Pet("Milo", 4, "Male", "Dog", "The Works");
const pet2=new Pet("Maple", 4, "Female", "Dog", "Bath & Flee");
const pet3=new Pet("Tye", 16, "Male", "Dog", "Nail Trim");
pet.push(pet1);
pet.push(pet2);
pet.push(pet3);

function registerPet(event){
    event.preventDefault();
    console.log("Register Pet Function");
    const name = petRegistrationForm.elements["petName"].value;
    const age = petRegistrationForm.elements["petAge"].value;
    const gender = petRegistrationForm.elements["petGender"].value;
    const breed = petRegistrationForm.elements["petBreed"].value;
    const service = petRegistrationForm.elements["petService"].value;
    
    const newPet = new Pet(name, age, gender, breed, service);
    pet.push(newPet);
    displayRow(newPet);
    petRegistrationForm.reset();
    console.log(pet);
}
function deletePet(pet){
    document.getElementById(pet)
}

function displayRow(pet){
    const table = document.getElementById("petTable");
    const tableBody = table.tBodies[0];

    const newRow = document.createElement("tr");

    const name = document.createElement("td");
    const age = document.createElement("td");
    const gender = document.createElement("td");
    const breed = document.createElement("td");
    const service = document.createElement("td");

    name.textContent = pet.name;
    age.textContent = pet.age;
    gender.textContent = pet.gender;
    breed.textContent = pet.breed;
    service.textContent = pet.service;

    newRow.appendChild(name);
    newRow.appendChild(age);
    newRow.appendChild(gender);
    newRow.appendChild(breed);
    newRow.appendChild(service);

    tableBody.appendChild(newRow);
}