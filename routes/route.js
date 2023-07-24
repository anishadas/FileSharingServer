import express from 'express';
import { imgUploader,imgDownloader } from '../controllers/imgController.js';
import upload from '../middleware/middleware.js';

const router = express.Router();


// '/' : localhost:8000
// '/upload': localhost:8000/upload
// need a middleware to do anything before going to controllers for any action
router.post('/upload', upload.single('file'),imgUploader);
router.get('/file/:id', imgDownloader);

export default router;