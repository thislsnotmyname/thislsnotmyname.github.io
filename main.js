"use strict";
// Jeremy Meyers, 08/29/2024

function changeDateOnPortfolioFeature() {
    const portfolioFeature = document.querySelectorAll("span.updated-date")[0];
    const currentDate = new Date(document.lastModified).toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    portfolioFeature.textContent = currentDate;
}

function replaceHyphens() {
    let academicYears = document.querySelectorAll(".academic-year p");
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
changeDateOnPortfolioFeature();

