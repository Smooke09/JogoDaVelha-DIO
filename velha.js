var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
    placar();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    } else if (quadrado1.innerHTML !== '-' && quadrado2.innerHTML !== '-' && quadrado3.innerHTML !== '-' &&
        quadrado4.innerHTML !== '-' && quadrado5.innerHTML !== '-' && quadrado6.innerHTML !== '-' &&
        quadrado7.innerHTML !== '-' && quadrado8.innerHTML !== '-' && quadrado9.innerHTML !== '-') {
        alert('Velha');
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}



function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.classList.add('verde');
    quadrado2.classList.add('verde');
    quadrado3.classList.add('verde');
}

// function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
//     quadrado1.style.background = '#0f0';
//     quadrado2.style.background = '#0f0';
//     quadrado3.style.background = '#0f0';
// }

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    let eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }
    return eigual;
}


function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}

function placar() {
    let jogadorX = document.getElementById('jogadorX');
    let jogadorO = document.getElementById('jogadorO');

    if (vencedor == 'X') {
        jogadorX.innerHTML = parseInt(jogadorX.innerHTML) + 1;
    } else if (vencedor == 'O') {
        jogadorO.innerHTML = parseInt(jogadorO.innerHTML) + 1;
    }
}

let i = 0;
let tag = document.getElementById("text");
let html = document.getElementById("text").innerHTML;
let attr = tag.setAttribute("data", html);
let txt = tag.getAttribute("data");
let speed = 200;

function typeWriter() {

    if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i >= txt.length) {
        i = 0;
        setTimeout(typeWriter, speed);
    }

}

typeWriter();
