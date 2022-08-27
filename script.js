var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.canvas.width = 753;
ctx.canvas.height = 753;
let board = [];

for (let i = 0; i < 3; i++) {
    let subarray = [];

    for (let j = 0; j < 3; j++) {
        subarray.push(2);
    }
    board.push(subarray);
}
console.log(board);

function draw() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (board[x][y] == 0) {
                ctx.fillStyle = "blue";
                ctx.fillRect(251 * x, 251 * y, 250, 250);
            }
            if (board[x][y] == 1) {
                ctx.fillStyle = "yellow";
                ctx.fillRect(251 * x, 251 * y, 250, 250);
            }
            if (board[x][y] == 2) {
                ctx.fillStyle = "gray";
                ctx.fillRect(251 * x, 251 * y, 250, 250);
            }
        }
    }
}
draw();
let x = 0;
let y = 0;
let p = window.innerWidth / 2 - ctx.canvas.width / 2;
let k = window.innerHeight / 2 - ctx.canvas.height / 2;

let p1 = true;
let run = true;
function move() {
    console.log(y);
    if (run) {
        if(board[Math.round((x - 125.5) / 251)][Math.round((y - 125.5 + 84) / 251)] == 2){
        if (p1) {
            board[Math.round((x - 125.5) / 251)][Math.round((y - 125.5 + 84) / 251)] = 0;
                p1 = false;
        } else {
            board[Math.round((x - 125.5) / 251)][Math.round((y - 125.5 + 84) / 251)] = 1;
            p1 = true;
        }
        wincheck();
    }
    draw();
    }
}
function mousepos(e) {
    x = e.clientX;
    y = e.clientY;
    x -= p;
    y -= k;
}
document.getElementById("body").onmousemove = function (event) {
    mousepos(event);
};

function wincheck() {
    for (let a = 0; a < 3; a++) {
        let win = 0;
        for (let b = 0; b < 3; b++) {
            if (board[a][b] == 1) {
                win++;
            }
            if (board[a][b] == 0) {
                win += 10;
            }
        }
        if (win == 3) {
            console.log("Yellow won");
            end(1);
        }
        if (win == 30) {
            console.log("Blue won");
            end(0);
            
        }
    }
    for (let a = 0; a < 3; a++) {
        let win = 0;
        for (let b = 0; b < 3; b++) {
            if (board[b][a] == 1) {
                win += 1;
            }
            if (board[b][a] == 0) {
                win += 10;
            }
        }
        if (win == 3) {
            console.log("Yellow won");
            end(1);
        }
        if (win == 30) {
            console.log("Blue won");
            end(0);
        }
    }
    let win = 0;

    for (let a = -1; a < 2; a++) {
        if (board[a + 1][a + 1] == 1) {
            win++;
        }
        if (board[a + 1][a + 1] == 0) {
            win += 10;
        }

        if (win == 3) {
            console.log("bellow won");
            end(1);
        }
        if (win == 30) {
            console.log("Blue won");
            end(0);
        }
    }
    win = 0;

    for (let a = 0; a < 3; a++) {
        if (board[2 - a][a] == 1) {
            win++;
        }
        if (board[2 - a][a] == 0) {
            win += 10;
        }

        if (win == 3) {
            console.log("Yellow won");
            end(1);
        }
        if (win == 30) {
            console.log("Blue won");
            end(0);
        }
    }
}
function end(winner) {
    run = false;
    document.getElementById("winnertext").style.display = "inherit"

    if (winner == 0) {
        document.getElementById("winnertext").innerHTML = "Blue win";
    } else {
        document.getElementById("winnertext").innerHTML = "Yellow win";
    }
}
