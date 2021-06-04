function findUniq(arr){
  let obj = {}
  
  for(let i = 0; i < arr.length; i++){
    let number = arr[i]
    if(obj[number] > 0){
      obj[number]++
    }else{
      obj[number] = 1
    }
  }
  for(let num in obj){
    if(obj[num] === 1){
      return parseFloat(num)
    }
  }
}