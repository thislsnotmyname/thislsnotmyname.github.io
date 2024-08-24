"use strict";
// Jeremy Meyers, 08/22/2024

let academicYears = document.querySelectorAll(".academic-year p");

function replaceHyphens() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    academicYears.forEach(node => {
        if (vw >= 1024) {
            node.textContent = node.textContent.replace("-", "|");
        } else {
            node.textContent = node.textContent.replace("|", "-");
        }
    });
}

window.addEventListener("resize", replaceHyphens);
replaceHyphens();