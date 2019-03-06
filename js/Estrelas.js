// ------------- Função que cria estrelas  em posisoes aleatorias aleatoriamente ------------
function nebulosa(idStar,widthTela,heightTela){

  let Left = Math.floor( Math.random() * widthTela + 1) 

  let estrelas = document.createElement("img")
      estrelas.criar({
        src    : "img/star/star.png",
        id     : `star${idStar}`,
        classe : `star`,
        left   : `${Left}px`
    })
  
  let bottomStar = heightTela;
  let timerStar = setInterval( () => { bottomStar = deserStar(bottomStar,idStar,timerStar); },20)

}
// -------------       Função que faz as estrelas decerem      ---------------------------
function deserStar(bottomStar,idStar,timerStar,heightTela){
  let config = JSON.parse(sessionStorage.getItem("config"))

  bottomStar -= parseInt(config.dificuldade)

  if ( limite.limite({min:bottomStar , max:-10 }) ){
    let estrelas = document.querySelector(`#star${idStar}`).style.bottom = `${bottomStar}px`
    return bottomStar

  }else{
    let estrelas = document.querySelector(`#star${idStar}`).remove()
    clearInterval(timerStar)
    
    bottomStar = heightTela
    return bottomStar

  }
}