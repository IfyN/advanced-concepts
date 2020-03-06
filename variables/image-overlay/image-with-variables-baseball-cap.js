// upload a small video such as a customer might upload from an iphone
require('dotenv').config()
const path = require('path')
const fs = require('fs')
const cloudinary = require('cloudinary').v2
const open = require('open')

// pick a color
const color = 'ffc0cb'

// generate a range of widths
const urls = []
// generate a range of 5 widths 100,...,500
const range = [...Array(5).keys()].map(item => {
  return (item + 1) * 100
})

// generate an array of URLs
for (const width of range) {
  urls.push({
    width: width,
    url: cloudinary.url('baseball-cap', {
      transformation: [
        {
          variables: [
            ['$w', width],
            ['$correctx', '0.04'],
            ['$correcty', '0.1'],
            ['$logoscalar', '0.4'],
            ['$color', `!${color}!`]
          ]
        },
        { width: '$w', crop: 'scale' },
        {
          overlay: 'logo-big',
          crop: 'fit',
          gravity: 'north',
          width: '$width * $logoscalar',
          x: '$width * $correctx',
          y: '$width * 0.1',
          fetch_format: 'auto',
          quality: 'auto'
        },
        {
          effect: 'replace_color:$color:30:111111',
          dpr: '2.0',
          fetch_format: 'auto',
          quality: 'auto'
        }
      ]
    })
  })
}
// console.log(`${__dirname}/urls.json`)
// save json to a file to hand off to web devs
try {
  fs.writeFileSync(path.join(`${__dirname}/urls.json`), JSON.stringify(urls))
} catch (err) {
  console.error(err)
}
urls.forEach(item => open(item.url))
