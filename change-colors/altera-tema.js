var paginaInicial = document.querySelector(".pagina-inicial");
var botaoVerde = document.querySelector("#botao-verde");
var botaoAzul = document.querySelector("#botao-azul");
var botaoAmarelo = document.querySelector("#botao-amarelo");

botaoVerde.onclick = function() {
	document.getElementsByTagName('body')[0].style.backgroundColor = '#2e7d32'; //	var body = document.getElementsByTagName('body')[0]; //	body.style.backgroundColor = ''
	document.querySelector('h1').style.color = '#fff';
}
botaoAzul.onclick = function() {
	document.querySelector('body').style.backgroundColor = '#1565c0';
	document.querySelector('h1').style.color = '#fff';
}
botaoAmarelo.onclick = function() {
	document.querySelector('body').style.backgroundColor = '#fdd835';
	document.querySelector('h1').style.color = '#000';

}

