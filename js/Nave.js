// ------------- Função que limita o movimento horizontal da nave ------------
function movimentaHorizontalmenteNave(direcao,c,limite){
  if(direcao == 'esquerda'){
    c += -70;

    if (limiteHorizontalNave(c,limite)){
      document.getElementById('nave').style.left = c+"px";  
    }else{
      c += 70 ;
    }
    return c;   
  }else if(direcao == 'direita'){
    c += 70;
    if (limiteHorizontalNave(c,limite)){
      document.getElementById('nave').style.left = c+"px";  
    }else{
      c -= 70 ;
    }
    return c;
  }
}
// ------------- Função que limita o movimento horizontal da nave ------------
function movimentaVerticalmenteNave(direcao,bottom,heightTela){
  if(direcao == 'cima'){
    bottom += 70;

    if (limiteVerticalNave(bottom,heightTela)){
      
      document.getElementById('nave').style.bottom = bottom+"px";  
    
    }else{

      bottom += -70;
    }
    return bottom;   

  }else if(direcao == 'baixo'){
    bottom -= 70;
    
    if (limiteVerticalNave(bottom,heightTela)){
      
      document.getElementById('nave').style.bottom = bottom+"px";  
    
    }else{
      
      bottom += 70;
    
    }
    return bottom;
  }
}
// ------------- Função que limita o movimento horizontal da nave ------------
function limiteHorizontalNave(c,limite) {
 	if(c >= limite ) {
		return false;
	}else if(c <= -50){
		return false;
	}else{
		return true;
	}
}
// ------------- Função que limita o movimento vertical da nave ------------
function limiteVerticalNave(bottom,heightTela) {
  if(bottom >= heightTela ) {
    return false;
  }else if(bottom <= -40){
    return false;
  }else{
    return true;
  }
}