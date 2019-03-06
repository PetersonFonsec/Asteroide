// ------------- Função que cria Planetas aleatoriamente ------------
function gerarPlanetas(idPlaneta,widthTela,heightTela){

  let borda = widthTela - 30;
	let Left = Math.floor( Math.random() * borda + 1) 
  let planeta = Math.floor( Math.random() * 3 + 1) 
  
  let Planetas = document.createElement("img")
      Planetas.criar({
        src   :`img/planetas/planeta${planeta}.png`,
        classe:"Planetas",
        id    :`Planetas${idPlaneta}`,
        left  :`${Left}px`
      })

  let bottomPlanetas = heightTela;
  let timerPlanetas = setInterval( () => { bottomPlanetas = deserPlanetas(bottomPlanetas,idPlaneta,timerPlanetas,heightTela); },20) 

}
// ------------- Chama a função que faz os Planetas deserem ------------
function deserPlanetas(bottomPlanetas,idPlaneta,timerPlanetas,heightTela){
  let config = JSON.parse(sessionStorage.getItem("config"))
  
  bottomPlanetas -= parseInt(config.dificuldade)

  if ( limite.limite({min:bottomPlanetas , max:-40 }) ) {
    let Planetas = document.querySelector(`#Planetas${idPlaneta}`).style.bottom = `${bottomPlanetas}px`
    return bottomPlanetas

  }else{
    let Planetas = document.querySelector(`#Planetas${idPlaneta}`).remove()
    clearInterval(timerPlanetas)
    
    bottomPlanetas = heightTela
    return bottomPlanetas
  }
}