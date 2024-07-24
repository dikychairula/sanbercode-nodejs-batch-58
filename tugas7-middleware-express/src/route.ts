import express from "express";
import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";

const router = express.Router();

router.post("/upload/single", single, async(req, res) => {
    if (!req.file) {
        return res.status(400).send('No File uploaded');
    }
    try {
        const result = await handleUpload(req.file.buffer);
        res.status(200).send(result);
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        res.status(500).send('Error uploading to Cloudinary');
    }
});

router.post("/upload/multiple", multiple, async (req, res) => {
    if (!req.files) {
        return res.status(400).send('No Files uploaded');
    }
    try {
        //upload each buffer to cloudinary using Promise.all
        const promises = (req.files as Express.Multer.File[]).map(file => handleUpload(file.buffer));
        const results = await Promise.all(promises);
        res.status(200).send(results);
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        res.status(500).send('Error uploading to Cloudinary');
    }
});

export default router;