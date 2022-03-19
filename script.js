let win;
let tie;
let trn;
let clr;
let rdpts;
let blpts;
let trnflg;

let bSqr0;
let bSqr1;
let bSqr2;
let bSqr3;
let bSqr4;
let bSqr5;
let bSqr6;
let bSqr7;
let bSqr8;
let bSqr9;
let bSqr10;
let bSqr11;
let bSqr12;
let bSqr13;
let bSqr14;
let bSqr15;

init();

function init() {
    win = false;
    tie = false;
    trn = 0;
    rdpts = 0;
    blpts = 0;
    trnflg = false;

    arr = [
        [false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false],
    ]

    bSqr0 = false;
    bSqr1 = false;
    bSqr2 = false;
    bSqr3 = false;
    bSqr4 = false;
    bSqr5 = false;
    bSqr6 = false;
    bSqr7 = false;
    bSqr8 = false;
    bSqr9 = false;
    bSqr10 = false;
    bSqr11 = false;
    bSqr12 = false;
    bSqr13 = false;
    bSqr14 = false;
    bSqr15 = false;

    for(let i=0; i<16; i++) {
        sqr = document.createElement('div');
        sqr.className = `${i}`;
        sqr.setAttribute('id', 'sqr');
        sqrGrid = document.getElementById('sqrGrid');
        sqrGrid.appendChild(sqr);
    }
    for(let i=0; i<25; i++) {
        dot = document.createElement('div');
        dot.setAttribute('id', 'dot');
        dotGrid = document.getElementById('dotGrid');
        dotGrid.appendChild(dot);
    }
    for(let i=0; i<9; i++) {
        if(i%2 === 0) {
            for(let j=0; j<4; j++) {
                hrz = document.createElement('div');
                hrz.className = 'unclk';
                hrz.setAttribute('id', 'hrz');
                hrzGrid = document.getElementById('hrzGrid');
                hrz.setAttribute('name', `${i}${j}`);
                hrzGrid.appendChild(hrz);
            
                hrz.addEventListener('click', clk);
                hrz.addEventListener('mouseover', hvr);
                hrz.addEventListener('mouseleave', lve);
            }
        }
        else {
            for(let j=0; j<5; j++) {
                vrt = document.createElement('div');
                vrt.className = 'unclk';
                vrt.setAttribute('id', 'vrt');
                vrt.setAttribute('name', `${i}${j}`);
                vrtGrid = document.getElementById('vrtGrid');
                vrtGrid.appendChild(vrt);
            
                vrt.addEventListener('click', clk);
                vrt.addEventListener('mouseover', hvr);
                vrt.addEventListener('mouseleave', lve); 
            }
        }
    }
    gme();
}

function gme() {
    if(rdpts > 8) {
        alert('Red Wins! ' + `Red: ${rdpts} ` + `Blue: ${blpts} Refresh to Play Again.`);
        win = true;
        // init();
    }
    if(blpts > 8) {
        alert('Blue Wins! ' + `Red: ${rdpts} ` + `Blue: ${blpts} Refresh to Play Again.`);
        win = true;
        // init();
    }
    if(rdpts === 8 && rdpts === blpts) {
        alert('Tie! Refresh to Play Again.');
        tie = true;
        // init();
    }
    
    if(trn%2 === 0) {
        clr = 'red';
    }
    else {
        clr = 'blue';
    }

    if(trnflg) {
        // let pts = chk();
        // if(pts && trn%2 === 0) {
        //     rdpts++;
        // }
        // else if(pts) {
        //     blpts++;
        // }
        // else {
        //     trn++;
        // }
        let rdtmp = rdpts;
        let bltmp = blpts;
        chk();
        if(rdtmp === rdpts && bltmp === blpts) {
            trn++;
        }
        // console.log(rdpts);
        // console.log(blpts);
        trnflg = false;
        gme();
    }
    else {
        setTimeout(gme, 250);
    }
}
 
function hvr() {
    if(this.className === 'unclk') {
        this.style.background = '#ababab';
    }
}
function lve() {
    if(this.className === 'clk') {
        this.style.background = this.getAttribute('clr');
    }
    else {
        this.style.background = '#4a4b4c';
    }
}
function clk() {
    if(this.className === 'unclk') {
        this.style.background = clr;
        this.setAttribute('clr', clr);
        this.className = 'clk';
    
        idx = this.getAttribute('name');
        arr[idx.charAt(0)][idx.charAt(1)] = true;

        trnflg = true;
    }
}

