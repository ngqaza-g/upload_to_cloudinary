const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary');



router.post('/upload', (req, res)=>{
    const { file } = req.body;

    console.log(file);

    const resp = cloudinary.uploader.upload(file, {public_id: "my_first_upload"})

    resp.then((data) => {
    console.log(data);
    console.log(data.secure_url);
    }).catch((err) => {
    console.log(err);
    });

    res.send("Yey I got the file");
});


module.exports = router;