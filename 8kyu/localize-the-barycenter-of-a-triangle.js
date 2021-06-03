function barTriang(p1, p2, p3){
  let xValue = (p1[0] + p2[0] + p3[0]) / 3
  let yValue = (p1[1] + p2[1] + p3[1]) / 3
    if(Number.isInteger(xValue) && Number.isInteger(yValue)){
      return [xValue, yValue]
    }else{
      let x = Number(xValue.toFixed(4))
      let y =  Number(yValue.toFixed(4))
      return [x, y]
  }
}