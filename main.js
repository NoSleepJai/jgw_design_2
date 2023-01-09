// const timeHTML = document.getElementById("time");
// const dateHTML = document.getElementById("date");

const allColumns = document.querySelectorAll(".row[data-status]");
const archiveImages = document.querySelector("#archive");

function updateTime() {
    let now = new Date();
    timeHTML.innerText = now.toString('en-US', { 
        timeZone: 'America/New_York'
    }).toString().replace("(Eastern Standard Time)", "");
}

function updateTheme() {
    let now = new Date();
    if (now.getHours() >= 18 || now.getHours() < 7) {
        document.body.setAttribute("data-theme", "night");

    } else {
        document.body.setAttribute("data-theme", "day");
    }
}

for (const row of allColumns.keys()) {
    allColumns[row].addEventListener("click", () => {
        if (row % 3 == 0) {
            if(allColumns[row].getAttribute('data-status') == 'open') {
                allColumns[row].setAttribute('data-status', 'neutral');
                allColumns[row + 1].setAttribute('data-status', 'neutral');
                allColumns[row + 2].setAttribute('data-status', 'neutral');
            } else {
                allColumns[row].setAttribute('data-status', 'open');
                allColumns[row + 1].setAttribute('data-status', 'collapsed');
                allColumns[row + 2].setAttribute('data-status', 'collapsed');
            }
        }
        else if (row % 3 == 1) {
            if(allColumns[row].getAttribute('data-status') == 'open') {
                allColumns[row].setAttribute('data-status', 'neutral');
                allColumns[row - 1].setAttribute('data-status', 'neutral');
                allColumns[row + 1].setAttribute('data-status', 'neutral');
            } else {
                allColumns[row].setAttribute('data-status', 'open');
                allColumns[row - 1].setAttribute('data-status', 'collapsed');
                allColumns[row + 1].setAttribute('data-status', 'collapsed');
            }
        }
        else {
            if(allColumns[row].getAttribute('data-status') == 'open') {
                allColumns[row].setAttribute('data-status', 'neutral');
                allColumns[row - 1].setAttribute('data-status', 'neutral');
                allColumns[row - 2].setAttribute('data-status', 'neutral');
            } else {
                allColumns[row].setAttribute('data-status', 'open');
                allColumns[row - 1].setAttribute('data-status', 'collapsed');
                allColumns[row - 2].setAttribute('data-status', 'collapsed'); 
            }
        }
    });
}
let imageIndex = 1;
function cycleImages() {
    imageIndex = imageIndex > 3 ? imageIndex = 1 : imageIndex;
    archiveImages.src=`/images/theArchive/${imageIndex}.png`
    imageIndex++;
}

// updateTime();
// updateTheme();
console.info("Created by Jai Grant-Williams\nhttps://jgw.design")
// setInterval(cycleImages, 700);

