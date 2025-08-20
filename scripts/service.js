let services=[];
const requiredService=document.getElementById("requiredService");
const requiredDes=document.getElementById("requiredDes");
const requiredPrice=document.getElementById("requiredPrice");

const serviceRegistrationForm=document.getElementById("serviceRegistrationForm");

const service1=new Services("The Works", "Your furry friend desrves the best! Full spa experience to let your pet relax to the fullest.", 80.00);
const service2=new Services("Bath & Flee", "Get your pet ready to fight the outdoors with our Bath and Flee treatment!", 25.00);
const service3=new Services("Nail Trim", "Does your pet make to much noise when walking on your floors? Well not any more after a nail trim.", 10.00);

services.push(service1);
services.push(service2);
services.push(service3);

console.log(services);

function Services(service, description, price){
    this.service = service,
    this.description = description,
    this.price = price
}
 
function serviceRegistration(){
    event.preventDefault();
    const service = serviceRegistrationForm.elements["requiredService"].value;
    const description = serviceRegistrationForm.elements["requiredDes"].value;
    const price = serviceRegistrationForm.elements["requiredPrice"].value;

    let isValid = true;

    if(requiredService.value === ""){
        $("#requiredService").css("border", "solid 1px red");
        isValid=false;
    }else{
        $("#requiredService").css("border","solid 1px grey");
    }

    if(requiredDes.value === ""){
        $("#requiredDes").css("border", "solid 1px red");
        isValid=false;
    }else{
        $("#requiredDes").css("border","solid 1px grey");
    }

    if(requiredPrice.value === ""){
    $("#requiredPrice").css("border", "solid 1px red");
    isValid=false;
    }else{
    $("#requiredPrice").css("border","solid 1px grey");
    }

    if(!isValid){
        return;
    }
    const newService = new Services(service, description, price);
    services.push(newService);
    console.log(services);
    serviceRegistrationForm.reset(); 
}

$("#serviceSubmit").click(function(){
    serviceRegistration();
});