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
 
function clk() {
    this.style.background = 'red';
    this.className = 'clk';

    idx = this.getAttribute('name');
    arr[idx.charAt(0)][idx.charAt(1)] = true;
}
function hvr() {
    if(this.className === 'unclk') {
        this.style.background = '#ababab';
    }
}
function lve() {
    if(this.className === 'clk') {
        this.style.background = 'red';
    }
    else {
        this.style.background = '#4a4b4c';
    }
}

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

function chk() {
    if(arr[0][0] && arr[1][0] && arr[1][1] && arr[2][0]) {
        document.getElementsByClassName('0')[0].style.background = 'red';
    }
    if(arr[0][1] && arr[1][1] && arr[1][2] && arr[2][1]) {
        document.getElementsByClassName('1')[0].style.background = 'red';
    }
    if(arr[0][2] && arr[1][2] && arr[1][3] && arr[2][2]) {
        document.getElementsByClassName('2')[0].style.background = 'red';
    }
    if(arr[0][3] && arr[1][3] && arr[1][4] && arr[2][3]) {
        document.getElementsByClassName('3')[0].style.background = 'red';
    }

    if(arr[2][0] && arr[3][0] && arr[3][1] && arr[4][0]) {
        document.getElementsByClassName('4')[0].style.background = 'red';
    }
    if(arr[2][1] && arr[3][1] && arr[3][2] && arr[4][1]) {
        document.getElementsByClassName('5')[0].style.background = 'red';
    }
    if(arr[2][2] && arr[3][2] && arr[3][3] && arr[4][2]) {
        document.getElementsByClassName('6')[0].style.background = 'red';
    }
    if(arr[2][3] && arr[3][3] && arr[3][4] && arr[4][3]) {
        document.getElementsByClassName('7')[0].style.background = 'red';
    }

    if(arr[4][0] && arr[5][0] && arr[5][1] && arr[6][0]) {
        document.getElementsByClassName('8')[0].style.background = 'red';
    }
    if(arr[4][1] && arr[5][1] && arr[5][2] && arr[6][1]) {
        document.getElementsByClassName('9')[0].style.background = 'red';
    }
    if(arr[4][2] && arr[5][2] && arr[5][3] && arr[6][2]) {
        document.getElementsByClassName('10')[0].style.background = 'red';
    }
    if(arr[4][3] && arr[5][3] && arr[5][4] && arr[6][3]) {
        document.getElementsByClassName('11')[0].style.background = 'red';
    }

    if(arr[6][0] && arr[7][0] && arr[7][1] && arr[8][0]) {
        document.getElementsByClassName('12')[0].style.background = 'red';
    }
    if(arr[6][1] && arr[7][1] && arr[7][2] && arr[8][1]) {
        document.getElementsByClassName('13')[0].style.background = 'red';
    }
    if(arr[6][2] && arr[7][2] && arr[7][3] && arr[8][2]) {
        document.getElementsByClassName('14')[0].style.background = 'red';
    }
    if(arr[6][3] && arr[7][3] && arr[7][4] && arr[8][3]) {
        document.getElementsByClassName('15')[0].style.background = 'red';
    }
}