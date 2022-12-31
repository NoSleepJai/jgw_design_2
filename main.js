const timeHTML = document.getElementById("time");
const dateHTML = document.getElementById("date");

const bothColumns = document.querySelectorAll(".row[data-status]");
const secondColumn = document.querySelectorAll(".row[data-status]");
const thirdColumn = document.querySelectorAll(".row[data-status]");



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
var previousRow;

bothColumns.forEach((row) => {
    row.addEventListener("click", () => {
        // if(row.getAttribute('data-status') == 'collapsed') {
        //     row.setAttribute('data-status', 'open');
        // } 
        // else if(row.getAttribute('data-status') == 'open'){
        //     row.setAttribute('data-status', 'neutral');
        // }
        // else {
        //     row.setAttribute('data-status', 'open');
        // }
        previousRow = row;
        console.log(previousRow);
    })
})



updateTime();
updateTheme();

setInterval(updateTime, 1000);

