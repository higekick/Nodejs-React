const s = 'Keep on Asking, and It Will Be Given You.'
const r = s.replace(/[a-z]+/g, function (m) {
  return m.toUpperCase() + '_'
})
console.log(r)

const ar = [100, 1, 20, 40, 30, 4]
ar.sort((a, b) => { return b - a })
console.log(ar)
