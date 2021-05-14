8kyu - Points of Reflection

function symmetricPoint(p,q) {
  const diff =  [q[0]-p[0], q[1]-p[1]]
  return [diff[0] + q[0], diff[1] + q[1]]
}

console.log(symmetricPoint([0, 0], [1, 1]))

