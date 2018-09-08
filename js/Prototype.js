Object.prototype.posisao = function(){
    //não estou usando arrow function pois perde o this contesto
    let posisao = {}
    posisao.top  = this.offsetTop
    posisao.left = this.offsetLeft

    return posisao
}
Object.prototype.criar = function(){
    
}