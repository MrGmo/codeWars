function derive(coe,ex) {
  const value = (coe * ex)
  const v2 = ex - 1
  return `${coe * ex}x^${v2}`
}

derive(7,8)