var replaceDots = function(str) {
  const search = '.'
  const replaceWith = '-'
  return str.split(search).join(replaceWith)
}