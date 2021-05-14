8kyu - A wolf in sheep's clothing

function warnTheSheep(q){
  const num = (q.length-1) - q.indexOf('wolf')
  return `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`
}
