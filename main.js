const timeHTML = document.getElementById("time");
const dateHTML = document.getElementById("date");



function updateTime() {
    let now = new Date();
    timeHTML.innerText = now.toString('en-US', { 
        timeZone: 'America/New_York'
    }).toString().replace("(Eastern Standard Time)", "");
}



function updateTheme() {
    let now = new Date();
    if (now.getHours() >= 18 || now.getHours() < 7) {
        document.body.classList.add("night");
        document.body.classList.remove("day");
    } else {
        document.body.classList.add("day");
        document.body.classList.remove("night");
    }
}



var current;
function revealProject(nth, div) {
    let project = document.querySelector(`.flex-container--${div} .row:nth-of-type(${nth})`);
    let projectContent = document.querySelector(`.flex-container--${div} .row:nth-of-type(${nth}) .project-content`);
    let otherProject = document.querySelectorAll(`.flex-container--${div} .row:not(:nth-of-type(${nth}))`);
    let otherProjectContent = document.querySelectorAll(`.flex-container--${div} .row:not(:nth-of-type(${nth})) .project-content`);

    // check if project is already opened if it is collapse back to the original layout
    if (current == nth && project.style.height != "25%") {
        otherProject.forEach((e) => { e.style.height = "25%"; })
        project.style.height = "25%";
        // project.innerHTML = "(" + project.innerHTML + ")";
        projectContent.style.opacity = "0%";
    } else {
        otherProject.forEach((e) => { e.style.height = "21.6px"; })
        otherProjectContent.forEach((e) => { e.style.opacity = "0%"; })
        project.style.height = "75%";
        projectContent.style.opacity = "100%";
    }

    current = nth;
}




updateTime();
updateTheme();


setInterval(function() {
    updateTime();
}, 1000);

