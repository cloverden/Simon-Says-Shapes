function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}

function savePlayerName() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        // Display player name on the scoreboard or save for future reference
        document.getElementById('scoreboard').innerHTML += `<p>${playerName}</p>`;
    }
}

// Example function to simulate mistakes and apply a red border
let mistakeCount = 0;
function trackMistakes() {
    mistakeCount++;
    if (mistakeCount === 2) {
        document.getElementById('gameScreen').classList.add('red-border');
    }
}


function savePlayerName() {
    const playerName = document.getElementById('playerName').value.trim();
    if (playerName) {
        const scoreTable = document.getElementById('scoreTable').getElementsByTagName('tbody')[0];
        let added = false;

        // Find the first empty row
        for (let row of scoreTable.rows) {
            if (row.cells[0].textContent === "-" || row.cells[0].textContent === "") {
                row.cells[0].innerHTML = `<a href="#">${playerName}</a>`;
                row.cells[1].textContent = "1"; // Initial round
                row.cells[2].textContent = "0"; // Initial score
                added = true;
                break;
            }
        }

        // Clear input field after adding the player
        if (added) document.getElementById('playerName').value = "";
    }
}
