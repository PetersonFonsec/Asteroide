// ------------- Função que cria Planetas aleatoriamente ------------
function gerarPlanetas(idPlaneta,widthTela,heightTela){

  let borda = widthTela - 30;
	let Left = Math.floor( Math.random() * borda + 1) ;
  let planeta = Math.floor( Math.random() * 3 + 1) ;
  
  let Planetas = document.createElement("img");
      Planetas.src = `img/planetas/planeta${planeta}.png`;
      Planetas.classList.add("Planetas");
      Planetas.setAttribute("id","Planetas"+idPlaneta);
      Planetas.style.left = Left+"px";

  document.getElementById("Nascimento").appendChild(Planetas);

  let bottomPlanetas = heightTela;
  let timerPlanetas = setInterval( () => { bottomPlanetas = deserPlanetas(bottomPlanetas,idPlaneta,timerPlanetas,heightTela); },20); 

}
// ------------- Chama a função que faz os Planetas deserem ------------
function deserPlanetas(bottomPlanetas,idPlaneta,timerPlanetas,heightTela){
 bottomPlanetas -= 10;

  if ( LimitePlanetas(bottomPlanetas,heightTela) ){
    let Planetas = document.querySelector("#Planetas"+idPlaneta).style.bottom = bottomPlanetas + "px";
    return bottomPlanetas;

  }else{
    let Planetas = document.querySelector("#Planetas"+idPlaneta).remove();
    clearInterval(timerPlanetas);
    
    bottomPlanetas = heightTela;
    return bottomPlanetas;

  }
}
// ------------- Função que limita os Planetas ----------------------
function LimitePlanetas(bottomPlanetas){
  if(bottomPlanetas >= -40) {
    return true;
  }else{
    return false;
  }
}