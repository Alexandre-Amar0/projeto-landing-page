var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    setaDireita.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    Bruna.style = "display:none"
    setaEsquerda.style = "display:none"
    Leonardo.style = "display: flex"
    setaDireita.style = "display:flex"
}