// ------------- Função que cria estrelas  em posisoes aleatorias aleatoriamente ------------
function nebulosa(idStar,widthTela,heightTela){

  let Left = Math.floor( Math.random() * widthTela + 1) ;

  let estrelas = document.createElement("img");
      estrelas.criar({
        src    : "img/star/star.png",
        id     : `star${idStar}`,
        classe : `star`,
        left   : `${Left}px`
    })
  
  let bottomStar = heightTela;
  let timerStar = setInterval( () => { bottomStar = deserStar(bottomStar,idStar,timerStar); },20); 

}
// -------------       Função que faz as estrelas deserem      ---------------------------
function deserStar(bottomStar,idStar,timerStar,heightTela){
 bottomStar -= 10;

  if ( LimiteStar(bottomStar) ){
    let estrelas = document.querySelector("#star"+idStar).style.bottom = bottomStar + "px";
    return bottomStar;

  }else{
    let estrelas = document.querySelector("#star"+idStar).remove();
    clearInterval(timerStar);
    
    bottomStar = heightTela;
    return bottomStar;

  }
}
// ------------- Função que limita até onde as estrelas podem ir ----------------------
function LimiteStar(bottomStar){
  if(bottomStar >= -10) {
    return true;
  }else{
    return false;
  }
}