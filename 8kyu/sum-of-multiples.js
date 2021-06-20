function sumMul(n,m){
  let arr = []
  
  if(n === 0 || m === 0 || n < 0 || m < 0){
      return 'INVALID'
  }else{
      for(let i = n; i <= m; i=i+n){
      arr.push(i)
  }
      return arr.reduce((a, b) => a + b, 0)
}
}