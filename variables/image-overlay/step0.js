// upload a small video such as a customer might upload from an iphone
require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url('baseball-cap', {})

open(url)
