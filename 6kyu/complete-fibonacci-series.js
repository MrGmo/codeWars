function fibonacci(num){
  let a = 0
  let b = 1
  let arr = [0,1]
  let sum;
   if(num <= 0){
     return []
   }else{
     for(let i = 2; i < num; i++){
       sum = a + b
       a = b
       b = sum
       arr.push(sum)
     }
   }
     return arr
 }  