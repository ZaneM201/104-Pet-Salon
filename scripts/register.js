const petRegistrationForm = document.getElementById("petRegistrationForm");

let pet=[];

function displayAllPets(){
    pet.forEach(petObj =>{
        displayRow(petObj);
    });
}

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

displayAllPets();
document.getElementById("petsRegistered").innerHTML = pet.length;

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
    document.getElementById("petsRegistered").innerHTML = pet.length;
}

function displayRow(petObj){
    const table = document.getElementById("petTable");
    const tableBody = table.tBodies[0];

    const newRow = document.createElement("tr");

    const name = document.createElement("td");
    const age = document.createElement("td");
    const gender = document.createElement("td");
    const breed = document.createElement("td");
    const service = document.createElement("td");
    const action = document.createElement("td");

    name.textContent = petObj.name;
    age.textContent = petObj.age;
    gender.textContent = petObj.gender;
    breed.textContent = petObj.breed;
    service.textContent = petObj.service;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', function() {
        const petIndex = pet.findIndex(p => p === petObj);
        if (petIndex > -1) {
            pet.splice(petIndex, 1);
        }
        newRow.remove();
        document.getElementById("petsRegistered").innerHTML = pet.length;
    });
    action.appendChild(deleteBtn);
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm");

    newRow.appendChild(name);
    newRow.appendChild(age);
    newRow.appendChild(gender);
    newRow.appendChild(breed);
    newRow.appendChild(service);
    newRow.appendChild(action);

    tableBody.appendChild(newRow);
}
/* average Age */
const petAge = pet.map(pet => pet.age);
const sum = petAge.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const averageAge = sum / petAge.length;
console.log(`The average age is: ${averageAge}`);