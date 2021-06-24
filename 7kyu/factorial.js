function factorial(n){
  if( n > 0){
    return factorial(n-1) * n
  }else{
    return 1
  }
}