let curplayer;
let currvalue;
let boxes = document.getElementsByClassName("box");
initgame()

function initgame() {
    curplayer = 'player1';
    currvalue = 'x';
    gid('player1').style.backgroundColor = "green";
    gid('player2').style.backgroundColor = "grey";
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", boxclicked, { once: true });
    }
    gid("reset").addEventListener("click", reset);
}

function boxclicked(e) {
    e.target.innerHTML = currvalue;
    setTimeout(() => {
    checkwin();
    curplayer == 'player1' ? curplayer = 'player2' : curplayer = 'player1';
    currvalue == 'x' ? currvalue = 'o' : currvalue = 'x';
    gid('player1').style.backgroundColor = "grey";
    gid('player2').style.backgroundColor = "grey";
    gid(curplayer).style.backgroundColor = "green";    
    }, 100);   
}

function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    initgame();
}

function checkwin() {
    console.log("checking win");
    let win = false;
    let numarr = [];
    for (let i = 0; i < boxes.length; i++) {
        numarr.push(boxes[i].innerHTML);
    }
    if(numarr[0] == numarr[1] && numarr[1] == numarr[2] && numarr[0] != "") {
        win = true;
    }
    else if(numarr[3] == numarr[4] && numarr[4] == numarr[5] && numarr[3] != "") {
        win = true;
    }
    else if(numarr[6] == numarr[7] && numarr[7] == numarr[8] && numarr[6] != "") {
        win = true;
    }
    else if(numarr[0] == numarr[3] && numarr[3] == numarr[6] && numarr[0] != "") {
        win = true;
    }
    else if(numarr[1] == numarr[4] && numarr[4] == numarr[7] && numarr[1] != "") {
        win = true;
    }
    else if(numarr[2] == numarr[5] && numarr[5] == numarr[8] && numarr[2] != "") {
        win = true;
    }
    else if(numarr[0] == numarr[4] && numarr[4] == numarr[8] && numarr[0] != "") {
        win = true;
    }
    else if(numarr[2] == numarr[4] && numarr[4] == numarr[6] && numarr[2] != "") {
        win = true;
    }
    else {
        let filled=true;
        for (let i = 0; i < boxes.length; i++) {
            if(boxes[i].innerHTML=="") {
                filled=false;
            }

        }
        if(filled==true) {
            alert("Draw");
            reset();
        }
    }
     if(win==true) {
        alert(curplayer + " won");
        reset();
    }
}

function gid(id) {
    return document.getElementById(id)
}