function chk() {
    if(arr[0][0] && arr[1][0] && arr[1][1] && arr[2][0] && !bSqr0) {
        sqr0 = document.getElementsByClassName('0')[0];
        sqr0.setAttribute('clr', clr); 
        sqr0.style.background = sqr0.getAttribute('clr');
        bSqr0 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }
    if(arr[0][1] && arr[1][1] && arr[1][2] && arr[2][1] && !bSqr1) {
        sqr1 = document.getElementsByClassName('1')[0];
        sqr1.setAttribute('clr', clr); 
        sqr1.style.background = sqr1.getAttribute('clr');
        bSqr1 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }
    if(arr[0][2] && arr[1][2] && arr[1][3] && arr[2][2] && !bSqr2) {
        sqr2 = document.getElementsByClassName('2')[0];
        sqr2.setAttribute('clr', clr); 
        sqr2.style.background = sqr2.getAttribute('clr');
        bSqr2 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }
    if(arr[0][3] && arr[1][3] && arr[1][4] && arr[2][3] && !bSqr3) {
        sqr3 = document.getElementsByClassName('3')[0];
        sqr3.setAttribute('clr', clr); 
        sqr3.style.background = sqr3.getAttribute('clr');
        bSqr3 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }

    if(arr[2][0] && arr[3][0] && arr[3][1] && arr[4][0] && !bSqr4) {
        sqr4 = document.getElementsByClassName('4')[0];
        sqr4.setAttribute('clr', clr); 
        sqr4.style.background = sqr4.getAttribute('clr');
        bSqr4 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }
    if(arr[2][1] && arr[3][1] && arr[3][2] && arr[4][1] && !bSqr5) {
        sqr5 = document.getElementsByClassName('5')[0];
        sqr5.setAttribute('clr', clr); 
        sqr5.style.background = sqr5.getAttribute('clr');
        bSqr5 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }
    if(arr[2][2] && arr[3][2] && arr[3][3] && arr[4][2] && !bSqr6) {
        sqr6 = document.getElementsByClassName('6')[0];
        sqr6.setAttribute('clr', clr); 
        sqr6.style.background = sqr6.getAttribute('clr');
        bSqr6 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }
    if(arr[2][3] && arr[3][3] && arr[3][4] && arr[4][3] && !bSqr7) {
        sqr7 = document.getElementsByClassName('7')[0];
        sqr7.setAttribute('clr', clr); 
        sqr7.style.background = sqr7.getAttribute('clr');
        bSqr7 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }

    if(arr[4][0] && arr[5][0] && arr[5][1] && arr[6][0] && !bSqr8) {
        sqr8 = document.getElementsByClassName('8')[0];
        sqr8.setAttribute('clr', clr); 
        sqr8.style.background = sqr8.getAttribute('clr');
        bSqr8 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }
    if(arr[4][1] && arr[5][1] && arr[5][2] && arr[6][1] && !bSqr9) {
        sqr9 = document.getElementsByClassName('9')[0];
        sqr9.setAttribute('clr', clr); 
        sqr9.style.background = sqr9.getAttribute('clr');
        bSqr9 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        } 
    }
    if(arr[4][2] && arr[5][2] && arr[5][3] && arr[6][2] && !bSqr10) {
        sqr10 = document.getElementsByClassName('10')[0];
        sqr10.setAttribute('clr', clr);
        sqr10.style.background = sqr10.getAttribute('clr');
        bSqr10 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        }
    }
    if(arr[4][3] && arr[5][3] && arr[5][4] && arr[6][3] && !bSqr11) {
        sqr11 = document.getElementsByClassName('11')[0];
        sqr11.setAttribute('clr', clr);
        sqr11.style.background = sqr11.getAttribute('clr');
        bSqr11 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        }
    }

    if(arr[6][0] && arr[7][0] && arr[7][1] && arr[8][0] && !bSqr12) {
        sqr12 = document.getElementsByClassName('12')[0];
        sqr12.setAttribute('clr', clr);
        sqr12.style.background = sqr12.getAttribute('clr');
        bSqr12 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        }
    }
    if(arr[6][1] && arr[7][1] && arr[7][2] && arr[8][1] && !bSqr13) {
        sqr13 = document.getElementsByClassName('13')[0];
        sqr13.setAttribute('clr', clr);
        sqr13.style.background = sqr13.getAttribute('clr');
        bSqr13 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        }
    }
    if(arr[6][2] && arr[7][2] && arr[7][3] && arr[8][2] && !bSqr14) {
        sqr14 = document.getElementsByClassName('14')[0];
        sqr14.setAttribute('clr', clr);
        sqr14.style.background = sqr14.getAttribute('clr');
        bSqr14 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        }
    }
    if(arr[6][3] && arr[7][3] && arr[7][4] && arr[8][3] && !bSqr15) {
        sqr15 = document.getElementsByClassName('15')[0];
        sqr15.setAttribute('clr', clr);
        sqr15.style.background = sqr15.getAttribute('clr');
        bSqr15 = true;
        if(trn%2 === 0) {
            rdpts++;
        }
        else {
            blpts++;
        }
    }
    return false;
}