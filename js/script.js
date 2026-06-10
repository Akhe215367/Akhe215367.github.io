function trocarTema() {
    document.body.classList.toggle("dark-mode");
}

let tamanhoFonte = 16;

function aumentarFonte() {
    if (tamanhoFonte < 30) {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

function validarFormulario() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return false;
    }

    return true;
}