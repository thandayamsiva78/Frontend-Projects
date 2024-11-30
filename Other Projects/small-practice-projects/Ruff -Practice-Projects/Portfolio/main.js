document.addEventListener("DOMContentLoaded" , function(){
    const menubtn = document.getElementsByClassName("menuToggle")[0];
    const closebtn = document.getElementsByClassName("closeToggle")[0];

    menubtn.addEventListener("click" , function(){
        const navMobileView = document.getElementsByClassName("navMobileView")[0];
        navMobileView.style.display = "Block";
        menubtn.style.display = "none";
        closebtn.style.display = "Block";
    })

    closebtn.addEventListener("click" ,function(){
        const navMobileView = document.getElementsByClassName("navMobileView")[0];
        navMobileView.style.display = "none";
        menubtn.style.display = "Block";
    })
})




const phrases = ["Web Developer", "Content Creater", "Designer"];
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
