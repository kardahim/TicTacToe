const area = document.querySelectorAll(".area");
const divider = document.getElementsByClassName("divider");

// Event Listener
for (var i = 0; i < area.length; i++) {
    area[i].addEventListener("click", game);
}

document.getElementById("result").addEventListener("click", () => {
    document.getElementById("result").style.display = "none";
    reset();
})

function game() {
    draw(this.id);
    winner();
}

function draw(id) {
    var cell = document.getElementById(id);
    if (cell.innerText === "") {
        if (changePlayer() === 1) {
            cell.innerHTML = 'X<div class="divider"></div>';
        }
        else
            cell.innerHTML = 'O<div class="divider"></div>';
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

    // horizontal
    if (c0 === "X" && c1 === "X" && c2 === "X") {
        horizontalLine(0, 1, 2);
        showWinner(1);
    }
    else if (c3 === "X" && c4 === "X" && c5 === "X") {
        horizontalLine(3, 4, 5);
        showWinner(1);
    }
    else if (c6 === "X" && c7 === "X" && c8 === "X") {
        horizontalLine(6, 7, 8);
        showWinner(1);
    }
    else if (c0 === "O" && c1 === "O" && c2 === "O") {
        horizontalLine(0, 1, 2);
        showWinner(2);
    }
    else if (c3 === "O" && c4 === "O" && c5 === "O") {
        horizontalLine(3, 4, 5);
        showWinner(2);
    }
    else if (c6 === "O" && c7 === "O" && c8 === "O") {
        horizontalLine(6, 7, 8);
        showWinner(2);
    }
    // vertical
    else if (c0 === "X" && c3 === "X" && c6 === "X") {
        verticalLine(0, 3, 6);
        showWinner(1);
    }
    else if (c1 === "X" && c4 === "X" && c7 === "X") {
        verticalLine(1, 4, 7);
        showWinner(1);
    }
    else if (c2 === "X" && c5 === "X" && c8 === "X") {
        verticalLine(2, 5, 8);
        showWinner(1);
    }
    else if (c0 === "O" && c3 === "O" && c6 === "O") {
        verticalLine(0, 3, 6);
        showWinner(2);
    }
    else if (c1 === "O" && c4 === "O" && c7 === "O") {
        verticalLine(1, 4, 7);
        showWinner(2);
    }
    else if (c2 === "O" && c5 === "O" && c8 === "O") {
        verticalLine(2, 5, 8);
        showWinner(2);
    }
    // diagonal left
    else if (c0 === "X" && c4 === "X" && c8 === "X") {
        diagonalLine(0, 4, 8, true);
        showWinner(1);
    }
    else if (c0 === "O" && c4 === "O" && c8 === "O") {
        diagonalLine(0, 4, 8, true);
        showWinner(2);
    }
    else if (c2 === "X" && c4 === "X" && c6 === "X") {
        diagonalLine(2, 4, 6, false);
        showWinner(1);
    }
    else if (c2 === "O" && c4 === "O" && c6 === "O") {
        diagonalLine(2, 4, 6, false);
        showWinner(2);
    }
    // draw
    else if (c0 != "" && c1 != "" && c2 != "" && c3 != "" && c4 != "" && c5 != "" && c6 != "" && c7 != "" && c8 != "") {
        showWinner(0);
    }
}

function horizontalLine(f1, f2, f3) {
    divider[f1].style.borderBottom = "4px solid white";
    divider[f2].style.borderBottom = "4px solid white";
    divider[f3].style.borderBottom = "4px solid white";

    divider[f1].style.width = "10vw";
    divider[f2].style.width = "10vw";
    divider[f3].style.width = "10vw";

    divider[f1].style.position = "absolute";
    divider[f2].style.position = "absolute";
    divider[f3].style.position = "absolute";
}

function verticalLine(f1, f2, f3) {
    divider[f1].style.borderLeft = "4px solid white";
    divider[f2].style.borderLeft = "4px solid white";
    divider[f3].style.borderLeft = "4px solid white";

    divider[f1].style.height = "10vw";
    divider[f2].style.height = "10vw";
    divider[f3].style.height = "10vw";

    divider[f1].style.position = "absolute";
    divider[f2].style.position = "absolute";
    divider[f3].style.position = "absolute";
}

function diagonalLine(f1, f2, f3, f4) {
    divider[f1].style.borderBottom = "4px solid white";
    divider[f2].style.borderBottom = "4px solid white";
    divider[f3].style.borderBottom = "4px solid white";

    divider[f1].style.width = "14.142vw";
    divider[f2].style.width = "14.142vw";
    divider[f3].style.width = "14.142vw";

    divider[f1].style.position = "absolute";
    divider[f2].style.position = "absolute";
    divider[f3].style.position = "absolute";

    if (f4 === true) {
        divider[f1].style.transform = "rotate(45deg)";
        divider[f2].style.transform = "rotate(45deg)";
        divider[f3].style.transform = "rotate(45deg)";
    }
    else {
        divider[f1].style.transform = "rotate(-45deg)";
        divider[f2].style.transform = "rotate(-45deg)";
        divider[f3].style.transform = "rotate(-45deg)";
    }

}

function showWinner(x) {
    var winner;
    var score;
    if (x === 1) {
        winner = "X wins!"
        score = "show-x"
    }
    else if (x === 2) {
        winner = "O wins!"
        score = "show-o"
    }
    else if (x === 0) {
        winner = "Draw!";
    }

    if (x != 0) {
        if (document.getElementById(score).innerText === "-") {
            document.getElementById(score).innerText = 1;
        }
        else {
            document.getElementById(score).innerText = parseInt(document.getElementById(score).innerText) + 1;
        }
    }
    document.getElementById("winner").innerText = winner;
    document.getElementById("result").style.display = "flex";
}

function reset() {
    var c0 = area[0].innerText;
    var c1 = area[1].innerText;
    var c2 = area[2].innerText;
    var c3 = area[3].innerText;
    var c4 = area[4].innerText;
    var c5 = area[5].innerText;
    var c6 = area[6].innerText;
    var c7 = area[7].innerText;
    var c8 = area[8].innerText;

    for (var i = 0; i < area.length; i++) {
        area[i].innerHTML = '<div class="divider"></div>';
    }
}