8kyu - Logical Calculator
function andCalc(array) {
  if (array.every(x => x === true) || array.every(x => x === false)) {
    return array[0];
  } else {
    return false;
  }
}
function orCalc(array) {
  return array.reduce((x, y, z) => {
    return x === y ? x : true;
  });
}
function xorCalc(array) {
  return array.reduce((x, y, z) => x !== y);
}
function logicalCalc(array, op) {
  if (op === "AND") {
    return andCalc(array);
  } else if (op === "OR") {
    return orCalc(array);
  } else if (op === "XOR") {
    return xorCalc(array);
  }
}

console.log(logicalCalc([true, true, true, false], "AND"));
