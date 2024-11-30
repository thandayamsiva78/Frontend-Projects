document.addEventListener("DOMContentLoaded", function () {
    const levels = document.querySelector(".levels");
    const popupBox = document.querySelector(".popup-box");
    const timerElement = document.querySelector("#timer");
    const attemptsElement = document.querySelector("#attempts");
    const startGameBtn = document.querySelector("#start");
    const cancel = document.querySelector("#cancel");
    const diffScore = document.querySelector(".diff-score");
    const difficulty = document.getElementById("difficulty");
    const container = document.getElementById("container");
    const goBackBtn = document.getElementById("goBackBtn");
    const scoreElement = document.getElementById("score");
    const homeBtn = document.getElementById("homeBtn");


    const level1 = ['A','B','C','D','A','B','C','D'];
    const level2 = ['A','B','C','D','E','F' ,'A','B','C','D','E','F'];
    const level3 = ['A','B','C','D','E','F','G','H','I','J','A','B','C','D','E','F','G','H','I','J'];
    const level4 = ['A','B','C','D','E','F','G','H','I','J','K','L','A','B','C','D','E','F','G','H','I','J',,'K','L'];
    const level5 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'];

    let selectedLevel = [];
    let attempts = 0;
    let time = 0;
    let flippedCards = [];
    let matchedCards = 0;
    let timer;
    let currentLevelId = "";
    let score = 0;

    levels.addEventListener("click", function (event) {
        if (event.target.id.startsWith("level")) {
            currentLevelId = event.target.id;
            switch (currentLevelId) {
                case "level1":
                    selectedLevel = [...level1];
                    break;
                case "level2":
                    selectedLevel = [...level2];
                    break;
                case "level3":
                    selectedLevel = [...level3];
                    break;
                case "level4":
                    selectedLevel = [...level4];
                    break;
                case "level5":
                    selectedLevel = [...level5];
                    break;
            }

            const savedData = JSON.parse(localStorage.getItem(currentLevelId));
            if (savedData) {
                attemptsElement.innerText = `Previous attempts: ${savedData.attempts}`;
                timerElement.innerText = `Previous time: ${savedData.time} S`;
            } else {
                attemptsElement.innerText = "Attempts: 0";
                timerElement.innerText = "Time: 0 S";
            }

            popupBox.style.display = "block";
            difficulty.innerText = currentLevelId;
        }
    });

    cancel.addEventListener("click", function () {
        popupBox.style.display = "none";
    });

    function createCards(selectedLevel) {
        container.innerHTML = "";
        for (let i = 0; i < selectedLevel.length; i++) {
            const card = document.createElement("div");
            card.classList.add("card");

            const cardInner = document.createElement("div");
            cardInner.classList.add("card-inner");

            const cardFront = document.createElement("div");
            cardFront.classList.add("card-front");
            cardFront.innerText = "";

            const cardBack = document.createElement("div");
            cardBack.classList.add("card-back");
            cardBack.innerText = selectedLevel[i];

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            card.addEventListener("click", flipCard);
            container.appendChild(card);
        }
    }

    startGameBtn.addEventListener("click", function () {
        levels.style.display = "none";
        popupBox.style.display = "none";
        diffScore.style.display = "block";
        diffScore.style.display = "flex";
        scoreElement.style.display = "block";
        goBackBtn.style.display = "block";
        homeBtn.style.display = "none";

        container.style.visibility = "visible";
        container.style.opacity = "1";

        shuffle(selectedLevel);
        createCards(selectedLevel);
        startTimer();
        attempts = 0;
        attemptsElement.innerText = "Attempts: " + attempts;
        score = 0; // Reset score to 0 at the start of the game
        scoreElement.innerText = `Score: ${score}`;
    });

    goBackBtn.addEventListener("click", function () {
        resetGame();
    });

    homeBtn.addEventListener("click" , function(){
        location.href = "../index.html"
    })

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("flip")) {
            this.classList.add("flip");
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 700);
            }
        }
    }

    function checkMatch() {
        const [firstCard, secondCard] = flippedCards;
        const firstValue = firstCard.querySelector(".card-back").innerText;
        const secondValue = secondCard.querySelector(".card-back").innerText;

        if (firstValue === secondValue) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            matchedCards += 2;

            score += 100; 
            scoreElement.innerText = `Score: ${score}`;

            if (matchedCards === selectedLevel.length) {
                clearInterval(timer);
                setTimeout(() => {
                    alert("Well Done!");
                    localStorage.setItem(currentLevelId, JSON.stringify({
                        attempts: attempts,
                        time: time,
                        score: score 
                    }));
                }, 500);
            }
        } else {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
        }
        flippedCards = [];
        attempts++;
        attemptsElement.innerText = "Attempts: " + attempts;
    }

    function startTimer() {
        time = 0;
        timerElement.innerText = "Time: " + time + " S";
        clearInterval(timer);
        timer = setInterval(() => {
            time++;
            timerElement.innerText = "Time: " + time + " S";
            // No score deduction on time now
        }, 1000);
    }

    function resetGame() {
        clearInterval(timer);
        matchedCards = 0;
        flippedCards = [];
        container.style.visibility = "hidden";
        container.style.opacity = "0";
        levels.style.display = "block";
        diffScore.style.display = "none";
        goBackBtn.style.display = "none";
        homeBtn.style.display = "block";
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
});

