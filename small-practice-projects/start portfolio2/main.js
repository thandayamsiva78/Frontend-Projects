// Type Writer
const phrases = ["Web Devloper", "Content Creater", "Designer"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenPhrases = 1000;

const typingTextElement = document.getElementById("typing-text");

function typePhrase() {
  if (currentCharIndex < phrases[currentPhraseIndex].length) {
    typingTextElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typePhrase, typingSpeed);
  } else {
    setTimeout(erasePhrase, delayBetweenPhrases);
  }
}

function erasePhrase() {
  if (currentCharIndex > 0) {
    typingTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(erasePhrase, erasingSpeed);
  } else {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(typePhrase, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typingTextElement.classList.add("blinking-cursor");
  setTimeout(typePhrase, delayBetweenPhrases);
});



document.addEventListener("DOMContentLoaded" , function(){
    const menuToggle = document.getElementById("menuToggle");
    const closeToggle = document.getElementById("closeToggle");
    const navMobileView = document.getElementsByClassName("navMobileView")[0];
    
    menuToggle.addEventListener("click" , function(){
        navMobileView.style.display = "block";
        menuToggle.style.display = "none"
        closeToggle.style.display = "block";

    })

    closeToggle.addEventListener("click" ,function(){
        navMobileView.style.display = "none";
        closeToggle.style.display = "none"
        menuToggle.style.display = "block";

        
    })
         
})
