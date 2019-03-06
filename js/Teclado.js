function usarTeclado(widthTela,heightTela){
    
  let marginLeft =  parseInt( (widthTela / 2) );
  let bottom =  parseInt(( heightTela / 100) * 20);
  let IdTiro = 0;

  document.addEventListener('keydown', e => {//se quiser usar as setas use o keyup  
    if(e.key == 'a' || e.key == 'A'|| e.key == 'ArrowLeft'){
      // ------------- função que faz a nave andar de acordo com o parametro --------------------
      marginLeft = movimentaHorizontalmenteNave('esquerda',marginLeft,widthTela)

    }else if (e.key == 'd' || e.key == 'D'|| e.key == 'ArrowRight'){

      marginLeft = movimentaHorizontalmenteNave('direita',marginLeft,widthTela)

    }else if (e.key == 'w' || e.key == 'W'|| e.key == 'ArrowUp'){

      bottom = movimentaVerticalmenteNave('cima',bottom,heightTela)

    }else if (e.key == 's' || e.key == 'S'|| e.key == 'ArrowDown'){

      bottom = movimentaVerticalmenteNave('baixo',bottom,heightTela)

    }else if (e.key == 'Enter'){
      alert('Finge que isso é um pause decente (eu ainda vou fazer)')

    }else if (e.key == ' '){
      // ------------- função que faz a nave atirar --------------------
      IdTiro++
      gerarTiro(marginLeft,IdTiro,bottom,heightTela)      
    }
  })
}