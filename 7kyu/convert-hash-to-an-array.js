7kyu - Convert Hash to an Array

function convertHashToArray(hash){
  let arr = Object.entries(hash)
  return arr.sort((a, b) => {
    if(a > b){
      return 1
    }else if(b > a){
      return -1
    }else{
      return 0
    }
  })
}
