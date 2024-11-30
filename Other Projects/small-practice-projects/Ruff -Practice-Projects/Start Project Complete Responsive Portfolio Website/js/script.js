/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*==================== sticky navbar ====================*/

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};


/*==================== scroll reveal ====================*/


/*==================== typed js ====================*/


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
