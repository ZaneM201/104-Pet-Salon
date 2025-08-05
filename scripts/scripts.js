console.log("Pet Salon");
/* Header */
let salon={
    name: "🐶 The Paw Spa 🐱",
    address: "123 Pet Street",
    email: "thepawspa@email.com",
    phone: "(123) 456-7890",
};
document.getElementById("salonName").innerHTML = salon.name;
document.getElementById("address").innerHTML = salon.address;
document.getElementById("email").innerHTML = salon.email;
document.getElementById("phone").innerHTML = salon.phone;
let pet1={
    name: "Milo", 
    age: 4,
    gender: "Male",
    service: "The works",
    breed: "Australian Shepherd",
    type: "Dog",
};
let pet2={
    name: "Maple", 
    age: 4,
    gender: "Female",
    service: "Nail Trim",
    breed: "Greayhound mix",
    type: "Dog",
};
let pet3={
    name: "Tye", 
    age: 16,
    gender: "Male",
    service: "Nail Trim",
    breed: "Border Colie mix",
    type: "Dog"
};
let pets = [pet1, pet2, pet3,];
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