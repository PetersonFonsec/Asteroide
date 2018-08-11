function gerarTiro(c,id,bottom,heightTela){
  let btiro = bottom + 60 ;
  let Tiro  = document.createElement("img");
      Tiro.src = "img/tiro/Tiro.png";
      Tiro.classList.add("tiro");
      Tiro.setAttribute("id" ,"tiro"+id);
      Tiro.style.left = ( c + 20 ) + "px";
      Tiro.style.bottom = btiro + "px";

  document.getElementById("Nascimento").appendChild(Tiro);

  let timer = setInterval(() => {btiro = subirTiro(id,btiro ,timer,heightTela);}, 30);
     
}

// ------------- Função que Faz o tiro subir --------------------
function subirTiro(Id,marginBottom,Interval,heightTela){
  marginBottom += 30;  

  if (limiteTiro(marginBottom,heightTela)){
    document.querySelector("#tiro"+Id).style.bottom = marginBottom + "px";
    return marginBottom;

  }else{
    document.querySelector("#tiro"+Id).remove();
    clearInterval(Interval); 

    marginBottom = heightTela;
    return marginBottom;

  }
}

// ------------- Função que limita até onde o tiro deve ir ------------
function limiteTiro(top,heightTela){
  if(top < heightTela){
    return true;
  }else{
    return false;
  }
}
