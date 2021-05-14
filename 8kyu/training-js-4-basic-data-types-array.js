8kyu - Training JS #4: Basic Data Types - Array
function getLength(arr, num){
  return arr.length
}
function getFirst(arr){
  return arr[0]
}
function getLast(arr){
  return arr.pop()
}
function pushElement(arr, num){
  arr = [...arr]
  arr.push(num)
  return arr
}
function popElement(arr){
  return arr.slice(0,-1)
}

