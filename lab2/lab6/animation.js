
var canvas = document.getElementById("canvasAnimacao");
var ctx = canvas.getContext("2d");

var x = 150;
var y = 150;

function desenhar() {
    ctx.clearRect(0, 0, 300, 300);

    ctx.beginPath();
    ctx.fillStyle = "yellow";

    for (var i = 0; i < 10; i++) {
        var angulo = i * Math.PI / 5 - Math.PI / 2;
        var raio;

        if (i % 2 == 0) {
            raio = 25;
        }
        else {
            raio = 12;
        }

        var px = x + Math.cos(angulo) * raio;
        var py = y + Math.sin(angulo) * raio;

        if (i == 0) {
            ctx.moveTo(px, py);
        }
        else {
            ctx.lineTo(px, py);
        }
    }

    ctx.closePath();
    ctx.fill();
}

canvas.addEventListener("mousemove", function(evento) {
    var posicao = canvas.getBoundingClientRect();

    x = (evento.clientX - posicao.left) * 300 / posicao.width;
    y = (evento.clientY - posicao.top) * 300 / posicao.height;

    desenhar();
});

desenhar();
