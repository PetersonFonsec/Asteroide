const gerarMeteoro = idMeteoro => {
	const tamanhoImg = 100
  	const borda = widthTela - tamanhoImg
  	const margin = 1
	const largura = Math.floor( ( Math.random()  * borda ) + margin ) 

	const src = "img/meteoro/Meteoro1.png"
	const id  = `Meteoro${ idMeteoro }`
	const classe = `meteoro`
	const left = `${ largura }px`
	
	criar( { src, id, classe, left } ).dataset.colisoes = 0

	let posisaoMeteoro = heightTela

	let timer = setInterval( () => { 

		if( !pause ) 
			posisaoMeteoro = rotinaMeteoro( posisaoMeteoro, id, timer )
		
	}, 40)
}

const rotinaMeteoro = ( posisaoAtual, id, timer ) => {
	posisaoAtual -= parseInt( config.dificuldade )
	
	ColisaoMeteoroNave( id )
	ColisaoMeteoroTiro( id )
	
	return  moverMeteoro( id, posisaoAtual, timer )
}

const moverMeteoro = ( id, pixels, timer ) => {
	const seletor = `#${ id }`
	let meteoro = pegarElemento( seletor )
		
	if( meteoro ){
		limite( pixels , -70 ) 
			? moverVertical( seletor, `${ pixels }px` )
			: removerElemento( seletor, timer )
	}	

	return pixels		
}

const morteMeteoro = IdMeteoro => {
	const seletor = `#${ IdMeteoro }`

	let meteoro  = pegarElemento( seletor )

	if( meteoro ) {

		let colisoes = meteoro.dataset.colisoes

		colisoes++;

		if ( colisoes >= 10){
			trocarImg( seletor, "img/meteoro/Meteoro3.png" )
			
			let timeOut = setTimeout(  () => {
				acresentarPontuacao()
				removerElemento( seletor, timeOut )
			}, 500);

		}else if( colisoes > 0 ){
			trocarImg( seletor, "img/meteoro/Meteoro2.png" )
		}

		meteoro.dataset.colisoes = colisoes	
	}
}
