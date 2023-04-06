## Image Uploader using Node.js, Express
- [Live Service](https://image-uploader-l0xs.onrender.com/)
- Used cloudinary api for uploading image and getting an url
- stored the url on `MongoDb` Database
- This repository is just for the learning purpose for storing the images link on database
- I have used Node.js for javascript environment and express for writing post api 
- This repository contains `POST` api as of now because other apis can be created easily


## What it does?
- We can store any local image on cloudinary and then the link can be stored to mongoDb database

## How is it implemented?
- For frontend a html file which sends the file that are selected and calling upload api 
- In backend `multer` has been used for uploading the file 
- Using cloudinary api to get a url for the image
- Storing that image on mongoDb databse

## Future work?
- I want to create a npm package for the same, where user can provide the mongoDb uri and cloudinary secrets
- The image will be uploaded
- Basically I will abstract the implementation of request 

## That's it
