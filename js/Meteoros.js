// ------------- Função que cria Meteoros com posisões aleatorias -----------------
function gerarMeteoro(idMeteoro,widthTela,heightTela){
   
  	let borda = widthTela - 100;
	let meteoro = Math.floor( Math.random()  * borda + 1) ;

	let estrelas = document.createElement("img");
      estrelas.src = "img/meteoro/Meteoro1.png";
      estrelas.setAttribute("id","Meteoro"+idMeteoro);
      estrelas.classList.add("meteoro");
      estrelas.style.left = meteoro+"px";
      estrelas.dataset.colisoes = "0";

 	document.getElementById("Nascimento").appendChild(estrelas); 

	// ------------- Chama a função que faz os Meteoros deserem -------------------
	let BottomMeteoro = heightTela;
	let timerMeteoro = setInterval(() => {BottomMeteoro = deserMeteoro(BottomMeteoro,idMeteoro,timerMeteoro,heightTela); },100);

}
// ------------- Função que Faz o meteoro deserem ------------------
function deserMeteoro(bottom,idMeteoro,timerMeteoro,heightTela){
	bottom -= 10;
	try{//Gambiarra que eu fiz para verificar se o meteoro foi atingido		
		ColisaoMeteoroNave(idMeteoro);
		ColisaoMeteoroTiro(idMeteoro);
		bottom = rotinaMeteoro(idMeteoro,bottom,timerMeteoro,heightTela);
		return bottom;
		
	}catch (e){
		bottom = rotinaMeteoro(idMeteoro,bottom,timerMeteoro,heightTela);
		return bottom;
	}	
}
// ------------- rotina do meteoro ----------------------
function rotinaMeteoro(idMeteoro,bottom,timerMeteoro){
	let meteoro = document.querySelector("#Meteoro"+idMeteoro);
		
	if( meteoro != null){//Primeiro verifica se o meteoro existe
		if (LimiteMeteoro(bottom)){
				meteoro.style.bottom = bottom + "px";
			
			return bottom;			
		}else{
	    	document.querySelector("#Meteoro"+idMeteoro).remove();
			clearInterval(timerMeteoro);
			
			return bottom;
		}	
	}		
}
// ------------- Função que limita até onde os meteoros iram deser ----------------------
function LimiteMeteoro(bottom){
	if(bottom >= -70) {
		return true;
	}else{
		return false;
	}
}