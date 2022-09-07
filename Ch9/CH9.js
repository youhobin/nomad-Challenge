const clockTitle = document.querySelector(".js-clock");

function dDayChristmas () {
    const date = new Date();
    const chrisDate = new Date('2022-12-25 00:00:00');
    const dDayChris = chrisDate - date;

    const dDay = String(Math.floor(dDayChris/(24*60*60*1000))).padStart(2,'0');
    const dHour = String(Math.floor((dDayChris/(60*60*1000)) % 24)).padStart(2,'0');
    const dMin = String(Math.floor((dDayChris/(60*1000)) % 60)).padStart(2,'0');
    const dSec = String(Math.floor((dDayChris/(1000)) % 60)).padStart(2,'0');

    clockTitle.innerText = `D-Day : ${dDay}Day ${dHour}:${dMin}:${dSec}`
}

dDayChristmas();
setInterval(dDayChristmas,1000);
