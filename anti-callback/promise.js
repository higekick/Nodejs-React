const fs = require('fs')

function readFile_pr (fname) {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, 'utf-8', (err, s) => {
      if (err !== null) {
        reject(err)
      }
      resolve(s + ': PromiseDone!')
    })
  })
}

readFile_pr('a.txt')
  .then((text) => {
    console.log('read done a.txt', text)
    return readFile_pr('b.txt')
  })
  .then((text) => {
    console.log('read done b.txt', text)
    return readFile_pr('c.txt')
  })
  .then((text) => {
    console.log('read done c.txt', text)
  })
  .catch(onReject)
  // どれか一つでもrejectされると呼ばれ、後続の処理は行われない

function onReject (e) {
  console.log('Fatal!Fatal:' + e)
}
