// ------------- Função usada para contabilizar os pontos do jogador -------------
function acresentarPontuacao(){
	let pontuacao = document.querySelector("#contadorMeteoro");
	let pontos = pontuacao.innerHTML;
	pontos++;

	document.querySelector("#contadorMeteoro").innerHTML = pontos;
}
// ------------- Função usada para quardar os pontos no LocalStorage -------------
function setHistoricoPontos(pontuacao){

	let registros  =  [];

	if(localStorage.getItem("pontos") != null){

		registros = JSON.parse(localStorage.getItem("pontos"));

	}
	registros.push(pontuacao);
	localStorage.setItem("pontos", JSON.stringify(registros));

	window.location.replace("menu.html");
}  
// ------------- Função usada para pegar os Pontos no LocalStorage -------------
function getHistoricoPontos(){
	let registros = JSON.parse(localStorage.getItem("pontos")) || [];
	let i = 0;

	registros.forEach( pontos => {
		let item = document.createElement("li");
		item.setAttribute("id","item"+i);
		item.textContent = pontos;

		document.getElementById("ListaPontuacao").appendChild(item);
		i++;
	});
}  
// ------------- Função usada para quardar os nomes no LocalStorage -------------
function setHistoricoNomes(){
	let campo = document.querySelector("#Nome");
	let nome = campo.value;
	let registros  =  [];

	if(validaNome(campo)){
			
		if(localStorage.getItem("nomes") !== null){

			registros = JSON.parse(localStorage.getItem("nomes"));

		}

		registros.push(nome);
		localStorage.setItem("nomes", JSON.stringify(registros));

		window.location.replace("Pontuacao.html");
	}else{
		campo.style.borderColor = "red";
		campo.style.color = "red";
		campo.value = "Campo Obrigatório";
	}
}
function validaNome(campo){
	return campo.value ? true : false;
}  
// ------------- Função usada para pegar os nomes no LocalStorage -------------
function getHistoricoNomes(){
	let registros = JSON.parse(localStorage.getItem("nomes"));
	let i = 0;

	//A negação dupla é para forçar a coerção de tipo para um tipo boolean 
	if(!!registros){

		registros.forEach(nomes => {

			let item = document.createElement("li");
				item.setAttribute("id","item"+i);
				item.textContent = nomes;

			document.getElementById("ListaNome").appendChild(item);

			i++;

		});
	
	}
} 
function getHistorico(){
	getHistoricoNomes();
	getHistoricoPontos();
} 