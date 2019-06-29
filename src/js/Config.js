const dificuldade = () => pegarElemento( "#nivelDificuldade" ).value
const mobile = () => pegarElemento( "#mobile" ).checked
const audio  = () => pegarElemento( "#audio" ).checked

const chave = "config"

const setConfig = () => {
	let config = {}

	config.dificuldade = dificuldade()
	config.mobile = mobile()
	config.audio  = audio()

	colocarDadoLocal( chave , JSON.stringify( config ) )
}

const carregaConfig = () => {
	let config =  JSON.parse( pegarDadoLocal( chave ) ) 

	if( config ){
		pegarElemento( "#nivelDificuldade" ).value = config.dificuldade
		pegarElemento( "#mobile" ).checked = config.mobile
		pegarElemento( "#audio" ).checked  = config.audio
	}
}

const setConfigPadrao = () => {
	if( !pegarDadoLocal( chave ) ){
		
		let config = {}

		config.dificuldade = 10
		config.mobile 	   = false
		config.audio  	   = false

		colocarDadoLocal( chave , JSON.stringify( config ) )	
	}	
}
