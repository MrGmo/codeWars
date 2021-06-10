function first(arr, n){
  if(n === 0){
    return []
  }else if(!n){
    return [arr[0]]
  }else{
    return arr.slice(0, n)
  }
}