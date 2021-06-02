function maxProduct(a) {
  var max = Math.max.apply(null, a)
  a.splice(a.indexOf(max), 1)
  var max2 = Math.max.apply(null, a)
return max * max2;
}