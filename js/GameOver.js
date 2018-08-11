// ----- Função redireciona o jogador para o menu de pontuação quando a nave é acertada --------------
function gameOver(){
	let nave = document.querySelector("#nave");
	let estado = 0;
	

	let animacaoExplosao = setInterval( () => {
		estado++;
		
		if(estado >= 5){
			clearInterval(animacaoExplosao);

			setTimeout(()=>{
				let pontuacao = document.querySelector("#contadorMeteoro");
				let pontos = pontuacao.innerHTML;
				setHistoricoPontos(pontos);

			},500);			
		}

		nave.setAttribute("src","img/naveEspecial/NaveDestruida"+estado+".png");
		return estado;
	},300);
}