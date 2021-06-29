function pointsPer48(ppg, mpg) {
  let ppgExtra= ((ppg / mpg) * 48).toFixed(1)
  let pExtra = Number(ppgExtra)
  if(ppg && mpg > 0){
    return pExtra
  }else{
    return 0
  }
}