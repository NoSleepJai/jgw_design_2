const timeHTML = document.getElementById("time");
const dateHTML = document.getElementById("date");


function updateTimeAndDate() {
    let now = new Date();
    timeHTML.innerText = now.toLocaleTimeString('en-US', { 
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit'
    }).toLowerCase().replace(':', ' ') + " EST";
    
    dateHTML.innerText = now.toLocaleDateString('en-US', { 
        timeZone: 'America/New_York'
    }).toLowerCase().replace(/\//g, ' ');
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
function revealProject(nth) {
    let project = document.querySelectorAll(`.flex-container--right .row:nth-of-type(${nth})`);
    let otherProject = document.querySelectorAll(`.flex-container--right .row:not(:nth-of-type(${nth}))`);
    // console.log(project);
    // console.log(otherProject);
    if (current == nth && project.item(0).style.height != "25%") {
        otherProject.forEach(
            function(e) {
                e.style.height = "25%";
            }
        )
        project.item(0).style.height = "25%";
    }
    else {
        otherProject.forEach(
            function(e) {
                e.style.height = "3.007%";
            }
        )
        project.item(0).style.height = "75%";
    }

    current = nth;

}

updateTimeAndDate();
updateTheme();

setInterval(function() {
    updateTimeAndDate();
}, 1000);

