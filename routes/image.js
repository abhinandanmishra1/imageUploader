const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Image = require("../models/image");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    let image = new Image({
      url: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // save image in mongodb
    await image.save();
    res.status(200).send({
      image,
    });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
