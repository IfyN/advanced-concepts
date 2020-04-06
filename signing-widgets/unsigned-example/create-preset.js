require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.api
  .create_upload_preset({
    name: 'widget-preset',
    unsigned: true
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))
