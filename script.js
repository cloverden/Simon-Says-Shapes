// Function to add player data to the table
function addPlayerData(playerName, round, highScore) {
    const tableBody = document.getElementById('scoreTableBody'); // Reference to tbody

    const row = document.createElement('tr');
    const playerNameCell = document.createElement('td');
    const roundCell = document.createElement('td');
    const scoreCell = document.createElement('td');

    playerNameCell.textContent = playerName;
    roundCell.textContent = round;
    scoreCell.textContent = highScore;

    row.appendChild(playerNameCell);
    row.appendChild(roundCell);
    row.appendChild(scoreCell);

    tableBody.appendChild(row);
}

// Save player name to localStorage and display on the scoreboard
function savePlayerName() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        const round = '1'; // You can change this to reflect the actual round
        const highScore = '100'; // Replace with actual score
        addPlayerData(playerName, round, highScore);
        localStorage.setItem(playerName, JSON.stringify({ round, highScore }));
        document.getElementById('playerName').value = ''; // Clear input field after saving
    } else {
        alert("Please enter a player name.");
    }
}

// Function to load the stored data from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load data from localStorage (if available)
    const storedData = Object.keys(localStorage);

    storedData.forEach(playerName => {
        const { round, highScore } = JSON.parse(localStorage.getItem(playerName));
        addPlayerData(playerName, round, highScore);
    });
});
 