Object.prototype.posisao = function(){
    //não estou usando arrow function pois perde o this contesto
    let posisao = {}
    posisao.top  = this.offsetTop
    posisao.left = this.offsetLeft

    return posisao
}
Object.prototype.criar = function(json){
    this.src = `${json.src}`;
    this.setAttribute("id",`${json.id}`);
    this.classList.add(`${json.classe}`);
    this.style.left = `${json.left}`; 

 	document.getElementById("Nascimento").appendChild(this); 
}