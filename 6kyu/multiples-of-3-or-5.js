function solution(number){
  let arr = []
  if(number <= 0){
    return 0
  }else{
  for(let i = 0; i < number; i++){
    if(i % 15 === 0){
      arr.push(i)
    }else if(i % 5 === 0){
      arr.push(i)
    }else if(i % 3 === 0){
      arr.push(i)
    }
   }
  }
  return arr.reduce((a, b) => a + b)
}