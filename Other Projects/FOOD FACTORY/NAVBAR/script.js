const menu = document.getElementById("menuIcon");
const remove = document.getElementById("removeIcon");
const displayNavLinks = document.getElementById("navLinks");

menu.addEventListener("click" , function(){
    displayNavLinks.style.display = "block";
    menu.style.display = "none";
    remove.style.display = "block";

})

remove.addEventListener("click", function(){
    displayNavLinks.style.display = "none";
    menu.style.display = "block";
    remove.style.display = "none";


})