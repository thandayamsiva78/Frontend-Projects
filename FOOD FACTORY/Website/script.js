// Mobile NavBAr :-

const navBar = document.querySelector(".navabar");
const mobileNavbar = document.querySelector(".mobileNavbar");
const menubtn = document.querySelector(".menu");
const closebtn = document.querySelector(".close");

    menubtn.addEventListener('click' , function(){
        mobileNavbar.style.display = "block"
    })

    closebtn.addEventListener("click" , function(){  
        mobileNavbar.style.display = "none"
            
    })



