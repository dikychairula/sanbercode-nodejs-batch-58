import express from "express";
import multer from "multer";
import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";

const router = express.Router();
const cekRoute = [
    {name: 'pindang'},
    {name: 'bokir'}
];

router.get("/cek", (req, res) => {
    res.send(cekRoute);
});

router.post("/upload/single", single, async(req, res) => {
    if (!req.file) {
        return res.status(400).send('No File uploaded');
    }
    try {
        const result = await handleUpload(req.file.buffer); // Menggunakan buffer dari multer
        res.status(200).send(result);
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        res.status(500).send('Error uploading to Cloudinary');
    }
});

router.post("/upload/multiple", multiple, (req, res) => {
    
});


export default router;
