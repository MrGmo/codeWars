function findOutlier(integers){
  let odd = []
  let even = []
  
  for(let i = 0; i < integers.length; i++){
    if(integers[i] % 2 !== 0){
      odd.push(integers[i])
    }else{
      even.push(integers[i])
    }
  }
    if(odd.length > even.length){
      return Number(even)
    }else{
      return Number(odd)
    }
}