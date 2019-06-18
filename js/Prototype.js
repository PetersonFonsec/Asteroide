Object.prototype.posisao = function(){
    let posisao = {}
        posisao.top  = this.offsetTop
        posisao.left = this.offsetLeft

    return posisao
}

Object.prototype.colisao = function( obj1, obj2 ){
    
    let x1 = obj1[0] < obj2[0] ? obj1 : obj2
    let x2 = obj1[0] < obj2[0] ? obj2 : obj1
    
    return x1[1] > x2[0] || x1[0] === x2[0]      
}