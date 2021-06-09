function sumNestedNumbers(arr){
  let arr1 = [];
  let flat=(arr,power=0) => {
  power+=1
  return arr.map(v=>Array.isArray(v)?flat(v,power):arr1.push([v,power]))
}
  flat(arr)
  return arr1.map(v=>Math.pow(v[0],v[1])).reduce((a,b)=>a+b,0)
}