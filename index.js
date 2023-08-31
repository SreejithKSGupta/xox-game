let player1 = {
    name: "player1",
    pname: "player 1",
    value: "X",
    color: "red",
    bgcolor: "violet"
}
let player2 = {
    name: "player2",
    pname: "player 2",
    value: "O",
    color: "blue",
    bgcolor: "yellow"
}
let curplayer = player1;
let boxes = document.getElementsByClassName("box");
initgame()

function initgame() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", boxclicked, { once: true });
    }
    gid("reset").addEventListener("click", reset);
}
function boxclicked(e) {
    e.target.style.backgroundColor = curplayer.bgcolor;
    e.target.style.color = curplayer.color;
    e.target.innerHTML = curplayer.value;
    setTimeout(() => {
        let win = checkwin();
        if (win == 2) {
            showalert(curplayer.pname + " won the game");
            reset();
        }
        else if (win == 1) {
            showalert("game draw");
            reset();
        }
        else {
            toggleplayer();
        }
    }, 300);
}
function toggleplayer() {
    curplayer == player1 ? curplayer = player2 : curplayer = player1;
    gid("player1").classList.toggle("activeplayer");
    gid("player2").classList.toggle("activeplayer");
    gid("playername").innerHTML = "turn of " + curplayer.pname;
}
function checkwin() {
    let win = 0;
    let numarr = [];
    for (let i = 0; i < boxes.length; i++) {
        numarr.push(boxes[i].innerHTML);
    }
    if (numarr[0] == numarr[1] && numarr[1] == numarr[2] && numarr[0] != "") {
        win = 2;
    }
    else if (numarr[3] == numarr[4] && numarr[4] == numarr[5] && numarr[3] != "") {
        win = 2;
    }
    else if (numarr[6] == numarr[7] && numarr[7] == numarr[8] && numarr[6] != "") {
        win = 2;
    }
    else if (numarr[0] == numarr[3] && numarr[3] == numarr[6] && numarr[0] != "") {
        win = 2;
    }
    else if (numarr[1] == numarr[4] && numarr[4] == numarr[7] && numarr[1] != "") {
        win = 2;
    }
    else if (numarr[2] == numarr[5] && numarr[5] == numarr[8] && numarr[2] != "") {
        win = 2;
    }
    else if (numarr[0] == numarr[4] && numarr[4] == numarr[8] && numarr[0] != "") {
        win = 2;
    }
    else if (numarr[2] == numarr[4] && numarr[4] == numarr[6] && numarr[2] != "") {
        win = 2;
    }
    else {
        let count = 0;
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerHTML == "") {
                count++;
            }
        }
        if (count == 0) {
            win = 1;
        }
    }
    return win;

}
function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].style.color = "black";
        boxes[i].style.backgroundColor = "white";
    }
    initgame();
}
function gid(id) {
    return document.getElementById(id)
}

function showalert(text){
    gid("alert").style.display="flex";
    gid("alertmsgtxt").innerHTML=text;
    gid("alertbtn").addEventListener("click",()=>{
        gid("alert").style.display="none";
    })
}