"use strict";
// Jeremy Meyers, 08/22/2024
			
const currentDate = new Date(); // Countdown to new semester
const nextSemester = new Date("August 26, 2024");
const season = (nextSemester.getMonth() === 7) ? "summer" : "winter";
const daysTill = Math.ceil((nextSemester - currentDate) / 86400000);

const messages = [
    "If you can read this, you're about <span id='countdown'>this many</span> days too early.", 
    "There won't be anything here for another <span id='countdown'>x amount of</span> days!", 
    "Holy time shenanigans! You'll have to wait another <span id='countdown'>x amount of</span> days to see anything here.", 
    `setTimeout(() => {<br>
        postNewContent();<br>
    }, <span id='countdown'>delay</span> days;`,
    "I'm sleeping, come back in <span id='countdown'>this many</span> days.",
    "♫ Wake me up in <span id='countdown'>this many</span> days ♫",
    `♫ There's <span id='countdown'>this many</span> more days of ${season} vacation, and school comes along just to end it ♫`,
    "[More content] comes to those who [wait <span id='countdown'>this many</span> more days] -Someone famous probably",
    `<span 
        id='countdown' 
        style='
            font-size: 5em; 
            text-align: center !important; 
            display: block; 
            text-shadow: 2px 2px 50px #999, 2px 2px 20px #FFFF77;
        '>
        this many
    </span>`,
    "Alright, this one is on me, there should have been content here <span id='countdown'>this many</span> days ago.",
    "Oh. Oh no, this isn't supposed to be blank! There was supposed to be content here <span id='countdown'>this many</span> days ago!",
    "Time travel <span id='countdown'>this many</span> days and perhaps something will appear here."
];

const beforeOrAfter = (daysTill > 0) ? Math.floor(Math.random() * 9) : Math.floor(Math.random() * 3) + 9
const message = messages[beforeOrAfter];
if (Math.abs(daysTill) === 1) message.replace("days", "day")
document.getElementById("message").innerHTML = message;
document.getElementById("countdown").textContent = `${daysTill}`;