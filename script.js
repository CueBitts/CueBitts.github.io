for(let i=0; i<16; i++) {
    sqr = document.createElement('div');
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
for(let i=0; i<20; i++) {
    vrt = document.createElement('div');
    vrt.setAttribute('id', 'vrt');
    vrtGrid = document.getElementById('vrtGrid');
    vrtGrid.appendChild(vrt);

    vrt.className = 'unclk';
    vrt.addEventListener('click', clk);
    vrt.addEventListener('mouseover', hvr);
    vrt.addEventListener('mouseleave', lve);
}
for(let i=0; i<20; i++) {
    hrz = document.createElement('div');
    hrz.setAttribute('id', 'hrz');
    hrzGrid = document.getElementById('hrzGrid');
    hrzGrid.appendChild(hrz);

    hrz.className = 'unclk';
    hrz.addEventListener('click', clk);
    hrz.addEventListener('mouseover', hvr);
    hrz.addEventListener('mouseleave', lve);
}
 
function clk() {
    this.style.background = 'red';
    this.className = 'clk';
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