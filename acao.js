function clicouNao(){
    document.getElementById('resposta_pergunta').innerHTML = 'Se você não quer, não vai ganhar!'
}

function moveu1(){
    var btn = document.getElementById('comClique')
    btn.style.top='60px';
}

function moveu2(){
    var btn = document.getElementById('comClique')
    btn.style.top='240px'
}

var btn = document.getElementById('comClique')
btn.addEventListener("mouseover",comClique)
btn.addEventListener('mouseover',moveu1)
btn.addEventListener('mouseout',moveu2)



