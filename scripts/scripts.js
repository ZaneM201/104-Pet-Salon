console.log("Pet Salon");
/* Header */
let salon={
    address: "123 Pet Street",
    email: "thepawspa@email.com",
    phone: "(123) 456-7890",
}
document.getElementById("address").innerHTML = salon.address;
document.getElementById("email").innerHTML = salon.email;
document.getElementById("phone").innerHTML = salon.phone;

/* Names */
let petNamesHTML = "";
for(i=0; i<pet.length; i++){
    let pet = pet[i];
    petNamesHTML += pet[i].name + "<br>";
}
document.getElementById("registeredNames").innerHTML = petNamesHTML;
/* Registered */
document.getElementById("petSum").innerHTML = pet.length;
/* Average Age */
const petAge = pet.map(pet => pet.age);
const sum = petAge.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const averageAge = sum / petAge.length;
console.log("The average age is: ", averageAge);