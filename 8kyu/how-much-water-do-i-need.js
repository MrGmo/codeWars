function howMuchWater(water, load, clothes){
  
  if(clothes > load * 2){
    return ('Too much clothes')
  }else if(load > clothes){
    return ('Not enough clothes')
  }else{
    let variable = water * 1.1**Math.abs(load - clothes)
    variable = variable.toFixed(2)
    return Number(variable)
     }
  }