function setConfig(){
	let dificuldade = document.querySelector("#nivelDificuldade").value
	let mobile      = document.querySelector("#mobile").checked
	let audio       = document.querySelector("#audio").checked

	let config = {}

	config.dificuldade = dificuldade
	config.mobile = mobile
	config.audio  = audio

	sessionStorage.setItem("config" , JSON.stringify(config) )
}
function setCamopConfig(){
	let config = JSON.parse(sessionStorage.getItem('config'))

	if(config){
		
		document.querySelector("#nivelDificuldade").value = config.dificuldade
		document.querySelector("#mobile").checked = config.mobile
		document.querySelector("#audio").checked  = config.audio
	}
}
function setConfigPadrao(){
	if(!sessionStorage.getItem('config')){
		
		let config = {}

		config.dificuldade = 10
		config.mobile 	   = false
		config.audio  	   = false

		sessionStorage.setItem("config" , JSON.stringify(config) )	
	}	
}