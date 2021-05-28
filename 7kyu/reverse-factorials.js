function reverseFactorial(num) {
  let answ;
  for (let i=1;;i++)
  {
   if (factorial(i)===num) {answ=`${i}!`;break}
   if (factorial(i)>num)   {answ=`None`;break}
  }
  return answ 
}

function factorial(n){
    let arr=[];
    for (let i=1;i<=n;i++)
    arr.push(i)
    return arr.reduce((a,b)=>a*b,1)
}