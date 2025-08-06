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
for(i=0; i<pets.length; i++){
    let pet = pets[i];
    petNamesHTML += pets[i].name + "<br>";
}
document.getElementById("registeredNames").innerHTML = petNamesHTML;
/* Registered */
document.getElementById("petSum").innerHTML = pets.length;
/* Average Age */
const petAge = pets.map(pets => pets.age);
const sum = petAge.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const averageAge = sum / petAge.length;
console.log("The average age is: ", averageAge);