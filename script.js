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

    vrt.addEventListener('click', clk);
}
for(let i=0; i<20; i++) {
    hrz = document.createElement('div');
    hrz.setAttribute('id', 'hrz');
    hrzGrid = document.getElementById('hrzGrid');
    hrzGrid.appendChild(hrz);

    hrz.addEventListener('click', clk);
}

function clk() {
    this.style.background = 'red';
}