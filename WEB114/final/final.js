// Jeremy Meyers, 05/07/2024
"use strict";
// Variables
let humanWeapon = "";
let CPUWeapon = "";
let winner = "";

let winsHuman = 0;
let winsCPU = 0;
let ties = 0;

let humanChoiceTag = document.getElementsByClassName("human")[0];
let show = false;
let i = 0;

const winChart = {
    rock: "Scissors",
    rock2: "Lizard",

    paper: "Rock",
    paper2: "Spock",

    scissors: "Paper",
    scissors2: "Lizard",

    lizard: "Paper",
    lizard2: "Spock",

    spock: "Rock",
    spock2: "Scissors"
};
// Functions
let getHumanChoice = (weapon) => humanWeapon = (String(weapon.classList).charAt(0).toUpperCase() + String(weapon.classList).slice(1));

let getCPUChoice = () => {
    let weapon = Math.floor(Math.random() * 5);
    switch (weapon) {
        case 0:
            weapon = "Rock";
            break;
        case 1:
            weapon = "Paper";
            break;
        case 2:
            weapon = "Scissors";
            break;
        case 3:
            weapon = "Lizard";
            break;
        case 4:
            weapon = "Spock";
            break;
        default:
            weapon = "error";
            break;
    }

    CPUWeapon = weapon;
    return weapon;
};
function compareWeapons(player, cpu) {
    if (player === cpu) {
        winner = (`${player} ties ${cpu}.`);
        ties++;
    } else if (
        (player === "Rock" && (cpu === winChart.rock || cpu === winChart.rock2)) || 
        (player === "Paper" && (cpu === winChart.paper || cpu === winChart.paper2)) ||

        (player === "Scissors" && (cpu === winChart.scissors || cpu === winChart.scissors2)) ||
        (player === "Lizard" && (cpu === winChart.lizard || cpu === winChart.lizard2)) ||

        (player === "Spock" && (cpu === winChart.spock || cpu === winChart.spock2))
    ) {
        winner = (`Human wins! ${player} beats ${cpu}.`);
        winsHuman++;
    } else {
        winner = (`CPU wins! ${cpu} beats ${player}.`);
        winsCPU++;
    }
    return winner;
}
// Make the links a different color to match the colors of the weapons
for (let links in document.getElementsByTagName("A")) {
    if (i <= document.getElementsByTagName("A").length - 1) {
        document.getElementsByTagName("A")[i].classList.add(("link" + ((i % 5) + 1)));
    } else {
        break;
    }
    i++;
}
// Events
document.getElementsByClassName("buttons")[0].addEventListener(
    "click", function(e){
    if (e.target.tagName === "path" || e.target.tagName === "g") getHumanChoice(e.target);

    humanChoiceTag.textContent = humanWeapon;
    (humanWeapon === "") ? humanChoiceTag.hidden = true : humanChoiceTag.hidden = false;

    humanChoiceTag.classList.remove("rock", "paper", "scissors", "lizard", "spock");
    document.getElementsByClassName("lock")[0].classList.remove("rock", "paper", "scissors", "lizard", "spock");

    if (humanWeapon !== "") {
        humanChoiceTag.classList.toggle(humanWeapon.toLowerCase());
        document.getElementsByClassName("lock")[0].classList.toggle(humanWeapon.toLowerCase());
    }
});
document.getElementsByClassName("lock")[0].addEventListener(
    "click", function(e){
    if (e.target.tagName != "BUTTON") return;
    getCPUChoice();
});
document.getElementsByClassName("lock")[0].addEventListener(
    "click", function(e){
    if (humanWeapon !== undefined && humanWeapon !== "") {
        compareWeapons(humanWeapon, CPUWeapon);

        document.getElementsByClassName("results")[1].textContent = winner;
        document.getElementsByClassName("wins")[0].textContent = `Human: ${winsHuman}`;

        document.getElementsByClassName("wins")[1].textContent = `Tie: ${ties}`;
        document.getElementsByClassName("wins")[2].textContent = `CPU: ${winsCPU}`;
    }
});
document.getElementsByClassName("show")[0].addEventListener(
    "click", function() {
        if (show === false) {
            document.getElementsByClassName("buttons")[0].hidden = true;
            document.getElementsByClassName("rules")[0].hidden = false;

            show = true;
        } else {
            document.getElementsByClassName("rules")[0].hidden = true;
            document.getElementsByClassName("buttons")[0].hidden = false;

            show = false;
        }
});