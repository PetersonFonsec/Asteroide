const tamanhoMovimento = 70

const limitaNave = ( pixels, limite ) => pixels <= limite && pixels >= -20 

const menosMovimento = valor => valor -= tamanhoMovimento

const maisMovimento = valor => valor += tamanhoMovimento

const fluxoNatural = ( pixels, direcao, comparacao ) => 
    direcao === comparacao
      ? menosMovimento( pixels ) 
      : maisMovimento( pixels )

const fluxoInverso = ( pixels, direcao, comparacao ) => 
    direcao === comparacao
      ? maisMovimento( pixels )
      : menosMovimento( pixels ) 
  
const movimentaHorizontalmenteNave = ( direcao, left ) => {  
  left = fluxoNatural( left, direcao, 'esquerda' )

  const permitirMovimento = limitaNave( left, widthTela )
  
  if( !permitirMovimento  )
    left = fluxoInverso( left, direcao, 'esquerda' )  
    
  moverHorizontal( '#nave', `${ left }px`)  

  return left  
}

const movimentaVerticalmenteNave = ( direcao, bottom ) =>{
  bottom = fluxoNatural( bottom, direcao, 'baixo' )

  const permitirMovimento = limitaNave( bottom, parseInt( heightTela * .9) )
  
  if( !permitirMovimento )
    bottom = fluxoInverso( bottom, direcao, 'baixo' )
    
  moverVertical('#nave', `${ bottom }px`)  

  return bottom;
}