function uniTotal(a){
  let arr = []
  let str = a.split('')
  for(let i = 0; i < a.length; i++){
    arr.push(a.charCodeAt(i))
  }
  return arr.reduce((a, b) => a+b, 0)
}