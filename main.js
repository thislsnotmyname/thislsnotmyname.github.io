"use strict";
// Jeremy Meyers, 08/31/2024

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

function changeDateOnPortfolioFeature() {
    const portfolioFeature = document.querySelectorAll("span.updated-date")[0];
    const currentDate = new Date(document.lastModified).toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    portfolioFeature.textContent = currentDate;
}

function setMinWidthOnDetailsTags(vw) {
    let details = document.querySelectorAll("div > details");

    details.forEach(node => {
        if (vw >= 1024) {
            const openOrClose = (node.getAttribute("open") === null) ? "closed" : "open";

            if (openOrClose === "closed") node.setAttribute("open", '');
            node.style.flexBasis = `max(${node.clientWidth}px, 37.5%)`;
            if (openOrClose === "closed") node.removeAttribute("open");
        } else {
            node.style.removeProperty("flex-basis");
        }
    });
}

function replaceHyphens(vw) {
    let academicYears = document.querySelectorAll(".academic-year p");

    academicYears.forEach(node => {
        if (vw >= 1024) {
            node.textContent = node.textContent.replace("-", "|");
        } else {
            node.textContent = node.textContent.replace("|", "-");
        }
    });
}

window.addEventListener("resize", () => {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    replaceHyphens(vw);
    setMinWidthOnDetailsTags(vw);
});

window.addEventListener("load", () => {
    replaceHyphens(vw);
    setMinWidthOnDetailsTags(vw);
    changeDateOnPortfolioFeature();
});


