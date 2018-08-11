// ------------- Função que Faz o meteoro ser destruido e removido ------------
function morteMeteoro(IdMeteoro){
	let meteoro  = document.querySelector("#Meteoro"+IdMeteoro);
	let contador = meteoro.dataset.colisoes;

	contador++;

	if (contador >= 16){
		meteoro.setAttribute("src","img/meteoro/Meteoro3.png");
			setTimeout( () => { 
				acresentarPontuacao();
				meteoro.remove();
			},500);
	}else if(contador > 0 ){

		meteoro.setAttribute("src","img/meteoro/Meteoro2.png"); 
	}

	meteoro.dataset.colisoes = contador;
	
}