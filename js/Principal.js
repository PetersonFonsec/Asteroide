const Tela  =  pegarElemento( ".tela" )
const widthTela  = Tela.clientWidth
const heightTela = Tela.clientHeight
const config =  JSON.parse( sessionStorage.getItem( "config" ) ) 

const Game_init = () =>{
  const init = ( i, callback, time, ...params ) =>
  	setInterval( () => i++ && callback(i, ...params ) , time )

  config.mobile ? usarBotoes() : usarTeclado()
  
  init( 0, nebulosa, 200 )

  init( 0, gerarPlanetas, 1000 )

  init( 0, gerarMeteoro, 3000 )
}