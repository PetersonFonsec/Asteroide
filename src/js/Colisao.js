const posisao =  obj => {
	let objeto = pegarElemento( obj )

	if( !objeto ) return false

	let posisao  = objeto.posisao() 

	let width  = parseFloat( objeto.width - 20 )
	let height = parseFloat( objeto.height - 20 )

	return	[ 		
				[ posisao.left, posisao.left + width ],
				[ posisao.top, posisao.top + height ]		
			]	
}

const quandoColidir = ( el1 , el2, callBack, ...params ) => {
  	const colisao = 0

	let colisaoVertical   = colisao.colisao( el1[1], el2[1] )
	let colisaoHorizontal = colisao.colisao( el1[0], el2[0] )

	if ( colisaoHorizontal && colisaoVertical ) callBack( ...params )
}

const ColisaoMeteoroNave = id => {
  const nave = posisao( "#nave" )
  const Meteoro = posisao( `#${ id }` )
  
  if( Meteoro ) quandoColidir( nave, Meteoro, gameOver )  
}

const ColisaoMeteoroTiro = IdMeteoro => {
	let tiros = pegarTodosElementos( ".tiro" )
	
	tiros.forEach( tiro => {
		for ( var i = 0; i <= tiros.length - 1; i++ ) {

			let Tiro = posisao( `#${ tiro.attributes.id.textContent }` )
			let Meteoro = posisao( `#${ IdMeteoro }` )
			
			if( Meteoro ) quandoColidir( Tiro, Meteoro, morteMeteoro, IdMeteoro )
		}
	})	
}