// bo_3px_solid_white,c_fill,l_bird-close-up,w_300,h_300,x_150,y_150
// /l_text:Impact_60_stroke:TINDER,co_white,g_south,x_150,y_10/

require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// add 4th text image and overlays
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
      overlay: 'bird-close-up',
      border: '3px_solid_white',
      crop: 'fill',
      width: 300,
      height: 300,
      x: 150,
      y: 150
    },
    {
      overlay: {
        font_family: 'Impact',
        font_size: 60,
        font_style: 'stroke',
        text: 'TINDER'
      },
      color: 'white',
      gravity: 'south',
      x: 150,
      y: 10
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
    },
    {
      overlay: 'funny-cow',
      border: '3px_solid_white',
      crop: 'fill',
      width: 300,
      height: 300,
      x: -150,
      y: 300
    },
    {
      overlay: {
        font_family: 'Impact',
        font_size: 60,
        font_style: 'stroke',
        text: 'INSTAGRAM'
      },
      color: 'white',
      gravity: 'south',
      x: -150,
      y: 10
    }
  ]
})

console.log(url)
open(url)
