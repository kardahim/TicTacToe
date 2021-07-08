var area = document.querySelectorAll(".area");

for (var i = 0; i < area.length; i++) {
    area[i].addEventListener("click", game);
}

function game() {
    draw(this.id);
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

