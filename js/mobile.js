function usarBotoes(widthTela,heightTela){
    document.querySelector('#controle').style.display = 'block'

    let marginLeft =  parseInt( (widthTela / 2) );
    let bottom =  parseInt(( heightTela / 100) * 20);
    let IdTiro = 0;
  
    document.addEventListener('click', btn => {
       let btnClicado = btn.target.dataset.tecla

       switch  (btnClicado){
           case 'a':
                marginLeft = movimentaHorizontalmenteNave('esquerda',marginLeft,widthTela)
                break;

            case 'd':
                marginLeft = movimentaHorizontalmenteNave('direita',marginLeft,widthTela)
                break;

            case 'espaco':
                IdTiro++
                gerarTiro(marginLeft,IdTiro,bottom,heightTela)      
                break;
        }
    })
  }