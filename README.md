# Advanced Concepts

This folder contains data and scripts to use with exercises in Advanced Concepts workshop.

## Web Server
This folder contains asset folders that can be served using github.io.  To turn on github.io service after copying this repo into your account:
1. go to settings
2. scroll down to github pages
3. select `master branch` from source
4. check enforce HTTPS if you are using a CNAME for your github.io repo
5. you should be able to serve the assets using this URL:
```https://<domain name | accountname.github.io>/advanced-concepts/<images | raw | video>```

## env variables and credentials

Your .env should look like this:

```
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME  
API_SECRET=<api secret>   
ASSET_SOURCE_BASE="https://<github account>.github.io/advanced-concepts" 
``` 

If you want to request assets served from this repo use the following key in your .envj:  

`ASSET_SOURCE_BASE="https://cloudinary-training.github.io/advanced-concepts"`

## NPM Install 

### Node Code Snippets  

To use the node scripts for exercises
1. `npm install`
3. run your scripts from the root directory unless otherwise directed
4. make changes to scripts as needed for your cloud name
5. .env file is git ignored so it won't get checked in and doesn't exist in a fresh repo

### Signing Widgets: Node Server  

In the Signing Widgets module, you'll use a node server, so you'll need to install npm modules under
the `signing-widgets` directory.  

You'll need to change `cloud name` in these files: 

* siging-widgets/server/public/js/upload-client.js 
* signing-widgets/server/routes/ml.js  
* signing-widgets/server/routes/upload.js  
* signing-widgets/server/vides/ml.pug  
* signing-widgets/unsigned-example/script.js  


### Video Player: Vue.js Application

In the Video Player Module, you'll use a Vue.js application, so you'll need to install npm modules under
the `video-player` directory.  

You'll need to change `cloud name` in these files: 
 
* video-player/vuejs/src/main.js
* video-player/vuejs/srce/views/VideoTag.vue

### Formatting JavaScript  
This repo uses prettier for formatting.  If you're using Visual Studio Code you can add the prettier extension.  You can also rename the `.prettierrc.suggest` to the hidden file `.prettier` to use the rules followed in formatting the code in this repo.



