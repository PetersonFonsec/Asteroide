const gameOver = () => {
	const seletor = "#nave"
	const nave = pegarElemento( seletor )
	let estado = 0	

	const explosao = setInterval( () => {
		estado++
		
		if( estado >= 5 ){
			clearInterval( explosao )

			setTimeout(()=>{
				const pontos = pegarElemento( "#contadorMeteoro" ).innerHTML
				setHistoricoPontos( pontos )

			},500);			
		}

		trocarImg( seletor , `img/naveEspecial/NaveDestruida${ estado }.png`)
		return estado
	},300)
}