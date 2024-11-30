document.addEventListener("DOMContentLoaded", function(){
    const hoursHand = document.querySelector(".hour");
    const minutesHand = document.querySelector(".minute");
    const secondsHand = document.querySelector(".second");

    function setTime(){
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hoursInDegrees = (hours / 12)* 360;
        const minutesInDegrees = (minutes / 60) * 360;
        const secondsInDegrees = (seconds / 60) * 360;

        hoursHand.style.transform = "rotate(" + hoursInDegrees + "deg)";
        minutesHand.style.transform = "rotate(" + minutesInDegrees + "deg)";
        secondsHand.style.transform = "rotate(" + secondsInDegrees + "deg)";
    } 

    // Update the clock every second
    setInterval(setTime, 1000);

    // Set the initial time immediately
    setTime();
});

