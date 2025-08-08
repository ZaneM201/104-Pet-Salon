const requiredService=document.getElementById("requiredService");
const requiredDes=document.getElementById("requiredDes");
const requiredPrice=document.getElementById("requiredPrice");

if(requiredService.value===""){
    $("#requiredService").css("border", "solid 1px red");
}else{
    $("#requiredService").css("border","solid 1px grey");
}

if(requiredDes.value===""){
    $("#requiredDes").css("border", "solid 1px red");
}else{
    $("#requiredDes").css("border","solid 1px grey");
}

if(requiredPrice.value===""){
    $("#requiredPrice").css("border", "solid 1px red");
}else{
    $("#requiredPrice").css("border","solid 1px grey");
}