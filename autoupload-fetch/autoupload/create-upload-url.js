require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// upload by referencing folder mapped to auto upload remote path
// look at network caching
const url = cloudinary.url('remote-media/images/dolphin.jpg')
console.log(url)
open(url, { browser: 'chrome', incognito: true }) // bypass browser cache
