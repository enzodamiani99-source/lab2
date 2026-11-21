
var canvas1 = document.getElementById("canvas1");
var ctx = canvas1.getContext("2d");

function desenhar_quadrado(x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(x1, y1, x2, y2, cor) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function desenhar_arco(x, y, raio, inicio, fim, cor, preencher) {
    ctx.beginPath();
    ctx.arc(x, y, raio, inicio, fim);

    if (preencher == true) {
        ctx.fillStyle = cor;
        ctx.fill();
    }
    else {
        ctx.strokeStyle = cor;
        ctx.stroke();
    }
}

function escrever(texto, x, y, cor) {
    ctx.fillStyle = cor;
    ctx.font = "16px Arial";
    ctx.fillText(texto, x, y);
}

function desenhar_triangulo(x1, y1, x2, y2, x3, y3, cor) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
}


// PRIMEIRO DESENHO

desenhar_quadrado(0, 0, 300, 300, "white");

// Quadrados superiores
desenhar_quadrado(0, 0, 50, 50, "blue");
desenhar_quadrado(250, 0, 50, 50, "red");

// Linhas diagonais
desenhar_linha(50, 50, 150, 150, "blue");
desenhar_linha(250, 50, 150, 150, "red");

// Texto
escrever("Canvas", 115, 45, "black");

// Quadrados laterais
desenhar_quadrado(0, 120, 30, 60, "cyan");
desenhar_quadrado(270, 135, 30, 30, "cyan");

// Arcos superiores
desenhar_arco(150, 150, 55, Math.PI, 2 * Math.PI, "green", false);
desenhar_arco(150, 150, 75, Math.PI, 2 * Math.PI, "green", false);

// Círculo azul
desenhar_arco(150, 115, 14, 0, 2 * Math.PI, "cyan", true);
desenhar_arco(150, 115, 14, 0, 2 * Math.PI, "blue", false);

// Linha horizontal
desenhar_linha(0, 150, 300, 150, "green");

// Quadrado vermelho
desenhar_quadrado(110, 150, 40, 30, "red");

// Linha vertical
desenhar_linha(150, 150, 150, 300, "green");

// Círculos amarelos
desenhar_arco(70, 220, 14, 0, 2 * Math.PI, "yellow", true);
desenhar_arco(220, 220, 14, 0, 2 * Math.PI, "yellow", true);

desenhar_arco(70, 220, 14, 0, 2 * Math.PI, "green", false);
desenhar_arco(220, 220, 14, 0, 2 * Math.PI, "green", false);

// Arcos inferiores
desenhar_arco(150, 300, 55, Math.PI, 2 * Math.PI, "green", false);
desenhar_arco(150, 300, 75, Math.PI, 2 * Math.PI, "green", false);

// Semicírculo azul
desenhar_arco(150, 300, 40, Math.PI, 2 * Math.PI, "cyan", true);

// Quadrados inferiores
desenhar_quadrado(0, 240, 30, 60, "yellow");
desenhar_quadrado(0, 270, 60, 30, "yellow");

desenhar_quadrado(270, 240, 30, 60, "black");
desenhar_quadrado(240, 270, 60, 30, "black");


// SEGUNDO DESENHO

var canvas2 = document.getElementById("canvas2");
ctx = canvas2.getContext("2d");

// Fundo verde
desenhar_quadrado(0, 0, 300, 300, "#8af5ce");

// Sol
desenhar_arco(225, 75, 38, 0, 2 * Math.PI, "yellow", true);

// Chão
desenhar_quadrado(0, 225, 300, 75, "gray");

// Casa
desenhar_quadrado(112, 150, 75, 75, "#8b4513");

// Telhado
desenhar_triangulo(112, 150, 150, 112, 187, 150, "tomato");

// Porta
desenhar_quadrado(143, 185, 17, 40, "#654321");

// Janelas
desenhar_quadrado(120, 165, 22, 18, "#38b6ff");
desenhar_quadrado(162, 165, 22, 18, "#38b6ff");

// Árvore esquerda
desenhar_quadrado(38, 185, 15, 40, "#8b4513");
desenhar_arco(45, 175, 23, 0, 2 * Math.PI, "forestgreen", true);

// Árvore direita
desenhar_quadrado(263, 220, 15, 40, "#8b4513");
desenhar_arco(270, 210, 23, 0, 2 * Math.PI, "forestgreen", true);

// Água azul
ctx.beginPath();
ctx.fillStyle = "#448aff";
ctx.moveTo(0, 185);
ctx.bezierCurveTo(25, 185, 35, 215, 35, 225);
ctx.lineTo(35, 280);
ctx.lineTo(85, 280);
ctx.bezierCurveTo(115, 280, 150, 280, 150, 300);
ctx.lineTo(0, 300);
ctx.closePath();
ctx.fill();
