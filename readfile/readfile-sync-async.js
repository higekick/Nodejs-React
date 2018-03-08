const fs = require('fs')

const data = fs.readFileSync('kakugen.txt', 'utf-8')
console.log(data)

fs.readFile('kakugen.txt', 'utf-8', readHandler)
function readHandler (err, data) {
  if (err !== null) {
    console.log(err)
  }
  console.log(data)
}

fs.readFile('kakugen.txt', 'utf-8',
  function readHandler (err, data) {
    if (err !== null) {
      console.log(err)
    }
    console.log(data)
  })

fs.readFile('kakugen.txt', 'utf-8',
  (err, data) => {
    if (err !== null) {
      console.log(err)
    }
    console.log(data)
  })
