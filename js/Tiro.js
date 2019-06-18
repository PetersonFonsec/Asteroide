const gerarTiro = ( posisaoNave, Id, pixels ) => {
  const tamanhoImg = 60
  
  let posisaoTiro = pixels + tamanhoImg

  const src = "img/tiro/Tiro.png"
  const id  = `tiro${ Id }`
  const classe = `tiro`
  const left = `${ posisaoNave + 20 }px`
  
  criar( { src, id, classe, left } ).style.bottom = posisaoTiro + "px";

  let timer = setInterval( () => posisaoTiro = moverTiro( id, posisaoTiro, timer ) , 30 )
}

const moverTiro = ( Id, posisaoAtualTiro, Interval ) => {
  
  posisaoAtualTiro += 30 

  !limite( posisaoAtualTiro, heightTela ) 
    ? moverVertical( `#${ Id }`, `${ posisaoAtualTiro }px` )
    : removerElemento( `#${Id}`, Interval ) 

  return posisaoAtualTiro;
}