Object.prototype.posisao = function(){
    //não estou usando arrow function pois perde o this contesto
    let posisao = {}
    posisao.top  = this.offsetTop
    posisao.left = this.offsetLeft

    return posisao
}
Object.prototype.criar = function(json){
    this.src = `${json.src}`
    this.setAttribute("id",`${json.id}`)
    this.classList.add(`${json.classe}`)
    this.style.left = `${json.left}` 

 	document.getElementById("Nascimento").appendChild(this) 
}
Object.prototype.limite = function(json){
    let result = json.min >= json.max ? true : false
    return result
}
Object.prototype.colisao = function(obj1,obj2){
    
    let x1 = obj1[0] < obj2[0] ? obj1 : obj2;
    let x2 = obj1[0] < obj2[0] ? obj2 : obj1;
    
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;      
}