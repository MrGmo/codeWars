function replicate(t, n){
  if(t <= 0) return [];
  return [n, ...replicate(t-1, n)]
}