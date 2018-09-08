// ------------- Função que pega um objeto e retorna um array com a posisao ------------
function posisao(obj){
	let objeto = document.querySelector(obj)

	let posisaoObj  = objeto.posisao() 

	let width  = parseFloat(objeto.width - 20)
	let height = parseFloat(objeto.height - 20)

	return	[ 		
				[posisaoObj.left, posisaoObj.left + width],
				[posisaoObj.top,posisaoObj.top + height]		
			];	
}

// ------------- Função que verifica se houve a colisao entre dois objetos ------------
function verificaColisao(obj1, obj2) {

  let x1 = obj1[0] < obj2[0] ? obj1 : obj2;
  let x2 = obj1[0] < obj2[0] ? obj2 : obj1;

  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

// ------------- Função que verifica se houve a colisao entre meteoro e a nave ------------
function ColisaoMeteoroNave(id){

  let nave = posisao("#nave");
  let Meteoro = posisao(`#Meteoro${id}`);

  let colisaoHorizontal = verificaColisao(Meteoro[0], nave[0]);
  let colisaoVertical = verificaColisao(Meteoro[1], nave[1]);
  let colidiu = colisaoHorizontal && colisaoVertical;
  
  if (colidiu) {
  	gameOver();
  }

}

// ------------- Função que verifica se o meteoro foi acertado por um tiro ------------
function ColisaoMeteoroTiro(IdMeteoro){
	let objTiro = document.querySelectorAll(".tiro");
	
	objTiro.forEach(() => {
		for (var i = 0; i <= objTiro.length - 1; i++) {

			let tiro = posisao(`#${objTiro[i].attributes.id.textContent}`);//esse codigo todo é só para mandar o id
			let Meteoro = posisao(`#Meteoro${IdMeteoro}`);
			
			let colisaoHorizontal = verificaColisao(Meteoro[0], tiro[0]);
			let colisaoVertical = verificaColisao(Meteoro[1], tiro[1]);
			let colidiu = colisaoHorizontal && colisaoVertical;

			if (colidiu) {
				morteMeteoro(IdMeteoro);
			} 
		}

	});	
}