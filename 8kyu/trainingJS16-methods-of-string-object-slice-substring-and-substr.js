function cutIt(arr){
  let length = Math.min.apply(Math, arr.map(function(str) {return str.length}))
  return arr.map(x => x.slice(0, length))
}