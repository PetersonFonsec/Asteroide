const nebulosa = idStar => {
  let Left = Math.floor( Math.random() * widthTela + 1) 
  
  const src = "img/star/star.png"
  const id  = `star${idStar}`
  const classe = `star`
  const left = `${Left}px`

  cicloVida( src, id, classe, left )
}

const gerarPlanetas = idPlaneta => {

  let borda = widthTela - 30;
  let Left = Math.floor( Math.random() * borda + 1) 
  let planeta = Math.floor( Math.random() * 3 + 1) 
  
  const src = `img/planetas/planeta${planeta}.png`
  const id  = `Planetas${idPlaneta}`
  const classe = "Planetas"
  const left = `${Left}px`

  cicloVida( src, id, classe, left )
}
