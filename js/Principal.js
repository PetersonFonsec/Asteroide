function Game_init(){
  // ------------- variavel usada para saber a largura da tela ----------------
 
  let Tela  = document.querySelector(".tela");
  let widthTela  = Tela.clientWidth;
  let heightTela = Tela.clientHeight;
  
  // ------------- Chama a função que ler as teclas presionadas ---------------
  usarTeclado(widthTela,heightTela);

  // ------------- Chama a função que gera estrelas aleatoriamente ------------
  let IdStar = 0;
  let bornStar = setInterval(() => {IdStar++;nebulosa(IdStar,widthTela,heightTela);},200);	
  // ------------- Chama a função que gera estrelas aleatoriamente ------------
  let IdPlaneta = 0;
  let bornPlaneta = setInterval(() => {IdPlaneta++;gerarPlanetas(IdPlaneta,widthTela,heightTela);},1000);	

  // ------------- Chama a função que gera meteoros com IDs diferentes --------
  let IdMeteoro = 0;
  let bornMeteoro = setInterval(() => {IdMeteoro++;gerarMeteoro(IdMeteoro,widthTela,heightTela);},3000);
}