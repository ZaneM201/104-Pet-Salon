let services=[];
const requiredService=document.getElementById("requiredService");
const requiredDes=document.getElementById("requiredDes");
const requiredPrice=document.getElementById("requiredPrice");

const serviceRegistrationForm=document.getElementById("serviceRegistrationForm");

function Services(service, description, price){
    this.service=service,
    this.description=description,
    this.price=price
}
 
function serviceRegistration(){
    event.preventDefault();
    const service=serviceRegistrationForm.elements["requiredService"].value;
    const description=serviceRegistrationForm.elements["requiredDes"].value;
    const price=serviceRegistrationForm.elements["requiredPrice"].value;

    let isValid=true;

    if(requiredService.value===""){
        $("#requiredService").css("border", "solid 1px red");
        isValid=false;
    }else{
        $("#requiredService").css("border","solid 1px grey");
    }

    if(requiredDes.value===""){
        $("#requiredDes").css("border", "solid 1px red");
        isValid=false;
    }else{
        $("#requiredDes").css("border","solid 1px grey");
    }

    if(requiredPrice.value===""){
    $("#requiredPrice").css("border", "solid 1px red");
    isValid=false;
    }else{
    $("#requiredPrice").css("border","solid 1px grey");
    }

    if(!isValid){
        return;
    }
    const newService=new Services(service, description, price);
    services.push(newService);
    console.log(services);
    serviceRegistrationForm.reset(); 
}

$("#serviceSubmit").click(function(){
    serviceRegistration();
});