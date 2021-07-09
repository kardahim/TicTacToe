const area = document.querySelectorAll(".area");

// Event Listener
for (var i = 0; i < area.length; i++) {
    area[i].addEventListener("click", game);
}

function game() {
    draw(this.id);
    winner(); z
}

function draw(id) {
    var cell = document.getElementById(id);
    if (cell.innerText === "") {
        if (changePlayer() === 1) {
            cell.innerText = "X";
        }
        else
            cell.innerText = "O";
    }
}

function changePlayer() {
    var player;
    var playerSpan = document.getElementById("player").innerText;

    if (playerSpan === "X") {
        player = 1;
        playerSpan = "O";
    }
    else {
        player = 0;
        playerSpan = "X";
    }
    document.getElementById("player").innerText = playerSpan;
    return player;
}

function winner() {
    var c0 = area[0].innerText;
    var c1 = area[1].innerText;
    var c2 = area[2].innerText;
    var c3 = area[3].innerText;
    var c4 = area[4].innerText;
    var c5 = area[5].innerText;
    var c6 = area[6].innerText;
    var c7 = area[7].innerText;
    var c8 = area[8].innerText;

    if (c0 === "X" && c1 === "X" && c2 === "X" || c3 === "X" && c4 === "X" && c5 === "X" || c6 === "X" && c7 === "X" && c8 === "X" || c0 === "X" && c3 === "X" && c6 === "X" || c1 === "X" && c4 === "X" && c7 === "X" || c2 === "X" && c5 === "X" && c8 === "X" || c0 === "X" && c4 === "X" && c8 === "X" || c2 === "X" && c4 === "X" && c6 === "X") {
        alert("X wins!");
    }
    else if (c0 === "O" && c1 === "O" && c2 === "O" || c3 === "O" && c4 === "O" && c5 === "O" || c6 === "O" && c7 === "O" && c8 === "O" || c0 === "O" && c3 === "O" && c6 === "O" || c1 === "O" && c4 === "O" && c7 === "O" || c2 === "O" && c5 === "O" && c8 === "O" || c0 === "O" && c4 === "O" && c8 === "O" || c2 === "O" && c4 === "O" && c6 === "O") {
        alert("O wins!");
    }
    // if draw all cells must be taken!
    else if (c0 != "" && c1 != "" && c2 != "" && c3 != "" && c4 != "" && c5 != "" && c6 != "" && c7 != "" && c8 != "") {
        alert("Draw!");
    }
}
