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
// ------------- Função que verifica se houve a colisao entre meteoro e a nave ------------
function ColisaoMeteoroNave(id){

  let nave = posisao("#nave")
  let Meteoro = posisao(`#Meteoro${id}`)
  let colisao = 0
			
  if (colisao.colisao(nave[1],Meteoro[1]) && colisao.colisao(nave[0],Meteoro[0])) {
  	gameOver()
  }

}

// ------------- Função que verifica se o meteoro foi acertado por um tiro ------------
function ColisaoMeteoroTiro(IdMeteoro){
	let objTiro = document.querySelectorAll(".tiro")
	
	objTiro.forEach(() => {
		for (var i = 0; i <= objTiro.length - 1; i++) {

			let tiro = posisao(`#${objTiro[i].attributes.id.textContent}`)//esse codigo todo é só para mandar o id
			let Meteoro = posisao(`#Meteoro${IdMeteoro}`)
			
			let colisao = 0
			
			if (colisao.colisao(tiro[1],Meteoro[1]) && colisao.colisao(tiro[0],Meteoro[0])) {
				morteMeteoro(IdMeteoro)
			} 
		}

	})	
}