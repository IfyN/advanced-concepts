require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// add 2nd image and text overlays
const url = cloudinary.url('lion-head', {
  transformation: [
    {
      quality: 'auto',
      fetch_format: 'auto',
      border: '3px_solid_white',
      crop: 'fill',
      width: 300,
      height: 300,
      gravity: 'face'
    },
    {
      overlay: {
        font_family: 'Impact',
        font_size: 60,
        font_style: 'stroke',
        text: 'LINKEDIN'
      },
      color: 'white',
      gravity: 'south',
      y: 10
    },
    {
      overlay: 'big-glasses',
      border: '3px_solid_white',
      crop: 'fill',
      width: 300,
      height: 300,
      x: 300
    },
    {
      overlay: {
        font_family: 'Impact',
        font_size: 60,
        font_style: 'stroke',
        text: 'FACEBOOK'
      },
      color: 'white',
      gravity: 'south',
      x: 150,
      y: 10
    }
  ]
})

console.log(url)
open(url)
