/* mode selection */
const html = document.getElementById("modeToggle");
const checkbox = document.getElementById("checkbox")
const themeValue = $("#modeToggle").value;

checkbox.addEventListener("change", () => {
    if(checkbox.checked){
        modeToggle.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", themeValue);
    }else{
        modeToggle.setAttribute("data-bs-theme", "light")
        localStorage.setItem("theme", themeValue);
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