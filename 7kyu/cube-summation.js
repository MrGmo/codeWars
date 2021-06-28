function cubeSum(...args){
  let arr = [...args]
  let arr1 = arr.sort((a, b) => a - b)
  
  let newArr = []
  
  for(let i = arr1[0]+1; i <= arr1[1]; i++){
    newArr.push(i)
  }
    let sumArr = newArr.map(a => a**3)
    return sumArr.reduce((a, b) => a + b, 0)
}