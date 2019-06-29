const togglePause = pausado => {
	const seletor = '.veu'
	const classes = [ ...pegarElemento( seletor ).classList ]
	const classe  = 'mostrar'

	const mostrarTelaPause = () =>     addClass( seletor, classe ) 
	const escondeTelaPause = () => removerClass( seletor, classe ) 

	pausado ? mostrarTelaPause()
		    : escondeTelaPause()
} 