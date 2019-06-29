const usarTeclado = () => {
  let esquerda = parseInt( widthTela / 2 )
  let baixo = parseInt( ( heightTela / 100 ) * 20 )
  let IdTiro = 0

  const escutarTeclas =  event => {
    const tecla = event.key.toUpperCase()

    const left   = pixels => movimentaHorizontalmenteNave( 'esquerda', pixels )
    const right  = pixels => movimentaHorizontalmenteNave( 'direita', pixels )
    const up     = pixels => movimentaVerticalmenteNave( 'cima', pixels )
    const bottom = pixels => movimentaVerticalmenteNave( 'baixo', pixels )

    if( tecla === 'A'|| tecla === 'ARROWLEFT' ){
      if( !pause ) esquerda = left( esquerda )

    }else if ( tecla === 'D'|| tecla === 'ARROWRIGHT' ){
      if( !pause ) esquerda = right( esquerda )

    }else if ( tecla === 'W'|| tecla === 'ARROWUP' ){
      if( !pause ) baixo = up( baixo )

    }else if ( tecla === 'S'|| tecla === 'ARROWDOWN' ){
      if( !pause ) baixo = bottom( baixo )

    }else if ( tecla === 'ENTER' ){
      pause = !pause
      togglePause( pause )

    }else if ( tecla === ' ' ){
      if( !pause ) {
        IdTiro++
        gerarTiro( esquerda, IdTiro, baixo )              
      }
    }
  }

  document.addEventListener( 'keydown', escutarTeclas )
}

