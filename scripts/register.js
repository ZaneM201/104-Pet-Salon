function Pet(name, age, gender, breed, service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

let inputName=document.getElementById("petName");
let inputAge=document.getElementById("pAge");
let inputGender=document.getElementById("petGender");
let inputBreed=document.getElementById("petBreed");
let inputService=document.getElementById("petService");

function register(){
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value,);
    pets.push(newPet);
    console.log(newPet);
    clearForm();
}

function clearForm(){
    document.getElementById("petName").value="";
    document.getElementById("pAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petService").value="";
}