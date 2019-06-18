const cicloVidaBackGound = ( src, id, classe, left, interval= 20 ) => {
	const el = criar( { src, id, classe, left } )

	let posisao = heightTela
	let timer  = setInterval( () => posisao = limitarElemento( posisao, id, timer ) , interval )

	return el
}

const limitarElemento = ( posisaoAtual, id, timer ) => {
	
	posisaoAtual -= parseInt( config.dificuldade )

	limite(posisaoAtual , -10 ) 
		? moverVertical( `#${ id }`, `${ posisaoAtual }px` ) 
		: removerElemento( `#${ id }`, timer )
	
	return posisaoAtual
}