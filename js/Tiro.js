function gerarTiro(posisaoNave,id,bottom,heightTela){
  let btiro = bottom + 60 ;
  let Tiro  = document.createElement("img");
      Tiro.criar({
        src    : "img/tiro/Tiro.png",
        id     : `tiro${id}`,
        classe : `tiro`,
        left   : `${( posisaoNave + 20 )}px`
      })

  Tiro.style.bottom = btiro + "px";
  let mobile = JSON.parse(sessionStorage.getItem(`config`)).mobile

  let timer = setInterval(() => {
    btiro = mobile ? subirTiroMobile(id,btiro ,timer,heightTela):subirTiro(id,btiro ,timer,heightTela);
  }, 30);     
}

// ------------- Função que Faz o tiro subir --------------------
function subirTiro(Id,marginBottom,Interval,heightTela){
  marginBottom += 30;  


  if ( !limite.limite({min:marginBottom , max:heightTela }) ){

    document.querySelector(`#tiro${Id}`).style.bottom = `${marginBottom}px`;
    return marginBottom;

  }else{
    document.querySelector(`#tiro${Id}`).remove();
    clearInterval(Interval); 

    marginBottom = heightTela;
    return marginBottom;

  }
}
function subirTiroMobile(Id,marginBottom,Interval,heightTela){
  marginBottom -= 30;  

  if ( !limite.limite({min:marginBottom , max:heightTela }) ){

      document.querySelector(`#tiro${Id}`).style.top = `${marginBottom}px`;
      
      return marginBottom;

  }else{
    document.querySelector(`#tiro${Id}`).remove();
    clearInterval(Interval); 

    marginBottom = heightTela;
    return marginBottom;
  }
}