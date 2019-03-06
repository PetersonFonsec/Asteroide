// ------------- Função que cria Meteoros com posisões aleatorias -----------------
function gerarMeteoro(idMeteoro,widthTela,heightTela){
   
  	let borda = widthTela - 100;
	let largura = Math.floor( Math.random()  * borda + 1) 

	let Meteoro = document.createElement("img")
		Meteoro.criar({
			src    : "img/meteoro/Meteoro1.png",
			id     : `Meteoro${idMeteoro}`,
			classe : `meteoro`,
			left   : `${largura}px`
		})

		Meteoro.dataset.colisoes = "0";


	// ------------- Chama a função que faz os Meteoros deserem -------------------
	let BottomMeteoro = heightTela;
	let timerMeteoro = setInterval(() => {BottomMeteoro = deserMeteoro(BottomMeteoro,idMeteoro,timerMeteoro,heightTela) },40)

}
// ------------- Função que Faz o meteoro deserem ------------------
function deserMeteoro(bottom,idMeteoro,timerMeteoro,heightTela){
	let config = JSON.parse(sessionStorage.getItem("config"))

	bottom -= parseInt(config.dificuldade)
	
	try{//Gambiarra que eu fiz para verificar se o meteoro foi atingido		
		ColisaoMeteoroNave(idMeteoro)
		ColisaoMeteoroTiro(idMeteoro)
		bottom = rotinaMeteoro(idMeteoro,bottom,timerMeteoro,heightTela)
		return bottom
		
	}catch (e){
		bottom = rotinaMeteoro(idMeteoro,bottom,timerMeteoro,heightTela)
		return bottom;
	}	
}
// ------------- rotina do meteoro ----------------------
function rotinaMeteoro(idMeteoro,bottom,timerMeteoro){
	let meteoro = document.querySelector(`#Meteoro${idMeteoro}`)
		
	if( meteoro != null){//Primeiro verifica se o meteoro existe
		if ( limite.limite({min:bottom , max:-70 })){
				meteoro.style.bottom = bottom + "px"
			
			return bottom;			
		}else{
	    	document.querySelector(`#Meteoro${idMeteoro}`).remove()
			clearInterval(timerMeteoro)
			
			return bottom
		}	
	}		
}