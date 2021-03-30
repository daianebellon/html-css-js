//selecionar as notas do formulario 
function pegaNotaFormularioEMostraSeAprovado(){
	var notas = document.querySelectorAll(".notas");
	var notasValue = [];

	for(i = 0; i < notas.length; i++){

		var nota = notas[i];
		nota.focus();

		if(nota.value === ""){
			alert("Nota inválida!!");
			return;
		}
			
		if (isNaN(nota.value)){
			alert("Nota inválida!");
			return;
		}


		var notaNumber = parseInt(nota.value);

		if(notaNumber < 0 || notaNumber > 10){
			alert("Nota inválida!");
			return;
		}

		notasValue.push(notaNumber);
	}

	var media = calculaMedia(notasValue);

	var mostraResultadoDaMediaEmTela = document.querySelector("#mostra-resultado");

	if(media >= 6.0){
		mostraResultadoDaMediaEmTela.textContent = "A media das notas é: " + media + "! Parabêns, você foi aprovado!!!";
	}else if (media < 6.0){
		mostraResultadoDaMediaEmTela.textContent = "A media das notas é: " + media + "! Infelizmente você não foi aprovado!";
	}
}

//selecionei o botao e atribui no click uma funcao que calula media com as 4 notas informadas
var button = document.querySelector("button");

function calculaMedia(notas){

	var somatorioDasNotas = 0;

	for(i = 0; i < notas.length; i++){
		var notaAtual = notas[i];
		somatorioDasNotas += notaAtual;
	}

	var mediaDasNotas = somatorioDasNotas / notas.length;
	return mediaDasNotas;
}

button.onclick = pegaNotaFormularioEMostraSeAprovado;