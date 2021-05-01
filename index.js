// 8kyu - Points of Reflection

// function symmetricPoint(p,q) { 
//   const diff =  [q[0]-p[0], q[1]-p[1]]
//   return [diff[0] + q[0], diff[1] + q[1]]
// }

// console.log(symmetricPoint([0, 0], [1, 1]))


// 8kyu - Basic Mathematical Operations

// const basicOp = (op, v1, v2) => op === '-' ? v1-v2 : op === '+' ? v1+v2 : op === '*' ? v1*v2 : v1/v2

// console.log(basicOp('+', 4, 7))

// 8kyu - Coefficients of the Quadratic Equation
// const quadratic = (a, b) => [1,(a+b)*-1, a*b]

// 8kyu - Smallest unused ID
// function nextId(ids){
//   const used = new Set(ids);
//   for (let i = 0; i <= ids.length; i++) {
//     if (!used.has(i)) return i;
//   }
// }

//8kyu - noobCode01:SUPERSIZE ME
// function maxNum(num){
//   return num.toString().split('').sort((a, b) => b - a).join('')
// }

// 8kyu - A wolf in sheep's clothing

// function warnTheSheep(q){
//   const num = (q.length-1) - q.indexOf('wolf')
//   return `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`
// }


