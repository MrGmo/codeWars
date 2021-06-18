function range(s, e){
  let arr = []
  if(s === e){
    return []
  }else{
    for(let i = s+1; i < e; i++){
      arr.push(i)
    }
  }
  return arr
};