var sorteado = Math.floor(Math.random() * 100);

function verificar() {
    var numero = Number(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if (document.getElementById("numero").value == "") {
        resultado.innerHTML = "Digite um número!";
        return;
    }

    if (numero < 0 || numero > 99) {
        resultado.innerHTML = "Digite um número entre 0 e 99!";
    }
    else if (numero < sorteado) {
        resultado.innerHTML = "O número sorteado é maior!";
    }
    else if (numero > sorteado) {
        resultado.innerHTML = "O número sorteado é menor!";
    }
    else {
        resultado.innerHTML = "Parabéns! Você acertou!";
    }

    if (numero == sorteado) {
        resultado.style.backgroundColor = "lightgreen";
    }
    else {
        resultado.style.setProperty("background-color", "red");
    }
}