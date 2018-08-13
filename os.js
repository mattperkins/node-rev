const os = require('os')
const fs = require('fs')
const userFromFile = require('./user')

console.log(userFromFile.firstName)

let user = os.userInfo()
let platform = os.platform()
let date = new Date()
let msg = `User: ${user.username} started app at ${date} on the '${platform}' platform`

// writes msg data to file
// fs.appendFile("newFile.txt", msg, () => {
//  console.log('Data written to file')
// })