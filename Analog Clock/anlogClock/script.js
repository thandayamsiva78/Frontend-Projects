document.addEventListener("DOMContentLoaded" , function(){
    const hours = document.querySelector(".hour");
    const minutes = document.querySelector(".minute");
    const seconds = document.querySelector(".second");

    function setTime(){
        let now = new Date();
        const hoursHand = now.getHours();
        const minutesHand  = now.getMinutes();
        const secondsHand = now.getSeconds();

        const hoursHandInDegrees = (hoursHand /12)*360;
        const minutesHandInDegrees = (minutesHand / 60)*360;
        const secondsHandInDegree = (secondsHand / 60)*360;

        hours.style.transform = "rotate(" + hoursHandInDegrees + "deg)";
        minutes.style.transform = "rotate(" + minutesHandInDegrees + "deg)";
        seconds.style.transform = "rotate(" + secondsHandInDegree + "deg)";

        setInterval(setTime , 1000);

    }
    setTime();
    
})