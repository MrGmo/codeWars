function twoSort(s){
  const sorted = s.sort((a, b) => {
    if(a > b){
      return 1
    }else if(b > a){
      return -1
    }else{
      return 0
    }
  })
  
  const answer = sorted[0].split('')
    return answer.join('***')
}