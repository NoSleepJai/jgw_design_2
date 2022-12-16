const timeHTML = document.getElementById("time");
const dateHTML = document.getElementById("date");

function updateTimeAndDate() {
    let now = new Date();
    timeHTML.innerText = now.toLocaleTimeString('en-US', { 
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit'
    }).toLowerCase().replaceAll(':', ' ') + " EST";

    dateHTML.innerText = now.toLocaleDateString('en-US', { 
        timeZone: 'America/New_York'
    }).toLowerCase().replaceAll('/', ' ');
}

updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);
