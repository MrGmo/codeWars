function longestConsec(arr, k){
  let max = ""
  let temp = ""
  if(arr.length === 0 || k > arr.length || k <= 0){
    return ""
  }

  for(let i = 0; i < arr.length; i++){
    temp = arr.slice(i, i+k)

    if(temp.join('').length > max.length){
      max = temp.join('')
    }
  }
    return max
}