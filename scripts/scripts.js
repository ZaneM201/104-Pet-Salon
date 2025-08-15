/* mode selection */
const html = document.getElementById("modeToggle");
const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
    if(checkbox.checked){
        console.log("Dark Mode Activate");
        modeToggle.setAttribute("data-bs-theme", "dark");
    }else{
        modeToggle.setAttribute("data-bs-theme", "light")
    }
});
/* header */
let salon={
    address: "123 Pet Street",
    email: "thepawspa@email.com",
    phone: "(123) 456-7890",
}

document.getElementById("address").innerHTML = salon.address;
document.getElementById("email").innerHTML = salon.email;
document.getElementById("phone").innerHTML = salon.phone;