const os = require('os')
const fs = require('fs')

let user = os.userInfo()
let platform = os.platform()
let date = new Date()
let msg = `User: ${user.username} started app at ${date} on the '${platform}' platform`

fs.appendFile("newFile.txt", msg, (err) => {
 console.log('error') 
})