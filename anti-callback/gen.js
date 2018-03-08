const fs = require('fs')

function readGfn (g, fname) {
  fs.readFile(fname, 'utf-8', (e, data) => {
    g.next(data)
  })
}

const g = (function * () {
  const a = yield readGfn(g, 'a.txt')
  console.log(a)
  const b = yield readGfn(g, 'b.txt')
  console.log(b)
  const c = yield readGfn(g, 'c.txt')
  console.log(c)
})()
g.next()
