function solve(s){
  let numArr = []
  let nums = s.replace(/[^0-9]/g, ' ').trim()
  let arr = nums.split(' ')
    for(let i = 0; i < arr.length; i++){
      numArr.push(Number(arr[i]))
    }
  return Math.max(...numArr)
};