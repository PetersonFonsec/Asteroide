const pegarElemento = seletor => document.querySelector( seletor )

const pegarTodosElementos = seletor => document.querySelectorAll( seletor )

const pegarDadoLocal = chave => sessionStorage.getItem( chave )

const colocarDadoLocal = ( chave, valor ) => sessionStorage.setItem( chave , valor )

const alterarCss = ( seletor, prop, valor ) => 
  	pegarElemento( seletor ).style[prop] = valor

const removerClass = ( seletor, classe ) => 
    pegarElemento( seletor ).classList.remove( classe )

const addClass = ( seletor, classe ) => 
    pegarElemento( seletor ).classList.add( classe )

const alterarProp = ( seletor, prop, valor ) => 
    pegarElemento( seletor ).setAttribute( prop, valor )

const trocarImg = ( seletor,  valor ) => 
    alterarProp( seletor, 'src', valor )

const limite = ( min, max ) => min >= max

const moverVertical = ( seletor,  valor ) => 
	alterarCss( seletor, 'bottom', valor )

const moverHorizontal = ( seletor,  valor ) => 
	alterarCss( seletor, 'left', valor )

const removerElemento = ( seletor, timer ) => {
    const el = pegarElemento( seletor )
    
    if ( el ){
        pegarElemento( seletor ).remove() 
        clearInterval( timer )
    }
}  

const criar = obj => {
    const img = document.createElement( "img" )
    
    img.src = `${obj.src}`
    img.setAttribute( "id", `${obj.id}` )
    img.classList.add( `${obj.classe}` )
    img.style.left = `${obj.left}` 

 	pegarElemento( "#Nascimento" ).appendChild( img ) 

 	return img
}